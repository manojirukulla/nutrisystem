---
title: NutriSystem pilot PRD
status: final
created: 2026-10-07
updated: 2026-10-07
sources:
  - ../../briefs/brief-nutrisystem-2026-10-07/brief.md
  - ../../source-intake-2026-10-07.md
  - ../../../../docs/sources/earlier-product-chat-2026-10-07.md
stakeholder_approval: pending
edition: stakeholder-review
implementation_readiness: pending
---

# PRD: NutriSystem pilot

## 0. Purpose and decision status

This completed stakeholder-review edition defines the Hyderabad directory pilot. The [brief](../../briefs/brief-nutrisystem-2026-10-07/brief.md) owns product purpose; [DESIGN.md](../../ux-designs/ux-nutrisystem-2026-10-07/DESIGN.md), [EXPERIENCE.md](../../ux-designs/ux-nutrisystem-2026-10-07/EXPERIENCE.md), and the [interactive mockups](../../ux-designs/ux-nutrisystem-2026-10-07/mockups/index.html) show how it looks and behaves. FR-1–FR-26 provide stable references for later technical design and stories.

**Final document; stakeholder approval and implementation readiness pending.** Confirmed requirements come from recorded human decisions. `[PROPOSAL]` marks reviewable defaults and `[ASSUMPTION]` marks unverified hypotheses. The latest owner instruction is to complete PRD and UX mockups without further questions, superseding the earlier coaching pause. English copy, sample fields, and interaction states may be proposed now; policy, architecture, feasibility, and release decisions remain assigned in §9. Document finalization does not confer approval or prove feasibility.

## 1. Vision

Help customers find local meal providers that serve their chosen area, understand their offerings, and contact them. NutriSystem is a mobile-friendly web directory covering healthy tiffin/subscription meals, home kitchens, and event caterers in Hyderabad, India. English-, Telugu-, and Hindi-speaking audiences remain the language intent. The owner selected built-in browser/platform translation for the pilot. Three app-authored language versions and automatic Provider-content translation are not required. D-1 now covers the source interface language and validation of the intended browser experience.

Providers manage their company information and offerings, with pictures and videos helping Customers understand them. SuperAdmin approves initial publication and Listing edits, handles ownership, and decides Review removal/appeals; subsequent Menu edits need no approval. A separate discovery service identifies missing providers with source evidence. Directory and discovery are desired at launch if feasible. Booking and payment stay outside the pilot.

**Confirmed pilot discovery boundary:** the owner clarified that the starting product is a Listing site with basic textual search and filters. Search narrows Listings using their published information and chosen location. Detailed dietary suitability rules, personalized recommendations, and a specialized diet taxonomy are not needed now. The older-person and bachelor examples illustrate why someone searches; they do not create separate matching engines. Previously recorded onboarding, Reviews, administration, discovery, and contact requirements are retained.

[ASSUMPTION A-1] Consolidating provider information reduces the effort of searching across social pages and recommendations. [ASSUMPTION A-2] Better service-area matching and understandable offerings increase useful provider contact. These are hypotheses to test, not proven differentiation. The [research digest](../../research/landscape-2026-10-07.md) informs competitor and API feasibility discussions when available.

## 2. Target users and journeys

Customers need relevant local options and enough information to decide whether to contact a Provider. The owner identified two central needs: a specific healthy diet for an older person, and healthy home-cooked breakfast, lunch, and dinner for a bachelor living in a single room. Providers need a directory presence they can manage. SuperAdmin needs publishing, moderation, and discovery controls and is the only administrative role for the pilot. A separate limited Admin is deferred; D-4 is resolved.

The following narratives illustrate recorded capabilities. Names are illustrative and not research participants. The daily-meal and older-person contexts come from the owner, who confirmed that Customers apply filters and text search to narrow Listings. Unconfirmed screen/state details remain proposals for UX; they do not require more dietary questioning or a customer-research gate.

### UJ-1. Arun finds everyday home-cooked meals

[OWNER-SUPPLIED CONTEXT] Arun is a bachelor living in a single room who wants healthy home-cooked breakfast, lunch, and dinner. He selects a location, uses text search and filters to narrow Listings, and inspects Menu items, Packages, and photos. He signs in for contact access and arranges meals directly with a Provider. The climax is finding a relevant Listing and a usable contact route. `[PROPOSAL]` After login, retain the Listing/contact intent; empty results offer a way to revise search/location. His meal preferences do not add meal scheduling or real-time availability requirements to the pilot.

### UJ-2. Dev finds an event caterer

[PROPOSAL] Dev selects the location of an event, chooses event catering, and compares Packages and photographs. He opens a Listing and signs in for contact access. The climax is finding a relevant Provider and a contact route. Resolution: event details and any transaction happen directly with the Provider. Event date/guest-count filters are unconfirmed and absent from committed scope.

### UJ-3. Sana publishes and maintains her company

[PROPOSAL] Sana signs in as a Provider, creates her Company profile, supplies service coverage, adds Menu items/Packages and pictures or videos, and submits for initial publishing review. The climax is an explicit publishing result. Resolution: an approved Listing becomes public, or Sana sees a revision request and can resubmit. After publication, Menu edits need no SuperAdmin approval; Listing edits require it. SuperAdmin handles ownership verification before she can edit an existing sourced Listing.

### UJ-4. Alex vets a discovery Candidate

[PROPOSAL] Alex is SuperAdmin. A scheduled discovery run adds Candidates with source evidence. Alex checks duplicates, reviews and edits a Candidate, and chooses whether to publish a sourced unclaimed Listing and/or invite the Provider under agreed controls. The climax is a documented disposition rather than an automatic invitation. Resolution: the Candidate is acted on or left for follow-up. An unavailable source or channel has an explicit outcome and does not appear as a successful run/send.

### UJ-5. Mira maintains or reports a Review

[PROPOSAL] After interacting with a Provider, Mira signs in and submits a 1–5 star Review with optional text. If she already has a Review, she edits it. She cannot review a Company she owns or manages. She can report inappropriate content and request removal or appeal a Review decision through the app or by email, including the Review ID. The climax is an explicit save/request result. Resolution: SuperAdmin decides the request; submitting it does not itself remove or reinstate a Review. Verified-purchase status is absent because the directory handles no booking/payment.

### UJ-6. A Customer finds meals for an older person's specific diet

[OWNER-SUPPLIED CONTEXT] A Customer wants meals for an older person's specific diet. Leela, an illustrative Customer, chooses a location and enters relevant text or applies available filters. Results match Provider-published information. She inspects a Listing's menu details and photos, signs in for contact access, and discusses requirements directly with the Provider. The climax is finding a relevant Listing and contact route. This uses the same basic search/filter flow as UJ-1. The pilot does not assess dietary suitability, and exact diet vocabulary or chooser identity does not block this flow.

## 3. Glossary

- **Customer**: a person browsing Providers; login is required for contact access and submitting a Review.
- **Provider**: an operator of a food-service Company eligible for the pilot categories.
- **Company**: the Provider-managed business identity. Multi-Company account and branch rules are D-5.
- **Listing**: the published directory representation of a Company. It may be Provider-managed or sourced and unclaimed.
- **Service coverage**: the locations a Provider serves, distinct from its physical address. Matching rules are D-3.
- **Menu item**: a structured offering within a Listing.
- **Package**: a structured grouped or subscription offering within a Listing.
- **Review**: one editable 1–5 star contribution per signed-in Customer per Provider, with optional text.
- **Report**: a request to assess inappropriate content.
- **Review ID**: the identifier used to reference a Review in an in-app or email removal/appeal request.
- **SuperAdmin**: the sole pilot administrative role, managing Listings, Reviews, comments, feedback, and discovery Candidates. This role does not specify the number of people/accounts that may hold it.
- **Candidate**: a possible missing Provider found by the discovery service and awaiting disposition.
- **Source evidence**: information linking a Candidate or sourced Listing to where it was found.
- **Invitation**: an outreach action using an eligible configured channel after SuperAdmin vetting.
- **Contact action**: access to or initiation of a Provider contact route. It measures directory intent, not a sale.

## 4. Features and functional requirements

### 4.1 Location and public discovery

Customers browse relevant Listings before login. Service coverage determines location relevance, rather than physical address alone. Realizes UJ-1, UJ-2, and UJ-6.

#### FR-1: Public browsing

Signed-out Customers can browse published Listings and their public content. **Consequences:** opening public results/details does not require login; unpublished Listings do not appear in public results.

#### FR-2: Chosen location

Customers can choose a location manually and optionally request device-location access. **Consequences:** the browser permission request follows an explicit Customer action; denial/unavailability leaves manual selection usable; the current location is visible and changeable. Hyderabad, India is confirmed. Location granularity and Service coverage representation are D-3.

#### FR-3: Service coverage matching

Default results show Providers serving the chosen location. **Consequences:** a Provider with a physical address nearby but outside the chosen Service coverage does not qualify merely because of proximity; changing location recalculates eligibility. The representation, boundary rules, and treatment of unknown coverage require D-3 before implementation.

#### FR-4: Search and filters

Customers use basic textual search and filters to narrow Listings. Search includes Provider names and published offering details such as Menu items and Packages. Location filters include state, city, and area; relevant service, cuisine, and declared dietary attributes remain available within the agreed directory scope. **Consequences:** a matching Menu item/Package can cause its Listing to appear; search and filters narrow location-relevant results; active filters are visible and removable. Matching uses stored Listing/offering information, not an assessment of a Customer's dietary suitability. D-6 covers the initial searchable fields/filter labels, with detailed diet taxonomy deferred. `[PROPOSAL P-1]` Match keywords against stored names/descriptions, combine filters using AND across groups and OR within a group, and provide a clear-all action. Exact-match/fuzzy ranking and language mechanics can be resolved during UX/technical design; no AI or semantic search is required for the starting product.

#### FR-5: Provider cards and empty states

Accessible horizontal cards show Provider name, aggregate stars/Review count, address, and contact access. **Consequences:** a Provider without Reviews shows “No reviews yet”; contact access enforces FR-7; empty results give an explicit state. `[PROPOSAL P-2]` An empty state offers location/filter revision without silently broadening the query. Final responsive composition belongs in UX.

### 4.2 Identity and contact

Identity protects Provider editing and Customer contributions, and enables contact access. Realizes UJ-1, UJ-3, and UJ-5.

#### FR-6: Pilot login

Customers and Providers can sign in through Google/email. **Consequences:** no pilot journey requires phone login; failure/cancellation is distinguishable from successful authentication. Email login mechanism, recovery, account linking, and session rules are D-7.

#### FR-7: Contact access after login

Contact details require login. **Consequences:** signed-out Customers see an actionable login prompt instead of restricted contact data; successful sign-in grants access only to the requested permitted content. `[PROPOSAL P-3]` Resume the same Listing and contact intent after login. Contact data must not leak through public page payloads, search previews, structured metadata, or menu attachments. D-8 resolves how contact-bearing files/photos are handled and which contact routes are supported.

#### FR-8: Role and ownership boundaries

Providers can manage authorized Companies. SuperAdmin performs the administrative actions in this PRD. **Consequences:** one Provider cannot edit another Provider's Company by changing an identifier; a sourced Listing claim grants no editing access before verification; the pilot has no separate limited Admin role or permission tier. Customer, Provider, and SuperAdmin are the launch roles. The number of SuperAdmin accounts remains an operational detail, not a one-account restriction.

### 4.3 Listings and offerings

Menu details, Packages, and photos help Customers understand what a Provider offers and support basic search/filtering. Realizes UJ-1, UJ-2, UJ-3, and UJ-6. The earlier user explicitly requested uploads of menu details/photos and search based on these offerings. Customer examples do not introduce specialized dietary evidence, meal-slot scheduling, or real-time availability rules. Initial fields/filter labels can be refined in UX under D-6 without a detailed diet taxonomy.

#### FR-9: Provider onboarding

Providers can onboard and manage Company information. **Consequences:** Service coverage and address remain distinct; the form captures the agreed fields under D-5/D-6; the interface gives a clear submission result. Required fields, duplicates, draft saving, and multi-Company rules need confirmation.

#### FR-10: Initial publishing and Listing-edit review

Initial publishing and subsequent Listing edits require SuperAdmin approval. Subsequent Menu edits do not require SuperAdmin approval. **Consequences:** onboarding submission alone does not publish a Listing; a submitted Listing edit does not make the changed Listing fields public before approval; a Menu edit is not held for SuperAdmin approval solely because it is an edit. Review leads to an explicit disposition visible to the Provider. `[PROPOSAL P-4]` Use draft, submitted, changes requested, published, and rejected states. D-9 covers rejection/appeal handling and the boundary for mixed Listing/Menu/Package/media changes; it does not reopen the confirmed Menu-versus-Listing approval rule.

#### FR-11: Structured Menu items and Packages

Providers can manage structured Menu items and Packages plus pictures and videos. **Consequences:** Menu items and Packages participate in discovery under FR-4; edits remain associated with the correct Company; subsequent Menu edits need no SuperAdmin approval; pilot behavior does not depend on a rotating daily-menu scheduler. Prices, units, inclusions, availability, dietary claims, and media fields are D-6. Classification of Package/media changes that affect a Listing or Menu is D-9; do not infer an approval exemption for every upload.

#### FR-12: Uploaded media and supplementary menu files

Uploads support pictures and videos. Listings can also retain supplementary PDF/image menus alongside structured information. **Consequences:** file content does not replace all searchable structured information; unsuccessful upload/viewing has an explicit outcome; contact restrictions follow FR-7. Exact media formats, size/duration limits, processing, accessibility alternatives, and contact-bearing assets are D-8; support for pictures/video is confirmed rather than an unresolved media-scope choice.

#### FR-13: Sourced unclaimed Listings

SuperAdmin may publish sourced, unclaimed Listings. **Consequences:** Source evidence remains associated with the Listing; publication does not confer Provider editing rights. `[PROPOSAL P-5]` Display ownership status in understandable terms, and provide correction/claim routes. Public evidence disclosure and required public fields are D-10.

#### FR-14: Ownership verification

SuperAdmin handles ownership verification and the decision to grant Provider editing access to a sourced Listing. **Consequences:** pending/failed verification cannot grant editing; the decision is explicit. The evidence procedure and handling of competing claims, revocation, and appeals are assigned to SuperAdmin under D-10. Preserve a future path to evidence-based automated verification without committing its launch behavior or replacing SuperAdmin responsibility in the pilot.

### 4.4 Reviews and moderation

Reviews inform Customers, with reporting and SuperAdmin controls. Realizes UJ-5.

#### FR-15: One editable Review

A signed-in Customer can submit one editable 1–5 star Review per Provider with optional text. Self-review is prohibited: owners/managers cannot review their own Company. **Consequences:** submitting again updates or opens the existing Review instead of creating a second active Review; out-of-range ratings fail validation; text can be omitted; a known owner/manager is not allowed to submit a Review of that Company. Related-account detection and enforcement details are D-11/technical design; they do not reopen the self-review prohibition.

#### FR-16: Aggregate Review display

Listings display aggregate stars and Review count. **Consequences:** zero eligible Reviews displays “No reviews yet”; the displayed aggregate/count use the same eligible set. `[PROPOSAL P-6]` Use the arithmetic mean of visible eligible Reviews, rounded to one decimal. D-11 confirms eligibility, review-edit visibility, rounding, removal, and aggregation updates.

#### FR-17: Reporting, removal requests, and appeals

Signed-in Customers can report inappropriate content. Review removal and appeal requests can reach SuperAdmin through the app or by email and must include the Review ID. **Consequences:** an in-app submitted Report/request receives an explicit acknowledgement and is available to SuperAdmin; the Review ID identifies the Review under consideration; a request alone does not remove or reinstate a Review. Email requests remain a supported intake route without implying automatic email ingestion into the app. Content types, report reasons, duplicate requests, response procedure, and status details are D-11.

#### FR-18: SuperAdmin content management

SuperAdmin manages Listings, Reviews, comments, feedback, and Candidates, including decisions on Review removal/appeal requests received via the app or email with a Review ID. **Consequences:** authorized decisions affect the intended content; restricted actors cannot perform them; requests are decided by SuperAdmin rather than automatically removing or reinstating content. Customer comment/reply behavior is not defined by the handoff; D-12 determines whether comments are Review text, separate content, or later scope. `[PROPOSAL P-7]` Record actor, reason, prior content, and resulting state for moderation. This carries the earlier audit/preservation proposal without turning it into an approved policy.

### 4.5 Discovery and invitations

A separate discovery service identifies missing Providers from Instagram, Facebook, and YouTube, with evidence and supervised action. Realizes UJ-4. Specific source and channel availability is a release decision, not an assumption.

#### FR-19: Evidence-backed Candidates

Discovery produces Candidates with Source evidence and deduplicates against the directory. **Consequences:** a Candidate can be traced to a source; a potential existing Listing match is visible before creating another Listing; uncertainty does not silently merge two Companies. `[PROPOSAL P-8]` Retain source URL, discovery time, extracted fields, and matching confidence/reason. Allowed acquisition methods, evidence retention, and matching rules are D-13.

#### FR-20: Daily configurable schedule

SuperAdmin can configure the daily discovery time and timezone. **Consequences:** configured time/timezone are visible; a run outcome distinguishes success, partial completion, and failure. `[PROPOSAL P-9]` Prevent duplicate dispatch for the same scheduled run and record source-specific errors. Missed runs, source outages, quotas, retries, and daylight-saving behavior are D-13.

#### FR-21: Candidate vetting and editing

SuperAdmin vets and edits Candidates before Invitations. **Consequences:** new Candidates do not trigger Invitations on discovery alone; a reviewed Candidate preserves Source evidence; duplicate disposition is available. `[PROPOSAL P-10]` Maintain new, reviewed, duplicate, rejected, and actioned dispositions. Final Candidate workflow is D-13.

#### FR-22: Configurable eligible Invitations

Invitation channels are configurable and actual sends depend on eligibility and supported APIs. **Consequences:** a channel that lacks eligibility/support cannot be reported as a successful send; a supervised send has an explicit outcome; repeat-send policy follows D-14. `[PROPOSAL P-11]` Separate publication approval from Invitation authorization, provide a manual fallback with recorded disposition, and prevent accidental repeat sends. D-14 decides which channels and fallback behavior are acceptable at launch.

#### FR-23: Conditional discovery release

The product aims to launch directory and discovery together if feasible. **Consequences:** each planned source and Invitation channel has a verified feasibility decision before release; a source/channel limitation prompts an explicit owner-approved scope choice. The team cannot label a directory-only release as the complete original scope without that decision.

### 4.6 SEO and product insights

Useful public discovery and measurable customer intent support the pilot.

#### FR-24: Public search visibility

SEO matters at launch. **Consequences:** public Listing content can be indexed while restricted contact information remains protected; unpublished content remains private. `[PROPOSAL P-12]` Define indexable location/category pages, canonical handling, accessible headings, and truthful metadata. Page scope and naming are D-15, without selecting a technology.

#### FR-25: Analytics and diagnostics

Capture product insights, errors, searches, Listing engagement, Contact actions, onboarding, and discovery conversion. **Consequences:** recorded events distinguish a contact-detail reveal from contact initiation and an Invitation attempt from success; discovery conversion links reviewed Candidates to resulting Listings/onboarding where available. `[PROPOSAL P-13]` Collect coarse location/filter intent with event outcome while excluding raw contact details, Review text, authentication secrets, and precise device coordinates from routine analytics. D-16 resolves consent, retention, tool choice, and event definitions.

#### FR-26: Browser-assisted translation

Use built-in browser/platform page translation for the pilot's English-, Telugu-, and Hindi-speaking audience, following the owner's selected approach. **Consequences:** app-managed translation catalogs, an app-managed language switcher, and translated copies of every Listing/Menu item/Package are not required for launch. Provider content remains as entered. Translation follows browser capabilities, language availability, and Customer settings; the product must not describe it as guaranteed app-authored localization. The original site remains usable without translation.

`[PROPOSAL]` This review edition uses English as the source interface language and for mock copy under the owner's autonomous completion instruction; this is not a separate human language approval. Render essential published content as accessible selectable text, specify accurate page/content language, and check key browsing/login/contact/form states with browser translation during implementation QA. Text in photos and supplementary PDF/image menus must not be the only source of essential searchable offering information. Translation of embedded assets is not guaranteed.

This decision concerns page display. It does not introduce server-side query translation, transliteration, semantic matching, or equivalent results for queries written in different languages. Basic text search continues to match stored Listing/offering content. Cross-language query matching is deferred rather than implied by a translated page. An app localization system can be considered in a later release.

## 5. Non-goals and pilot boundary

The pilot does not handle booking or payment, guarantee meals or health outcomes, provide verified-purchase Reviews, require phone login, or schedule rotating daily menus. Detailed dietary suitability rules, personalized dietary matching, and a specialized diet taxonomy are deferred under the owner's basic-listing clarification. Categories beyond healthy tiffin/subscription meals, home kitchens, and event caterers are future expansion. Native apps, paid promotion, subscriptions to the platform, nutrition recommendations, and a health-certification scheme have not been authorized.

Google/email login is the free pilot direction. Monetization, advertising, ranking sponsorship, and long-term pricing remain undecided. Low cost is a priority, not an established zero-cost architecture. The owner will assess budget after architecture finalizes the stack and cloud provider. Neither a budget amount nor a stack/cloud choice is set by this PRD.

## 6. Cross-cutting quality and operating constraints

**Confirmed:** mobile-friendly web; accessible cards; low-cost launch; explicit location permission; login-protected contacts; Provider ownership boundaries; supervised publishing and Invitations; durable project documentation; no selected stack/host.

**Proposed acceptance floor:** these are product-quality proposals, not approved thresholds or certification claims.

- **NFR-1 [PROPOSAL]:** Target WCAG 2.2 AA for public, Provider, and SuperAdmin journeys. Verify keyboard operation, visible focus, non-color state communication, labelled errors, reflow, and screen-reader contact/login continuity. UX defines practical behavior; measured contrast follows final tokens.
- **NFR-2 [PROPOSAL]:** Maintain useful layouts at 320 CSS px and 200% text zoom; do not hide essential contact/review actions on touch layouts.
- **NFR-3 [PROPOSAL]:** Set numeric page/search/upload responsiveness targets against the agreed pilot volume and target devices/network during architecture. D-17 must close before release acceptance can claim performance readiness.
- **NFR-4 [PROPOSAL]:** Enforce authorization on restricted content/actions independently of hidden UI. Test public contact leakage and cross-Company edits. Set session, abuse controls, upload validation, and administrative account protection during architecture from approved policies.
- **NFR-5 [PROPOSAL]:** Preserve failed form input where safe, provide retry/recovery, and never show a failed save/send as successful. Offline editing and automatic sync are unapproved scope.
- **NFR-6 [PROPOSAL]:** Establish backup/recovery, deletion, retention, support ownership, discovery failure visibility, and incident response before launch. Numeric service levels depend on budget and operations ownership under D-17.

**Domain communication:** “healthy” and dietary attributes describe offerings, not verified clinical or food-safety outcomes. `[PROPOSAL P-14]` Distinguish Provider claims, ownership verification, publishing review, and customer Reviews in public language. Applicable India/local policy research belongs before public launch once acquisition/content/operations choices are defined. This edition establishes no compliance claim.

## 7. Success measures

All measures below are **proposed**. Targets, baseline collection, pilot observation window, denominator rules, and decision owner must be agreed under D-2. No invented traffic, conversion, revenue, or market-size figures belong in the stakeholder presentation.

| ID | Measure and definition | Product requirement | Decision use |
|---|---|---|---|
| SM-1 | Share of eligible discovery sessions resulting in a Contact action, reported separately for reveal and initiation | FR-2–FR-7, FR-25 | Test whether relevant browsing leads to customer intent; cannot establish completed sales |
| SM-2 | Share of agreed pilot area/category cells containing published Listings with usable Service coverage and offering data | FR-3, FR-9–FR-14 | Assess directory usefulness rather than total Listing count alone |
| SM-3 | Onboarding completion and time from valid submission to first publishing disposition | FR-9–FR-10 | Assess Provider effort and operations capacity |
| SM-4 | Candidate yield, duplicate rate, vetting time, eligible Invitation outcome, and claimed/onboarded conversion | FR-19–FR-23 | Test discovery quality and channel feasibility |
| SM-C1 | Empty-result rate and exits at the contact login gate | FR-3–FR-7 | Counterbalance SM-1 so success is not manufactured through narrowing denominators |
| SM-C2 | Missing/outdated listing information, Reports, and unresolved moderation backlog | FR-11–FR-18 | Counterbalance SM-2/SM-4 so Listing growth does not mask quality loss |
| SM-C3 | Monthly operating cost and SuperAdmin time per usable published Listing | FR-19–FR-25 | Counterbalance growth against the low-cost priority |

Event definitions and privacy policy are D-16. Pageviews/search counts provide context, not proof of customer value.

## 8. Aesthetic, tone, and stakeholder presentation

Carry warm everyday wellness, cream/forest green, food photography, and accessible horizontal cards into UX. The owner accepts the first-cut look and requires the product vision throughout the experience, including waiting/loading symbols, buttons, empty results, success and recovery, aiming for an enchanting result. Exact motifs, copy, motion, detailed tokens, and responsive composition remain UX proposals until chosen. The suggested tagline remains unapproved.

UX and the stakeholder presentation must reuse the brief's purpose and approved scope. The review should show how the original directory idea evolved through decisions, then help stakeholders visualize the Customer, Provider, and SuperAdmin experiences. Avoid claiming category/direct-contact uniqueness, verification of food quality, or traction. GTM is not required now and is deferred. The owner wants PRD and UX reviewed before technical design and implementation.

## 9. Deferred decision register

These items do not block this stakeholder-review edition. Mock fields, routes, and states are proposals to discuss against the finished screens. Harsh is the decision owner; the collaborating roles below are prospective until assigned. Resolve applicable decisions before architecture, implementation, or release as indicated.

| ID | Current status / decision | Owner | Revisit |
|---|---|---|---|
| D-1 | Browser translation confirmed; English source/mock copy proposed; validate intended browser/language coverage | Harsh + QA | Implementation QA; app localization/query translation deferred |
| D-2 | Budget assessment deferred by owner until architecture finalizes stack/cloud provider; no amount or provider selected. Volumes, targets, observation period, launch timing undecided | Harsh | After architecture choices; cost feasibility before launch/spending commitment; targets at release acceptance |
| D-3 | Coverage representation, area boundaries, unknown coverage | Harsh + operations | Architecture; sample areas in UX are illustrative |
| D-4 | Closed: SuperAdmin sole administrative role | Harsh | Revisit only if pilot operations change |
| D-5 | Profile fields, required fields, branch/multi-Company ownership | Harsh + Provider reviewer | Stakeholder review, then data design; mock fields proposed |
| D-6 | Menu/Package fields and basic filter labels | Harsh + UX | Stakeholder review; dietary suitability/taxonomy deferred |
| D-7 | Email mechanism, recovery, linking, sessions | Harsh + architecture | Before authentication implementation |
| D-8 | Pictures/videos supported; existing supplementary PDF/image menus retained. Exact formats, size/duration limits, processing, accessibility alternatives, contact routes and contact-bearing assets remain open | Harsh + operations/architecture | Before media/public-content implementation |
| D-9 | Initial publishing and Listing edits require SuperAdmin approval; subsequent Menu edits do not. Mixed Listing/Menu/Package/media classification and publishing rejection/appeal procedure remain open | Harsh + operations | Before publishing implementation; mock states proposed |
| D-10 | SuperAdmin owns verification/claim decisions. Evidence procedure delegated to that role; sourced disclosure, competing claims, revocation and appeal handling remain to define | SuperAdmin + Harsh | Before claiming implementation |
| D-11 | Self-review prohibited. Removal/appeals go to SuperAdmin via app/email with Review ID. Related-account enforcement, aggregate eligibility/rounding, report reasons, request/status procedure remain open | Harsh + SuperAdmin/architecture | Before review/moderation implementation |
| D-12 | Meaning of comments/feedback and submission scope | Harsh | Stakeholder review; separate discussion threads unapproved |
| D-13 | Social-source access, evidence, matching, schedule failures/fallback | Harsh + architecture | Feasibility before discovery implementation/release |
| D-14 | Eligible channels, manual fallback, repeat sends/authorization | Harsh + operations | Feasibility before invitation implementation/release |
| D-15 | Indexable pages, naming, metadata | Harsh + UX/architecture | Before SEO implementation |
| D-16 | Analytics events, consent, retention, deletion | Harsh + operations | Before analytics implementation |
| D-17 | Performance/service targets, support, recovery, failure response | Harsh + architecture/operations | Architecture and release acceptance |
| D-18 | Reviewers, review session, acceptance authority | Harsh | Before stakeholder review is conducted |
| D-19 | Final copy, representative journeys, sample content/layout choices | Harsh + stakeholders | Review the completed UX/mocks; no research prerequisite |

## 10. Assumptions and proposals index

Assumptions A-1/A-2 are unverified problem/value hypotheses. UJ-1–UJ-6 distinguish owner-supplied contexts from proposed interaction sequences ready for review. P-1–P-14 and NFR-1–NFR-6 remain tagged at their point of use; completed documents and mockups do not silently approve them.

## 11. Review and approval

Review purpose and scope first, then walk the Customer, Provider, and SuperAdmin mockups, then record accepted changes and deferred decisions. Keep the original idea's evolution visible: local food discovery became a Hyderabad listing directory with basic search, inspectable menus/photos, gated contact, supervised publishing, and conditional discovery. Record decisions in the BMAD memlogs and update the linked specifications together.

The brief, this PRD, [DESIGN.md](../../ux-designs/ux-nutrisystem-2026-10-07/DESIGN.md), [EXPERIENCE.md](../../ux-designs/ux-nutrisystem-2026-10-07/EXPERIENCE.md), and [mockups](../../ux-designs/ux-nutrisystem-2026-10-07/mockups/index.html) form the stakeholder-review packet. Editorial completion, stakeholder acceptance, and implementation readiness are separate states. GTM remains deferred. After stakeholder feedback, technical design must establish feasible integrations, policies, data boundaries, and costs before implementation planning.
