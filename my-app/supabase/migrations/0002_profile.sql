-- ============================================================
-- focus-attention — profile edits (display name + avatar)
-- Run this ONCE in your Supabase project (SQL Editor → New query → Run),
-- after 0001_leaderboard.sql.
--
-- Same security model as submit_score: direct writes stay denied by RLS;
-- this security-definer function is the only write path, and it only ever
-- touches the caller's own row. Unlike submit_score (which writes only on a
-- winning score), this always persists — it's for profile edits, not scores.
-- ============================================================

create or replace function public.update_profile(
  p_display_name text default null,
  p_avatar_url   text default null
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
    raise exception 'must be signed in to edit a profile';
  end if;

  -- Seed a baseline row if the player has none yet, so name/photo can be
  -- edited before the first finished round.
  insert into public.scores (user_id, display_name)
  values (uid, coalesce(nullif(p_display_name, ''), 'Player'))
  on conflict (user_id) do nothing;

  -- Null/empty args mean "leave that field unchanged".
  update public.scores
    set display_name = coalesce(nullif(p_display_name, ''), display_name),
        avatar_url   = coalesce(nullif(p_avatar_url, ''), avatar_url),
        updated_at   = now()
  where user_id = uid;
end;
$$;

grant execute on function public.update_profile(text, text) to authenticated;
