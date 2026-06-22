-- ============================================================
-- focus-attention — world leaderboard schema
-- Run this ONCE in your Supabase project (SQL Editor → New query → Run).
--
-- Ranking rule (single source of truth, mirrored in the client):
--   ORDER BY words DESC, attention_sec DESC, recall_sec ASC
--
-- Security model: the anon key shipped to the browser is public. All write
-- access is gated by Row Level Security + the security-definer submit_score()
-- function below, which only ever touches the caller's own row. Reads are
-- public so anyone can view the board.
-- ============================================================

-- ---- table: one best row per player ----
create table if not exists public.scores (
  user_id       uuid primary key references auth.users (id) on delete cascade,
  display_name  text not null default 'Player',
  words         integer not null default 0,
  attention_sec integer not null default 0,
  recall_sec    integer not null default 0,
  updated_at    timestamptz not null default now()
);

alter table public.scores enable row level security;

-- Public read: anyone (anon or authenticated) can view the leaderboard.
drop policy if exists "scores are publicly readable" on public.scores;
create policy "scores are publicly readable"
  on public.scores for select
  using (true);

-- No direct INSERT/UPDATE/DELETE policies are defined, so RLS denies all
-- direct writes from the anon/authenticated roles. Writes go exclusively
-- through submit_score() below, which runs as the table owner.

-- ---- submit_score: upsert the caller's best, only if the new score wins ----
create or replace function public.submit_score(
  p_words         integer,
  p_attention_sec integer,
  p_recall_sec    integer,
  p_display_name  text
)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  uid uuid := auth.uid();
begin
  if uid is null then
    raise exception 'must be signed in to submit a score';
  end if;

  insert into public.scores (user_id, display_name, words, attention_sec, recall_sec, updated_at)
  values (uid, coalesce(nullif(p_display_name, ''), 'Player'),
          greatest(p_words, 0), greatest(p_attention_sec, 0), greatest(p_recall_sec, 0), now())
  on conflict (user_id) do update
    set words         = excluded.words,
        attention_sec = excluded.attention_sec,
        recall_sec    = excluded.recall_sec,
        display_name  = excluded.display_name,
        updated_at    = now()
  -- Only overwrite when the incoming score beats the stored one by the
  -- ranking rule: more words, then longer attention, then faster recall.
  where  (excluded.words, excluded.attention_sec, -excluded.recall_sec)
       > (public.scores.words, public.scores.attention_sec, -public.scores.recall_sec);
end;
$$;

-- Let signed-in players call it; anonymous visitors cannot.
grant execute on function public.submit_score(integer, integer, integer, text) to authenticated;

-- ---- leaderboard view: ranked rows for display ----
create or replace view public.leaderboard as
  select
    row_number() over (
      order by words desc, attention_sec desc, recall_sec asc
    ) as rank,
    user_id,
    display_name,
    words,
    attention_sec,
    recall_sec
  from public.scores;

-- The view is owned by the definer and reads the publicly-readable table,
-- so anon + authenticated can select from it.
grant select on public.leaderboard to anon, authenticated;
