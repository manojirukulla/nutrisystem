# Earlier-discussion reconciliation

Date: 2026-10-07. Purpose: source accounting for the current brief/PRD correction. This supporting note is not a competing specification or approval record.

## Source precedence

1. Latest active-chat owner instruction: start with a listing site and basic textual search/filters; detailed older-person dietary needs and suitability rules are unnecessary today. This changes the depth of elicitation, not every previously agreed capability.
2. Direct owner messages retrieved in [earlier product chat](../../../../docs/sources/earlier-product-chat-2026-10-07.md).
3. [Historical discussion input](../../../../docs/discussion-input-2026-10-07.md), section “Recorded user decisions and requirements.” This explicitly preserves human answers supplied through question forms, which are absent from the retrieved chat. Treat these as recorded human decisions, while retaining their provenance.
4. Earlier assistant commentary, final answers, mockups, and suggestions. These alone do not establish approval. The historical handoff's “Proposals to evaluate” section remains proposals.

Hyderabad, India; English/Telugu/Hindi; coaching; deferred GTM; and PRD/UX stakeholder review before technical design/implementation come from later owner answers and supersede old geography/language/stage questions.

## What the owner already requested

| Area | Evidence and status | Behavior to retain |
|---|---|---|
| Listing/search baseline | Direct owner, earlier chat line 14, turn `01a110db-2956-7f23-aee1-11613e92d095`; latest owner clarification | Directory of food-service businesses, with basic text search and filters rather than a dietary assessment journey. Name, city, state, area were explicitly named. |
| Location | Direct owner, lines 14 and 141; historical input line 29 records later decision | Device location and default location-based results, with additional customer filters. Recorded decision further specifies providers serving the chosen location, explicit permission, and manual fallback. Exact geographic geometry was not selected. |
| Menus and photos | Direct owner, earlier chat line 141, turn `01a110f7-9681-7721-a67e-e2e57539c993` | Providers can upload menu details and photos so customers understand the items/services offered and judge fit for their own needs. The same information should support search. |
| Structured offerings | Historical input lines 30–32, recorded question-form decisions | Search includes menu items, packages, and relevant dietary, cuisine, and service attributes. Structured items/packages and photos coexist with supplementary PDF/image menus. Daily rotating menu scheduling is deferred. |
| Cards | Direct owner line 14; historical input line 31 | Accessible, stylish horizontal tiles with minimal information: name, aggregate star rating, address, contact access. Recorded decisions add review count and login protection for contacts. |
| Theme and purpose | Direct owner line 141; historical input line 41 | Vision, product story, theme, and purpose should appear throughout UX. Warm everyday wellness, cream/forest green, and food photography are recorded direction. Exact tokens, brand copy, and suggested tagline remain unapproved. |

The recorded requirements already support the two current customer examples: searching/filtering providers, examining offerings/photos, then contacting a provider. They do not establish special elderly-care rules, clinical verification, personalized meal matching, or a dietary recommendation system.

## Current draft alignment and overcomplication

The brief and PRD already contain all major prior feature groups. FR-4 and FR-11/FR-12 preserve the important searchable menu/package/photo behavior; menus must not become upload-only files with no searchable offering details. The key correction is emphasis and unnecessary decision gates, rather than adding new feature groups.

- The brief's customer-needs paragraph currently asks for exact dietary requirements, who selects meals, search habits, and decision-critical information. Replace the implied pending gate with the owner's simpler confirmed approach: customers search/filter and assess listed information themselves. Keep older-person meals and meals for a person living alone as examples, without requiring their detailed elicitation now.
- PRD UJ-6 asks for diet vocabulary, displayed evidence, chooser identity, and missing-information behavior under D-6/D-19. These are excessive prerequisites for this correction. Its directory journey should use ordinary textual search/filtering, menu/photo review, and gated contact access.
- PRD section 4.3 describes meal availability and dietary information as “load-bearing” fields that “must be elicited.” That wording elevates illustrative needs into new launch requirements. Retain previously agreed menu/attribute search; remove the dependency on detailed suitability rules.
- UJ-1 also asks for current habits, subscription versus occasional use, meal-slot representation, and price/availability detail. Those details can remain future discussion or specific proposals. Do not make the owner's breakfast/lunch/dinner example silently commit every field or a daily scheduler.
- FR-4 lists searchable fields but should explicitly say **textual search**, with ordinary filters over recorded listing/menu/package information. Exact search ranking, AND/OR semantics, spelling tolerance, transliteration, and final attribute vocabulary remain implementation/UX choices or proposals; do not present them as previously approved.
- Handoff pending coaching question 1 still requires dietary-detail coaching. It should reflect the latest instruction and direct the next discussion toward the listing/search experience and remaining meaningful product/UX choices.

## Preserve unrelated recorded scope

The latest clarification does not independently remove public browsing, Google/email login, login-protected contacts, one editable 1–5-star review with optional text, reporting, provider onboarding/management, initial publishing review, unclaimed listings/ownership claims, SuperAdmin content controls, discovery, invitations, SEO, insights, launch languages, or the stakeholder review objective.

Discovery remains a separate service desired at launch if feasible: Instagram/Facebook/YouTube candidates, source evidence, deduplication, daily configurable scheduling, SuperAdmin vetting/editing before invitations, and configurable eligible channels. Directory-only launch or manual fallback would require an explicit owner decision; “basic listing site” does not automatically approve such a cut.

Booking/payments, phone login, and rotating daily menus remain outside the recorded pilot. Technology, hosting, taglines, distinct publishing/invitation approvals, audit retention, and original-review preservation remain proposals where already marked.

## Assistant-only details not to promote

Earlier assistant text proposed item descriptions, dietary tags, optional prices, package inclusions, rating filters, exact example queries, photo policies, visible removable filters, specific page anatomy, review calculations, and trust labels. Some broad concepts are also supported by recorded decisions, but their exact rules are not established merely by appearing in the assistant's mockups or summary. Preserve the distinction: the owner requested useful searchable menu details/photos, while the final field schema, filtering semantics, and interaction composition are still to be designed.

No shared brief/PRD/handoff files were edited by this reconciliation task. The parent workflow owns their canonical update.

## Parent disposition

Applied on 2026-10-07: brief customer-needs/value paragraphs, PRD pilot boundary/FR-4/UJ-1/UJ-6/section 4.3, and handoff now reflect basic textual search and filters. Detailed dietary suitability is deferred and no longer an elicitation gate. All unrelated recorded feature groups are retained. Local artifact links and FR identifier continuity were checked after the edits. The drafts remain subject to product/UX review; this reconciliation is not stakeholder approval.
