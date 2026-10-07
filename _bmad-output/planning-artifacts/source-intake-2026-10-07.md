# NutriSystem source intake

Date: 2026-10-07  
Status: Historical discussion input and requirement trace; not an approved brief, PRD, UX specification, or launch gate.  
Sources: [historical discussion input](../../docs/discussion-input-2026-10-07.md), [current project handoff](../../docs/HANDOFF.md), [verified tooling setup](../../docs/BMAD-SETUP.md), the user's initial completion request, and the later owner clarification in this chat.  
Owner: Source reconciliation subagent. This file preserves input for the canonical BMAD planning artifacts; it does not replace them.

## Source and authority

The original handoff, now preserved in `docs/discussion-input-2026-10-07.md`, records explicit human decisions and question-tool answers from prior discussion. Those inputs are confirmed discussion direction, although no formal product brief or PRD had been created or approved at that time. The historical source separately identifies proposals and unknowns; those distinctions must survive drafting. The current handoff is artifact/status routing rather than the source of the original requirements.

The current user authorizes completing the product-definition steps discussed here, proceeding into UX afterward, and keeping UX and GTM slides aligned with the same vision and purpose. The user wants the PRD and UX reviewed with stakeholders once ready. This expands the earlier session's setup/product-definition boundary to include UX and a consistent stakeholder narrative. It does not approve an application implementation, architecture, deployment, or external invitation sends. Stakeholder review is a future human review, not an approval that agents can confer.

### Later owner clarification: supersedes unresolved or earlier directions

The owner subsequently confirms **Hyderabad, India** as the pilot geography and **English, Telugu, and Hindi** as launch languages. **Budget is undecided.** The owner selects the **coaching path**: provisional content should be discussed and decisions resolved with the owner rather than silently finalized. **GTM is not required now and is deferred**, superseding the earlier current-work request for GTM slides. PRD and UX should help stakeholders see how the original idea evolved and visualize the product; technical design and implementation follow that product-review milestone. Preserve an aligned product narrative in stakeholder materials without producing an unsolicited GTM deck.

The C/P/O tables below retain historical source accounting. Where a row is marked resolved or superseded, the later clarification controls current work. No source-reconciliation check constitutes final PRD validation or stakeholder acceptance.

## Confirmed direction and requirements

| ID | Recorded input | Drafting implication |
| --- | --- | --- |
| C01 | A mobile-friendly web directory for healthy meal services and caterers. | Define the value of discovery and selection, with mobile use central. |
| C02 | Extensible to other food-service categories. | Preserve future category expansion without expanding the pilot automatically. |
| C03 | One-city pilot including healthy tiffin/subscription meals, home kitchens, and event caterers. | Pilot geography remains unresolved; preserve all three service categories. |
| C04 | Directory launch excludes booking and payments. | Contact access is the current transaction boundary. |
| C05 | Three personas: customer, caterer/provider, SuperAdmin. | Later owner confirmation resolves this: SuperAdmin is the sole pilot administrative role; separate limited Admin deferred. |
| C06 | Customers browse publicly; contact details require login. | Public discovery and gated contact must both appear in journeys and UX. |
| C07 | Google/email login for the free pilot. | Specify expected user behavior without choosing an auth vendor. |
| C08 | Phone login deferred, with an extension path. | Record deferred scope rather than deleting future intent. |
| C09 | Default results show providers serving the chosen location. | Match service coverage, not only the provider's physical address. |
| C10 | Device location requires explicit permission, with manual selection fallback. | Address permission denial and manual selection. |
| C11 | Search/filter dimensions include provider name, state, city, area, menu items, packages, and relevant dietary, cuisine, and service attributes. | Preserve all named dimensions while leaving the exact attribute vocabulary open. |
| C12 | Accessible, stylish horizontal cards showing provider name, aggregate stars/review count, address, and contact access. | Preserve the horizontal-card preference and the information hierarchy through UX. |
| C13 | Structured menu items/packages and photos, with supplementary PDF/image menus. | Structured searchable content and supplementary uploads are distinct needs. |
| C14 | Daily rotating menu scheduling deferred. | Do not promise recurring schedule management at launch. |
| C15 | Signed-in customers may leave one editable 1–5 star review per provider, with optional text. | Preserve author sign-in, cardinality, editing, rating scale, and optional text. |
| C16 | Customers can report inappropriate content; show 'No reviews yet' when applicable. | Reporting and unrated states need explicit behavior. |
| C17 | Providers onboard and manage their companies. | Include company/listing management and publishing transitions. |
| C18 | Initial publication requires admin review. | Provider onboarding cannot silently become immediate publication. |
| C19 | Preserve a future path to evidence-based automated verification. | Defer automation while keeping extensibility as intent. |
| C20 | SuperAdmin manages listings, reviews, comments, feedback, and discovery candidates. | Keep the named moderation surfaces; determine the meaning of comments before inventing a discussion feature. |
| C21 | SuperAdmin may publish sourced, unclaimed listings. | Distinguish unclaimed/sourced listings from provider-owned listings; generic earlier Admin wording maps to SuperAdmin for the pilot. |
| C22 | Verify ownership before granting provider editing access. | Claiming and ownership verification require separate treatment from initial publication. |
| C23 | Separate discovery service finds missing providers through Instagram, Facebook, and YouTube. | All named sources are desired; feasibility is not established by naming them. |
| C24 | Discovery retains source evidence and deduplicates against the directory. | Evidence and duplicate handling are core candidate requirements. |
| C25 | SuperAdmin vets/edits candidates before invitations. | Human candidate control precedes outreach. |
| C26 | Discovery runs daily at a configurable time and timezone. | Retain cadence and both configuration fields. |
| C27 | Directory and discovery desired at launch if feasible. | Keep discovery visible as conditional launch intent; do not silently remove it or promise unsupported automation. |
| C28 | Invitation channels configurable; actual sends depend on channel eligibility and supported APIs. | Do not equate desired channels with permission or reliable automation. |
| C29 | SEO matters at launch. | Public discoverability is a launch requirement, not a later enhancement. |
| C30 | Capture useful product insights, errors, searches, listing engagement, contact actions, onboarding, and discovery conversion. | Preserve named observability outcomes; exact metrics/thresholds remain open. |
| C31 | Warm everyday wellness visual direction: cream/forest green and food photography. | Preserve warmth, everyday relevance, colors, and photography; detailed design remains to be developed. |
| C32 | Low-cost launch and AI-assisted development are priorities. | Cost-conscious choices are required, but zero cost has not been guaranteed. |
| C33 | Durable repository documentation for later agents across chats. | Canonical artifacts and handoff should remain linked and coherent. |
| C34 | Use installed BMAD workflows and subagents for independent parallel work. | Maintain BMAD 6.12.1 and distinct ownership/reconciliation. |
| C35 | Complete the above product-definition steps in this chat. | Fresh chats are optional, and existing answers should carry forward. |
| C36 | Move into UX design after product definition. | UX can now follow the brief and PRD; implementation remains outside the authorization. |
| C37 | UX and GTM slides must reflect the same vision and purpose. Later clarification defers GTM. | Preserve shared purpose in UX/stakeholder visualization; no GTM deck required in current scope. |
| C38 | Once PRD and UX are ready, review them with stakeholders. | Prepare reviewable artifacts, questions, and decision status; record review as pending until humans actually review. |
| C39 | Later clarification: Hyderabad, India is the pilot geography. | Resolve geography without treating prior unknowns as still unanswered. |
| C40 | Later clarification: English, Telugu, and Hindi are launch languages. | All three are launch intent; localization/content/search mechanisms remain open. |
| C41 | Later clarification: budget remains undecided. | Do not fabricate a budget or equate low cost with guaranteed free operation. |
| C42 | Later clarification: coaching path selected. | Use drafts to discuss unresolved product choices with the owner before closure. |
| C43 | Later clarification: stakeholders should see idea evolution and visualize the product before technical design and implementation. | Create a reviewable product narrative and UX visualization before downstream technical work. |

## Proposals, not approved decisions

| ID | Proposal | Guardrail |
| --- | --- | --- |
| P01 | Next.js/TypeScript; Supabase Postgres/Auth/Storage; Postgres search/geographic support; separate scheduled discovery worker. | Do not describe this stack as chosen architecture. |
| P02 | Netlify as a possible free pilot host. | Hosting remains undecided; historical Vercel/Supabase constraints require current verification if relied upon. |
| P03 | Suggested tagline: 'Healthy food that fits your day'. | Do not use it as approved brand copy without a decision; GTM can label it a draft if shown. |
| P04 | Separate approvals for publishing a sourced listing and sending an invitation. | Sensible control proposal that still needs confirmation; distinct states may be drafted with proposal status. |
| P05 | Audit records and preservation of original review content when administrators modify it. | Proposed governance rule, not an already-approved moderation policy. |

## Unknowns and decisions to resolve

| ID | Unknown | Why it matters |
| --- | --- | --- |
| O01 | Resolved by later clarification: Hyderabad, India. | Original geography unknown is closed; exact service-area rules remain O09. |
| O02 | Resolved by later clarification: English, Telugu, Hindi. | Language list is closed; localization, provider content, translation, fallback, and multilingual search behavior remain open. |
| O03 | Existing domain, GoDaddy hosting, AWS accounts, or other actual assets. | Informs architecture later; do not assume availability. |
| O04 | Budget. | Determines operational feasibility and cost acceptance. |
| O05 | Expected listing/customer volume. | Determines realistic operating and verification requirements. |
| O06 | Release success thresholds. | Metrics may be proposed, but numerical launch gates are not yet approved. |
| O07 | Exact service/dietary/cuisine attributes. | Needed for category taxonomy, search, provider onboarding, and UX filters. |
| O08 | Exact menu/package fields. | Needed for searchable menus and provider editing, without inventing nutritional guarantees. |
| O09 | Location coverage rules. | Needed for matching service areas rather than address-only results. |
| O10 | Moderation policies. | Needed for review/report handling, administrator editing, and publication governance. |
| O11 | Resolved: only SuperAdmin for now. | Separate limited Admin deferred; no restriction on SuperAdmin account count is implied. |
| O12 | Feasible discovery sources and invitation channels. | Needs evidence about supported access and eligibility; desired channels alone are not proof. |
| O13 | Acceptable launch behavior when automation is unavailable. | Determines whether assisted/manual discovery is an acceptable pilot fallback. |
| O14 | Meaning of 'comments' among SuperAdmin management surfaces. | Avoid silently inventing review replies, discussion threads, or an unsupported customer feature. |
| O15 | Stakeholder identities, review participants, and approval authority. | A review pack can be prepared now, but review cannot be reported as completed. |
| O16 | Superseded for current work: GTM deferred. Stakeholder visualization format and desired mock depth remain open. | Show the original idea's evolution and product experience; do not create a GTM deck by default. |
| O17 | Approved final brand name, copy, and positioning language. | Repository name and visual direction are context; tagline and customer-facing claims are not approved. |

## Risks of losing or overstating source input

1. Recasting this as only a meal-subscription marketplace drops event caterers and home kitchens; adding checkout contradicts the directory-only pilot.
2. Treating discovery as ordinary provider onboarding loses the separate service, daily configurable schedule, source evidence, deduplication, and candidate vetting.
3. Dropping discovery from launch without noting the feasibility condition weakens a stated preference; promising fully automated social discovery or invitations invents feasibility.
4. Equating a provider address with where it serves changes the intended location matching.
5. Replacing the horizontal cards, cream/forest green palette, or food photography with generic dashboards discards qualitative UX direction.
6. Hiding contacts from signed-out customers must not also hide public listing discovery or SEO pages.
7. Review requirements are more specific than a generic ratings feature: one editable review per provider, 1–5 stars, optional text, reporting, and the unrated state.
8. Claim verification, initial publication review, sourced-unclaimed publishing, and future evidence-based automation are related but distinct concerns.
9. A polished brief, PRD, UX, or presentation must not imply stack, host, budget, launch thresholds, or brand copy have been approved. Hyderabad/India and English/Telugu/Hindi are now approved and should not remain stale unknowns.
10. Using 'healthy' or dietary labels as certified health/nutritional guarantees exceeds recorded intent. Exact claims and verification criteria remain open.
11. A GTM deck that promises booking/payments, verified health outcomes, unsupported outreach, or a committed launch date conflicts with the product direction.
12. Updating the handoff should link canonical artifacts and this historical source; it should not keep a competing active PRD.

## Reconciliation method for downstream artifacts

Check every C/P/O item against the brief and PRD after drafting. Mark it preserved, clarified by the user, deferred with a reason, open, or missing. Flag altered meanings and promoted proposals. Then check UX and GTM artifacts against the same product promise, pilot categories, public-to-signed-in journey, trust model, conditional discovery scope, and open-decision status. Any new recommendation must be identified as proposed until approved. Reconciliation is editorial traceability, not stakeholder acceptance.
# Additional owner-supplied customer contexts

**Later language decision:** the owner selected platform/browser built-in translation for the pilot. This supersedes interpretation of the English/Telugu/Hindi list as three app-authored language versions. Audience intent remains; Provider content stays as entered. App-managed translations and cross-language search-query matching are deferred. Source UI language remains for UX confirmation, with English proposed. Earlier language-scope open items below are historical to this clarification.

**Superseding clarification:** start with basic text search and filters over a Listing site. Detailed dietary suitability is unnecessary today; the Customer contexts below illustrate the common directory flow rather than requiring specialized diet rules. The earlier chat was retrieved at [source record](../../docs/sources/earlier-product-chat-2026-10-07.md) to preserve already discussed menu/photo/search/filter requirements. Other recorded feature groups remain in scope.

Recorded later in the same coaching session: a Customer wants meals meeting a specific healthy diet for an older person; a bachelor living in a single room wants healthy home-cooked breakfast, lunch, and dinner. These are confirmed customer needs. Current discovery habits, difficulties, exact dietary vocabulary, who chooses meals for the older person, and the sequence of interactions remain open. They are not completed research interviews. The brief and PRD distinguish this context from proposed journeys.

