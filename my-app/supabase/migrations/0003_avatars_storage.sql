-- ============================================================
-- focus-attention — avatar storage bucket
-- Run this ONCE in your Supabase project (SQL Editor → New query → Run),
-- after 0002_profile.sql.
--
-- Backs uploadAvatar() in src/lib/leaderboard.ts, which uploads to
--   avatars/<user_id>/avatar.<ext>
-- and stores the resulting public URL on the player's scores row via
-- update_profile().
--
-- Security model: a public bucket (anyone can read avatars — they're shown on
-- the public leaderboard), but writes are restricted by RLS on storage.objects
-- so a signed-in user can only write inside their OWN <user_id>/ folder.
-- ============================================================

-- ---- bucket: public-read avatars ----
insert into storage.buckets (id, name, public)
values ('avatars', 'avatars', true)
on conflict (id) do update set public = true;

-- ---- policies on storage.objects, scoped to the avatars bucket ----
-- The first path segment must equal the caller's user id, so a user can only
-- touch files under avatars/<their-uid>/...  (storage.foldername()[1] = top folder).

drop policy if exists "avatars are publicly readable" on storage.objects;
create policy "avatars are publicly readable"
  on storage.objects for select
  using (bucket_id = 'avatars');

drop policy if exists "users can upload their own avatar" on storage.objects;
create policy "users can upload their own avatar"
  on storage.objects for insert
  to authenticated
  with check (
    bucket_id = 'avatars'
    and (storage.foldername(name))[1] = auth.uid()::text
  );

-- Needed because uploadAvatar() uses upsert (re-uploading overwrites the
-- existing object at the same path).
drop policy if exists "users can update their own avatar" on storage.objects;
create policy "users can update their own avatar"
  on storage.objects for update
  to authenticated
  using (
    bucket_id = 'avatars'
    and (storage.foldername(name))[1] = auth.uid()::text
  )
  with check (
    bucket_id = 'avatars'
    and (storage.foldername(name))[1] = auth.uid()::text
  );

drop policy if exists "users can delete their own avatar" on storage.objects;
create policy "users can delete their own avatar"
  on storage.objects for delete
  to authenticated
  using (
    bucket_id = 'avatars'
    and (storage.foldername(name))[1] = auth.uid()::text
  );
