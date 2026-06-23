-- ============================================================
-- focus-attention — stop submit_score from clobbering profile edits
-- Run this ONCE in your Supabase project (SQL Editor → New query → Run),
-- after 0003_avatars_storage.sql.
--
-- Bug being fixed: submit_score's ON CONFLICT used to overwrite display_name
-- and avatar_url from the *provider* (Google) values on every winning score.
-- That wiped out any name/photo a player had set via update_profile, so the
-- leaderboard reverted to the old name/photo whenever they beat their best.
--
-- Fix: profile fields (display_name, avatar_url) are now SEEDED only when the
-- row is first created and are never touched on a score update. update_profile
-- becomes the single source of truth for name/photo; submit_score only ever
-- writes score columns once the row exists.
-- ============================================================

create or replace function public.submit_score(
  p_words         integer,
  p_attention_sec integer,
  p_recall_sec    integer,
  p_display_name  text,
  p_avatar_url    text default null
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

  insert into public.scores (user_id, display_name, avatar_url, words, attention_sec, recall_sec, updated_at)
  values (uid, coalesce(nullif(p_display_name, ''), 'Player'), nullif(p_avatar_url, ''),
          greatest(p_words, 0), greatest(p_attention_sec, 0), greatest(p_recall_sec, 0), now())
  on conflict (user_id) do update
    -- Score columns only. display_name/avatar_url are intentionally NOT updated
    -- here — they're owned by update_profile so player edits aren't clobbered.
    set words         = excluded.words,
        attention_sec = excluded.attention_sec,
        recall_sec    = excluded.recall_sec,
        updated_at    = now()
  -- Only overwrite when the incoming score beats the stored one by the
  -- ranking rule: more words, then longer attention, then faster recall.
  where  (excluded.words, excluded.attention_sec, -excluded.recall_sec)
       > (public.scores.words, public.scores.attention_sec, -public.scores.recall_sec);
end;
$$;

grant execute on function public.submit_score(integer, integer, integer, text, text) to authenticated;
