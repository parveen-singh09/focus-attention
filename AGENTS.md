# Agent instructions

This file is read by coding agents (Claude Code, Cursor, Gemini CLI, GitHub Copilot, OpenCode, and others that support the AGENTS.md convention).

## Progress tracking
- **Always read [progress.md](progress.md) at the start of a session.**
- **Update [progress.md](progress.md) as you work**: log completed work (newest first, dated), keep "Current focus" / "Next up" accurate, and record anything blocking under "Blockers".

## Project layout
- `my-app/` — Astro application (run commands from there).
- [DESIGN.md](DESIGN.md) — design source of truth (Apple-design-analysis spec). Follow it for visual/UX decisions.

## Tooling available
- Skills: `.agents/skills/web-design-guidelines`, `.agents/skills/tailwind-4-docs`.
- MCP: `astro-docs` for official Astro documentation.
