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
- **2026-06-24** — Fixed viewport background bleed: updated `FocusGame.astro` phase sections (`setup`, `recall`, `result`) to use a minimum height of `calc(100vh - 3.5rem)` instead of `88vh`, guaranteeing the game screen fills the entire viewport on load and preventing background color bleeding from subsequent sections.
- **2026-06-24** — Stripped all comments (single-line, multi-line, and HTML comments) across the entire codebase (`src/` directory) to clean up the code.
- **2026-06-24** — Fixed avatar flash on refresh: updated `updateProfile` in `leaderboard.ts` to sync custom name/avatar changes back to the Supabase Auth session metadata, ensuring the custom profile paints immediately without fallback lag.
- **2026-06-24** — Swapped the header navigation action icons: placed the Theme toggle icon where the Leaderboard icon was, and the Leaderboard icon where the Theme toggle was.
- **2026-06-24** — Enhanced mobile responsiveness: scaled down numeric input sizes/gaps on screens below 400px wide in `FocusGame.astro`, replaced fixed bottom padding with responsive margins, enabled title text wrapping on small viewports, and added base rules to `global.css` to hide WebKit's default summary dropdown arrow on Safari/iOS.
- **2026-06-24** — Changed word unit display to always use `"w"` for leaderboard scores and profile best scores in `SiteHeader.astro`, overriding any language-specific abbreviations.
- **2026-06-24** — Configured `robots.txt` and updated `sitemap.xml` in the `public` directory to list all 19 localized landing page URLs (`/{lang}`) in addition to English root and static info pages.
- **2026-06-24** — Added new favicon definitions (PNG, SVG, ICO), Apple touch icon configuration, web app title (`BrainFocus`), and manifest link to `<head>` in `Layout.astro`.
- **2026-06-24** — Fixed footer visibility: added `data-site-footer` to the footer and hid the footer element during active game phases (`watch`, `recall`, `result`) in `FocusGame.astro` so that it is only visible on the landing/setup page.
- **2026-06-24** — Stripped category-comment lines (`// people & family`, `// transport`, etc.) from all 20 word-pool files (`src/i18n/words/*.ts` + `src/scripts/words.ts`), removing 1 340 lines total. Arrays are now pure data. Fixed 3 duplicate words in `pl.ts` (`port`→`przystań`, `latarka`→`pochodnia`, `brelok`→`zawieszka`). Removed the nested `.git` repo inside `my-app/`. Fixed 8 Tailwind v4 canonical-class warnings in `FocusGame.astro`.
- **2026-06-22** — Added a Google-authenticated world leaderboard (Supabase/Postgres). New: `@supabase/supabase-js` dep, `.env.example` (two `PUBLIC_` vars), `supabase/migrations/0001_leaderboard.sql` (scores table + RLS + `submit_score` security-definer RPC + ranked `leaderboard` view), `src/lib/supabase.ts` (client + `isConfigured`), `src/lib/leaderboard.ts` (auth/fetch/submit helpers). Header now has an auth-aware profile (Google sign-in / name + sign out) and a leaderboard dropdown (top 10, user row highlighted, "#N of M" position). `FocusGame.updateBest` submits a new best via RPC. Ranking everywhere: words desc → attention desc → recall asc. Degrades gracefully with no keys ("not set up yet"). Verified: `astro check` 0 errors, `astro build` ✓ (inert without keys). **Pending user setup:** create Supabase project, run the migration, set up Google OAuth, add keys to `.env`.
- **2026-06-22** — Reworked the personal best line to show three values: total words recalled · recall time · chosen hold (e.g. `Best Score: 5 words · recalled in 12 sec · 1 min hold.`). Added recall-time tracking (`recallStartedAt`/`recallSec`) and saved the chosen `holdSec` into the best record. Best ranks by words, tie-broken by faster recall. Record shape changed to `{words, recallSec, holdSec}`; legacy bests are ignored and replaced next round. Verified: `astro check` 0 errors, `astro build` ✓.
- **2026-06-22** — Added a recall time limit: when the player chooses a hold duration, the recall phase now gets a window of **2× that duration**. A countdown ("m:ss left to recall") shows above the chosen-sequence area. The round ends and the result is scored when either the full sequence is rebuilt (existing behavior) or the recall timer expires — whichever comes first. Timer is cleaned up on full rebuild, wrong pick, and natural expiry to avoid a double `startResult`. Verified: `astro check` 0 errors, `astro build` ✓.
- **2026-06-22** — Built the focus-span game. Installed Tailwind v4 (`@tailwindcss/vite` via `astro add tailwind`). Encoded the full Apple DESIGN.md token set into `src/styles/global.css` `@theme` + `@utility` layer (colors, SF Pro/Inter fonts, radius/spacing scale, the two button grammars, single product shadow). Updated `Layout.astro` (meta, OG tags, Inter fallback, reduced-motion). Game implemented as a `<focus-game>` custom element in `FocusGame.astro` with 4 phases (setup → watch → recall → result): word every 2s, 10s–12hr custom timer, recall in order, focus span = longest correct run from the start; word bank in `src/scripts/words.ts`. Verified: `astro build` ✓, `astro check` 0 errors (installed `@astrojs/check`), dev server serves HTTP 200 with all phases.
- **2026-06-22** — Set up tooling: installed `web-design-guidelines` and `tailwind-4-docs` skills, added `astro-docs` MCP server, created this progress file.
