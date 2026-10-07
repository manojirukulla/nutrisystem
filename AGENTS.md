# NutriSystem agent instructions

## Read first

1. Read `docs/HANDOFF.md` for the current stage, decision status, and next action.
2. Read `docs/BMAD-SETUP.md` for verified tooling commands.
3. Read the relevant canonical artifacts under `_bmad-output/` when they exist.
4. Read the installed BMAD skill before invoking its workflow.

## Working agreement

- Use the installed BMAD 6.12.1 Core and BMM workflows for product development.
- Begin product definition with `bmad-product-brief`, then `bmad-prd`. Existing discussion is input, not a completed specification.
- Current scope is setup and product definition. Detailed UX and architecture belong to subsequent discussions; do not scaffold the application before those decisions and implementation readiness are established.
- Distinguish confirmed requirements, proposals, assumptions, and open questions. Do not silently select the pilot geography, technology, hosting, or brand copy.
- Keep BMAD output as the canonical specification. Handoffs link to artifacts and record status; they must not become a competing PRD.
- The user requests subagents for independent work that can run in parallel. Give agents distinct ownership and reconcile their output before changing shared artifacts.
- At a session boundary, update `docs/HANDOFF.md` with completed work, artifact links, unresolved decisions, and the next workflow.
- Keep secrets, local tools, caches, and personal configuration out of Git.
- BMAD upgrades are deliberate changes. Preserve customizations under `_bmad/custom/`; do not silently use documentation for another version.

## Runtime

Run `. ./scripts/Set-BmadEnvironment.ps1` in PowerShell before Python-backed BMAD commands. This sets process-local tooling paths. See `docs/BMAD-SETUP.md` for verification commands.
