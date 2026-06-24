# Progress

Shared progress log for all coding agents working in this repo. Read this first; update it as you go.

## How to use this file
- Before starting work, read this file and the **Current focus** section.
- When you finish a meaningful unit of work, add an entry under **Log** (newest at top) with the date.
- Keep **Current focus** and **Next up** accurate — move done items to the Log.
- Note anything that blocks progress under **Blockers**.

## Project
- **Root:** `n:\focus-attention`
- **App:** `my-app` (Astro)
- **Design spec:** [DESIGN.md](DESIGN.md) — Apple-design-analysis, photography-first interface.
- **Skills:** `.agents/skills/web-design-guidelines`, `.agents/skills/tailwind-4-docs`
- **MCP:** `astro-docs` (https://mcp.docs.astro.build/mcp)

## Current focus
- Core focus-span game is built and verified. Ready for polish/iteration.

## Next up
- Optional: hover/keyboard polish review via `web-design-guidelines` skill.
- Optional: persist a session history (currently only personal-best in localStorage).

## Blockers
- _None._

## Log
- **2026-06-24** — Stripped category-comment lines (`// people & family`, `// transport`, etc.) from all 20 word-pool files (`src/i18n/words/*.ts` + `src/scripts/words.ts`), removing 1 340 lines total. Arrays are now pure data. Fixed 3 duplicate words in `pl.ts` (`port`→`przystań`, `latarka`→`pochodnia`, `brelok`→`zawieszka`). Removed the nested `.git` repo inside `my-app/`. Fixed 8 Tailwind v4 canonical-class warnings in `FocusGame.astro`.
- **2026-06-22** — Added a Google-authenticated world leaderboard (Supabase/Postgres). New: `@supabase/supabase-js` dep, `.env.example` (two `PUBLIC_` vars), `supabase/migrations/0001_leaderboard.sql` (scores table + RLS + `submit_score` security-definer RPC + ranked `leaderboard` view), `src/lib/supabase.ts` (client + `isConfigured`), `src/lib/leaderboard.ts` (auth/fetch/submit helpers). Header now has an auth-aware profile (Google sign-in / name + sign out) and a leaderboard dropdown (top 10, user row highlighted, "#N of M" position). `FocusGame.updateBest` submits a new best via RPC. Ranking everywhere: words desc → attention desc → recall asc. Degrades gracefully with no keys ("not set up yet"). Verified: `astro check` 0 errors, `astro build` ✓ (inert without keys). **Pending user setup:** create Supabase project, run the migration, set up Google OAuth, add keys to `.env`.
- **2026-06-22** — Reworked the personal best line to show three values: total words recalled · recall time · chosen hold (e.g. `Best Score: 5 words · recalled in 12 sec · 1 min hold.`). Added recall-time tracking (`recallStartedAt`/`recallSec`) and saved the chosen `holdSec` into the best record. Best ranks by words, tie-broken by faster recall. Record shape changed to `{words, recallSec, holdSec}`; legacy bests are ignored and replaced next round. Verified: `astro check` 0 errors, `astro build` ✓.
- **2026-06-22** — Added a recall time limit: when the player chooses a hold duration, the recall phase now gets a window of **2× that duration**. A countdown ("m:ss left to recall") shows above the chosen-sequence area. The round ends and the result is scored when either the full sequence is rebuilt (existing behavior) or the recall timer expires — whichever comes first. Timer is cleaned up on full rebuild, wrong pick, and natural expiry to avoid a double `startResult`. Verified: `astro check` 0 errors, `astro build` ✓.
- **2026-06-22** — Built the focus-span game. Installed Tailwind v4 (`@tailwindcss/vite` via `astro add tailwind`). Encoded the full Apple DESIGN.md token set into `src/styles/global.css` `@theme` + `@utility` layer (colors, SF Pro/Inter fonts, radius/spacing scale, the two button grammars, single product shadow). Updated `Layout.astro` (meta, OG tags, Inter fallback, reduced-motion). Game implemented as a `<focus-game>` custom element in `FocusGame.astro` with 4 phases (setup → watch → recall → result): word every 2s, 10s–12hr custom timer, recall in order, focus span = longest correct run from the start; word bank in `src/scripts/words.ts`. Verified: `astro build` ✓, `astro check` 0 errors (installed `@astrojs/check`), dev server serves HTTP 200 with all phases.
- **2026-06-22** — Set up tooling: installed `web-design-guidelines` and `tailwind-4-docs` skills, added `astro-docs` MCP server, created this progress file.
