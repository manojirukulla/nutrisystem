# PRD input reconciliation

Date: 2026-10-07  
Scope: Reconcile `prd.md` and `addendum.md` against the historical handoff and later owner clarification. This is input reconciliation, not final PRD validation, feasibility sign-off, or stakeholder acceptance.

Sources: [source intake](../../source-intake-2026-10-07.md), [historical discussion input](../../../../docs/discussion-input-2026-10-07.md), [current handoff](../../../../docs/HANDOFF.md), [PRD](prd.md), and [addendum](addendum.md). Original requirements were checked against the historical file; the current handoff owns artifact/status routing.

## Preserved input

All recorded pilot feature groups appear in FR-1–FR-26: public browsing, chosen location and service coverage, all named search dimensions, horizontal cards/ratings/contact, Google/email identity, contact gating, provider ownership, onboarding and initial review, structured items/packages/photos/files, sourced unclaimed listings/claim verification, one editable 1–5 star review and optional text/reporting, content administration, discovery evidence/deduplication/daily time-and-timezone configuration/candidate vetting, eligible configurable invitations, conditional directory-plus-discovery launch, SEO, product insights, and multilingual launch.

Deferrals retain booking/payment, phone login, rotating menus, and expanded categories. The future evidence-based verification path remains visible. Warm cream/forest-green/food-photography direction is preserved. Stack/hosting/tagline are not promoted to decisions. Additional filter logic, audit policy, publishing states, ownership disclosure, metrics, and quality floors are labelled proposals, while operational questions have D-identifiers.

The latest owner direction is captured: Hyderabad, India; English/Telugu/Hindi; undecided budget; coaching; deferred GTM; evolution/visualization for stakeholder review before technical design and implementation. No stakeholder approval or external outreach is represented as completed.

## Gaps or status mismatches to correct

1. **Unconfirmed real-session prerequisite.** The journeys are appropriately illustrative proposals. Section 2 then says the owner “must confirm or replace these with real sessions before UX closure.” The owner selected coaching, but did not mandate customer research sessions or a research gate. Clarify whether owner confirmation of representative journeys is sufficient; label any requirement for real observed sessions as a proposal. Do not silently make UX closure depend on uncommissioned research.

2. **Stale geography dependency.** Section 6 says country-specific policy research requires selected geography. Hyderabad, India is already confirmed. Update this wording to the actual remaining work: India-specific policy questions may need research when those policies are defined. Avoid reopening the country decision.

3. **Residual GTM wording.** Section 7 still instructs that invented figures must not enter “GTM slides.” The later sections correctly defer GTM. Rephrase this as a rule for stakeholder materials, or explicitly state it applies only if GTM is commissioned later, so the active deliverable does not appear to include a GTM deck.

## Important open decisions preserved

These are acknowledged gaps in decision completeness, not lost source requirements: D-1 multilingual scope/ownership; D-2 budget/volume/thresholds/timing; D-3 service areas; D-4 limited Admin; D-5/D-6 company and offering taxonomy; D-7 identity mechanism; D-8 contact-bearing uploads and routes; D-9/D-10 publishing and claiming; D-11/D-12 review/moderation/comments; D-13/D-14 discovery and invitation feasibility/fallback; D-15 SEO scope; D-16 analytics policy; D-17 quality/operations; D-18 stakeholders; D-19 representative journeys, brand copy, UX references and mock depth. Coaching should resolve the decisions needed by each UX flow before closure.

## Source-to-requirement trace

| Source group | PRD treatment |
| --- | --- |
| C01–C05: product, categories, pilot, no transactions, roles | §1–§3, §5, D-4 |
| C06–C12: browse/login/location/search/cards | FR-1–FR-8 |
| C13–C14: structured offerings/files, daily menus deferred | FR-11–FR-12, §5 |
| C15–C16: review/report/unrated specifics | FR-15–FR-17, FR-5 |
| C17–C22: company management/publication/claim verification/moderation | FR-8–FR-10, FR-13–FR-14, FR-18 |
| C23–C28: separate discovery, named sources, evidence, cadence, vetting, invitation feasibility | FR-19–FR-23 |
| C29–C30: SEO, events, errors, conversion | FR-24–FR-25, §7 |
| C31–C34: visual/cost/documentation/BMAD/subagents | §6/§8 plus workflow context |
| C35–C43: current work/UX/review/later clarification | §0/§1, FR-26, §8/§9/§11 |
| P01–P03: technology/host/tagline | Deferred addenda; not selected |
| P04–P05: separate publication/send controls; audit/original review preservation | P-11/P-7 explicitly proposed |
| O01/O02 | Geography/language list resolved; remaining localization semantics D-1 |
| Remaining O-items | D-2–D-19 or deferred architecture context |

No substantive recorded pilot feature is missing. Correct the unconfirmed prerequisite and stale wording above, then continue the owner's coaching path; this reconciliation does not close the open decisions or validate the PRD.
