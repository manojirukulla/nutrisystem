# NutriSystem stakeholder review

Completed 2026-10-07. The PRD and UX package are ready for stakeholder review. Approval and implementation readiness remain pending.

Open [the mockup gallery](mockups/index.html) in a browser. It works offline when the folder structure and image asset are retained. The gallery connects the Customer, Provider and SuperAdmin examples and includes a phone composition.

## Review sequence

1. Read the [product brief](../../briefs/brief-nutrisystem-2026-10-07/brief.md) for purpose and the [PRD](../../prds/prd-nutrisystem-2026-10-07/prd.md) for scope and decisions.
2. Walk Directory → Provider details → Sign-in/contact → Customer review. Check whether search, menus and contact access express the intended simple listing service.
3. Open Provider onboarding and ownership claim. Check initial publishing approval, direct menu-edit save, listing-edit approval, and SuperAdmin ownership decisions. Review the proposed picture/video upload treatment and listing video placeholder.
4. Walk SuperAdmin publishing, discovery, moderation and settings. Assess the evidence, decision states and separation between publishing and invitation eligibility. Review self-review blocking and removal/appeal requests carrying Review ID; request receipt must remain distinct from SuperAdmin's decision.
5. Inspect mobile composition and recovery states. Record changes to layouts, copy, fields and policy proposals against the relevant PRD requirement or UX surface.

The [visual specification](DESIGN.md) defines the design system; the [experience specification](EXPERIENCE.md) defines navigation, behavior and states. The [coverage check](coverage-check.md) maps all 26 functional requirements and six journeys and identifies variants documented without a separate screen composition.

## How to use the mockups

These are 13 static HTML review pages, including the gallery and phone framing page. Links navigate between examples or jump to labelled illustrative states. Native inputs and filter controls can be inspected, but they do not search stored data or save changes. There is no login, upload, contact call, discovery run, publication or invitation service behind them. Some examples intentionally show alternatives together for comparison.

All businesses, ratings, prices, reviews and food imagery are fictional or generated examples. The initial English copy, visual tokens, exact fields and state labels are proposals. The video tile is a placeholder without a clip; playable video will need user-initiated playback and accessible controls. Browser/platform translation remains the pilot approach; Telugu/Hindi display and image/PDF behavior require later device QA.

## Decisions to record

Record acceptance or requested changes to the purpose, pilot scope, six journeys and visual direction. Record whether each proposed interaction should be kept or revised. The owner has confirmed that menu edits need no SuperAdmin approval, listing edits need approval, SuperAdmin handles ownership, self-review is prohibited, removal/appeal requests use app or email with Review ID, and uploads support pictures/videos. Initial publishing review remains. Keeping current published content visible during listing-edit review is a UX proposal; exact evidence, media limits and mixed-edit classification remain implementation details. Use the PRD decision register for remaining targets, procedures and integration feasibility. Budget will be assessed after architecture finalizes the stack and cloud provider. Stakeholder names and decision authority have not been supplied.

After stakeholder feedback, reconcile the canonical PRD and UX documents together. Technical design and implementation planning follow that review. GTM remains deferred.

## Verification

The PRD retained FR-1 through FR-26. The UX mechanical check verified shared component names, tokens, source paths, flow coverage and mockup references. Structure and prose passes were applied to both document sets. Browser inspection checked the desktop directory and Provider detail, the 390px Customer and Provider layouts, and the SuperAdmin discovery composition. Mobile navigation was corrected to keep List your business reachable. Link and image audits are recorded in [artifact-audit.json](verification/artifact-audit.json).

Saved examples: [desktop directory](verification/directory-desktop.jpg) and [phone directory](verification/directory-mobile.jpg). These checks verify the review artifacts; they are not evidence of implemented services or complete accessibility certification.
