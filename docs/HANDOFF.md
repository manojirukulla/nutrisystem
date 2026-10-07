# NutriSystem handoff

Updated: 2026-10-07. Stage: PRD and UX package completed for stakeholder review.

## Current state

BMAD Core/BMM 6.12.1 setup is complete. The product brief, PRD, DESIGN.md, EXPERIENCE.md and 13 static HTML review pages are complete as stakeholder-review editions. Stakeholder approval and implementation readiness remain pending. No application services or technical architecture exists. The owner authorized publishing this review package to [manojirukulla/nutrisystem](https://github.com/manojirukulla/nutrisystem). Git metadata records the current commit, branch and synchronization state.

The latest owner instruction supersedes the earlier coaching pause: complete the PRD and UX mockups without waiting for further questions. Exact copy, fields, visual tokens and interaction states are labelled proposals. These unresolved choices do not block stakeholder review. GTM remains deferred.

Latest feedback: the owner finds the first-cut look acceptable and requires the product vision to carry through loading/waiting symbols, buttons and the wider experience, aiming for an enchanting result. This is positive first-cut visual feedback, not full stakeholder or policy sign-off. The UX spines capture that principle; exact motifs, motion and microcopy remain proposals to demonstrate in the next refinement.

Latest policy update: the owner settled the core menu/listing approval split, assigned ownership decisions to SuperAdmin, prohibited self-review, and defined review removal/appeal requests through app or email with a review ID. Pictures and videos are supported. The canonical PRD and UX now carry these decisions and the representative mocks show the affected states. Budget is to be assessed after architecture finalizes the stack and cloud provider; no cost or technology has been selected here.

## Canonical artifacts

- [Product brief](../_bmad-output/planning-artifacts/briefs/brief-nutrisystem-2026-10-07/brief.md) and [addendum](../_bmad-output/planning-artifacts/briefs/brief-nutrisystem-2026-10-07/addendum.md).
- [PRD](../_bmad-output/planning-artifacts/prds/prd-nutrisystem-2026-10-07/prd.md) and [addendum](../_bmad-output/planning-artifacts/prds/prd-nutrisystem-2026-10-07/addendum.md).
- [DESIGN.md](../_bmad-output/planning-artifacts/ux-designs/ux-nutrisystem-2026-10-07/DESIGN.md) and [EXPERIENCE.md](../_bmad-output/planning-artifacts/ux-designs/ux-nutrisystem-2026-10-07/EXPERIENCE.md).
- [Mockup gallery](../_bmad-output/planning-artifacts/ux-designs/ux-nutrisystem-2026-10-07/mockups/index.html) and [stakeholder review guide](../_bmad-output/planning-artifacts/ux-designs/ux-nutrisystem-2026-10-07/REVIEW.md).
- [PRD quality pass](../_bmad-output/planning-artifacts/prds/prd-nutrisystem-2026-10-07/quality-pass.md), [UX coverage check](../_bmad-output/planning-artifacts/ux-designs/ux-nutrisystem-2026-10-07/coverage-check.md), and [artifact audit](../_bmad-output/planning-artifacts/ux-designs/ux-nutrisystem-2026-10-07/verification/artifact-audit.json).
- [Offline review ZIP](../_bmad-output/stakeholder-review/nutrisystem-review-2026-10-07.zip), preserving the canonical document/mockup paths. Extract before opening the gallery.

Each workflow workspace has a script-managed memlog. Final specifications and their latest entries supersede provisional status in historical source/reconciliation snapshots.

## Source history

- [Source intake](../_bmad-output/planning-artifacts/source-intake-2026-10-07.md).
- [Earlier product chat retrieval](sources/earlier-product-chat-2026-10-07.md).
- [Historical discussion input](discussion-input-2026-10-07.md).
- [Landscape/API research](../_bmad-output/planning-artifacts/research/landscape-2026-10-07.md).

These are evidence and history, not competing specifications. Human decisions, proposals and assumptions remain distinct in the canonical artifacts.

## Completed verification

FR-1 through FR-26 and all six journeys are preserved and mapped. The UX spines use 22 matching component names and resolved token/source/mockup references. Required structure/prose passes were applied. Browser inspection covered desktop and phone Customer layouts, Provider detail/form and SuperAdmin discovery; all 11 role/recovery compositions passed a 390px viewport check for horizontal overflow and missing images. After the policy update, the static audit checked 199 local HTML references with no missing files, broken fragments or duplicate IDs. Saved screenshots and responsive audits live in the UX verification folder. These are artifact checks, not implementation tests or stakeholder sign-off.

## Outstanding decisions and next action

Use the PRD decision register as the sole detailed list of decisions and residual choices. Budget is intentionally deferred until after stack/cloud architecture decisions; success targets remain open. Source English and exact visual/form/state choices are proposed. Settled policy rules must not be reopened as generic questions. Their remaining workflow details, mixed-edit classification, media limits/processing, contact-bearing assets, privacy and integration feasibility remain assigned to later gates. Browser/platform translation is selected; validate English/Telugu/Hindi device behavior during implementation QA rather than reopening app-managed localization now. SuperAdmin is the only administrative role, without restricting the number of accounts.

Next: conduct stakeholder review in the GitHub review PR using file/line comments, with the linked guide and gallery for context. Keep one actionable item per thread, record the decision and corresponding change, and reconcile the canonical PRD and UX together on the same review branch. Resolve addressed threads after the change or agreed decision; link a GitHub issue for explicitly deferred items. Record stakeholder acceptance and decision authority before advancing to architecture. Stakeholder identities have not been provided; no invitations/messages have been sent. Technical design and implementation planning follow the review and must resolve the relevant cost, policy and feasibility dependencies. Do not scaffold the application or silently choose technology/hosting.

## Tooling

Read [BMAD setup](BMAD-SETUP.md). Run `. ./scripts/Set-BmadEnvironment.ps1` before Python-backed BMAD commands. Memlog writes use `_bmad/scripts/memlog.py`. Read the installed skill before the next workflow. Use independent subagents with distinct ownership and reconcile their output.

## GitHub review handoff

Repository: [manojirukulla/nutrisystem](https://github.com/manojirukulla/nutrisystem), currently private. Review branch: `codex/stakeholder-review`, targeting `main`. The stakeholder review PR in [Pull requests](https://github.com/manojirukulla/nutrisystem/pulls) is the shared feedback record. Review-routing notes include the canonical documents and screen sources in Files changed, where GitHub's improved view permits commenting on any line of a changed file. Product requirements and mockup appearance remain unchanged by this review setup. The README and canonical REVIEW.md explain line comments, visual references, review submission and thread outcomes. The ZIP remains an optional offline visual preview; HTML source on GitHub is not a hosted mockup. Keep the PR open while stakeholder feedback is being reconciled; no merge or stakeholder approval is implied by publication.

GitHub publication shares the review artifacts; it does not deploy an application or send stakeholder invitations. Reviewers need a GitHub account and repository access. No automatic feedback monitoring has been configured. Git metadata records the exact commit and synchronization state.
