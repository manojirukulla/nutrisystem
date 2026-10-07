---
name: NutriSystem
status: final
stakeholder_approval: pending
implementation_readiness: pending
created: 2026-10-07
updated: 2026-10-07
sources:
  - ../../prds/prd-nutrisystem-2026-10-07/prd.md
  - ../../briefs/brief-nutrisystem-2026-10-07/brief.md
---

# NutriSystem experience contract

## Foundation

Responsive mobile-friendly web for Hyderabad. Customer, Provider, and SuperAdmin are the pilot personas; SuperAdmin is the sole administrative role. [DESIGN.md](DESIGN.md) owns visual identity and the shared named components. No UI framework, component library, stack, or hosting is selected. This is a completed stakeholder-review contract, with approval and implementation readiness pending.

The PRD owns feature commitments and decision status. Exact screen organization, field suggestions, state labels, recovery rules, and English copy here are **UX proposals for review** authored under the owner's direction to finish without more questions. Budget will be assessed after architecture finalizes the stack and cloud provider; none is selected here. Open thresholds/integration details do not prevent reviewing the visual experience. They must be settled at the relevant later gate. Neither a clickable mock nor `status: final` grants stakeholder sign-off.

**Confirmed operating rules:** initial publishing and later listing edits require SuperAdmin approval; menu edits do not. SuperAdmin handles ownership verification and decisions. Self-review is prohibited. Review removal and appeal are requests to SuperAdmin via the app or email, carrying the Review ID. A request does not itself remove or restore a Review. Uploads support pictures and videos, alongside the existing supplementary PDF menu scope. Exact media limits, request fields, ownership evidence, and classification of Package/media/mixed edits remain implementation details, not new approved policies.

Use basic text search and filters over published Listing/Menu item/Package information. The older-person example follows the same search journey as everyday meals. The directory does not judge dietary suitability, transact orders, or promise live availability. Browser/platform translation is the selected approach. There is no native language selector; source copy is proposed English. Provider content remains as entered, and translated display does not imply translated search queries or image/PDF text.

The [review gallery](mockups/index.html) is a stakeholder demonstration surface, separate from the product IA. All fictional businesses, photos, ratings, Reviews, prices, and availability are labelled illustrative via DemoNotice. Mock actions simulate local state or navigate examples; no authentication, uploads, publication, discovery job, invitation, or external message is performed.

## Information Architecture

Every surface below belongs to at least one source journey. Shared states overlay their owning surface. “Spine-only” means behavior is documented for stakeholder review but lacks a standalone composition mock.

| Surface | Entry / navigation | Delivers | Source / coverage |
|---|---|---|---|
| Directory | Public home/Browse; back from Listing | Location, text search, filters, provider results | UJ-1/2/6; FR-1–5/24/26; [directory.html](mockups/directory.html), [directory-mobile.html](mockups/directory-mobile.html) shows a phone framing |
| Listing detail | ProviderCard name or View details | Public offerings/pictures/videos, Reviews, Service coverage, locked/unlocked contacts, claim/report entry points | UJ-1/2/5/6; FR-7/11–17; [provider.html](mockups/provider.html) |
| Sign-in / return | ContactGate, write Review, list business, claim | Google/email login choice; retained intent | UJ-1–6 as applicable; FR-6–8; [sign-in.html](mockups/sign-in.html) |
| Provider workspace | List your business; signed-in management | Create/edit Company, coverage, offerings/files; initial publishing and listing-edit approval; direct menu edits | UJ-3; FR-9–12; [onboarding.html](mockups/onboarding.html) includes edit-policy examples; detailed revision/edit forms spine-only |
| Ownership claim | Unclaimed Listing's Claim this business | Evidence submission, pending decision, editing access after approval | UJ-3; FR-13/14; [claim.html](mockups/claim.html); competing claim/revocation spine-only |
| Review / report | Listing's write/edit Review or Report action | One editable score with optional text; self-review block; Review ID; app/email removal or appeal request and separate acknowledgement | UJ-5; FR-15–18; [review.html](mockups/review.html), [provider.html](mockups/provider.html) includes inline report disclosure; full report DialogPanel spine-only |
| SuperAdmin Listings | Protected AdminNav → Listings | Submitted listings, sourced publication, revision/rejection, claim decisions | UJ-3/4; FR-10/13/14/18; [admin-listings.html](mockups/admin-listings.html); claim detail spine-only |
| SuperAdmin Discovery | Protected AdminNav → Discovery | Run/source status, Candidate vetting, duplicate checks, evidence, publication/invitation dispositions | UJ-4; FR-19–23; [admin-discovery.html](mockups/admin-discovery.html) |
| SuperAdmin Moderation | Protected AdminNav → Moderation | Reports, removal and appeal requests; Review ID and content context; explicit SuperAdmin decision | UJ-5; FR-17/18; [admin-moderation.html](mockups/admin-moderation.html) |
| SuperAdmin Settings | Protected AdminNav → Settings | Configurable daily time/timezone and invitation-channel eligibility | UJ-4; FR-20/22; [settings.html](mockups/settings.html) |
| SuperAdmin Insights | AdminNav → Insights, once measurement defined | Searches/engagement/contact, onboarding/discovery outcomes, errors | UJ-4 operating context; FR-25; spine-only, reporting taxonomy pending |
| Account / access recovery | Account link or sign-in failure | Sign out, retry login, recovery once email mechanism selected | UJ-1/3/5/6; FR-6/8; spine-only |
| Shared feedback states | Applicable owner surface | Empty results, location permission fallback, offline/error/retry, not found/access denied | UJ-1–6; [states.html](mockups/states.html) illustrates examples |

No separate limited Admin dashboard is introduced. Protected management surfaces appear only to authorized actors; hiding links is not sufficient authorization. Public contact details are omitted from the signed-out representation, including page source, metadata, and downloadable assets. Detailed contact-bearing upload rules remain an implementation decision.

## Voice and Tone

Use factual, calm language that describes the next step. The brand voice lives in DESIGN.md. These examples are proposed English copy, with selectable text for browser translation.

| Moment | Proposed microcopy |
|---|---|
| Browse introduction | “Find food services near you.” Supporting line: “Explore menus, compare providers, and contact the one that fits your day.” |
| Search hint | “Search a provider, menu item, or package.” |
| Search loading | “Finding food near you…” when a location is selected; proposed wording, with no invented result count. |
| Contextual actions | “View menu,” “Choose your area,” or “Save your review” where they accurately describe the action; proposed wording to demonstrate. |
| Location failure | “We couldn't use your location. Choose your area instead.” |
| Empty result | “No providers match these filters.” Actions: Change location / Clear filters. |
| Locked contact | “Sign in to view contact details.” Context: “You'll return to this listing.” |
| Ownership | “Unclaimed business” / “Claim this business.” Avoid food-quality implication. |
| Publishing | “Submitted for review. Your listing is not public yet.” |
| Published menu edit | “Menu saved. SuperAdmin approval is not needed.” |
| Published listing edit | “Listing changes submitted for SuperAdmin approval.” |
| Self-review block | “You can't review your own business.” |
| Removal / appeal request | “Request received for review {Review ID}. SuperAdmin will assess it.” Exact response time is not promised. |
| No Reviews | “No reviews yet.” |
| Unavailable invitation | “Channel unavailable for this candidate.” Include reason when known. |
| Demo action | “Demo only. Nothing was submitted or sent.” |

Do not use “verified healthy,” “safe for diabetes,” guaranteed translation, or purchase-completed language. Pricing examples include a unit and “illustrative,” without platform checkout.

## Component Patterns

These names are the complete shared component vocabulary; visual anatomy is in DESIGN.md. Common controls are described within their owning component rather than introduced as another unpaired system.

| Component | Behavior and accessibility |
|---|---|
| AppHeader | Browse returns to Directory; List your business enters the Provider journey through sign-in if needed and remains reachable on mobile. Mobile links wrap below the wordmark and retain 44px targets. Account actions disclose rather than rely on hover. Preserve location/search context on back navigation. |
| DemoNotice | Present on every mock, exposing fictional content and simulated actions. Remains readable at narrow widths; no live-product claim. |
| ActionButton | Use a link for navigation and a button for state changes. Clear action labels, minimum 44px target. Busy state prevents duplicate execution and includes text. Disabled actions show a nearby explanation. |
| SearchBar | Labelled text input; Enter or Search submits. Match stored provider/offering content with chosen filters/location. Preserve query after results and recovery. Proposed matching/ranking details await implementation decision; no semantic or clinical inference. |
| LocationControl | Manual city/area always available. Device permission is requested only after Use my location. Denial/time-out returns to manual input; current location is visible and editable. Do not equate kitchen address with Service coverage. |
| FilterPanel | Proposed groups: state/city/area, service type, cuisine, Provider-declared attributes. State select shows Telangana for the Hyderabad pilot, followed by city/area; this does not expand pilot geography. Default service scope is All services, with no service checkbox preselected. Selected options are visible/removable; Clear filters preserves chosen location unless changed explicitly. Final taxonomy and AND/OR logic remain PRD proposals. Mobile disclosure uses expanded state and restores focus to its trigger. |
| ProviderCard | Name/View details links open Listing; contact is a distinct action to avoid nested links. Announces provider identity and Review count. No-review state has text. A sourced unclaimed badge is separate from average rating. |
| StatusBadge | Static status text, not an action unless paired with a clearly separate link. Distinguish ownership, publishing, Candidate disposition, run result, and Invitation outcome. Screen readers receive the same words. |
| OfferingCard | Readable item/package text participates in search. Suggested fields: name, description, declared attributes, optional price/unit and package inclusions. These are review proposals, not a finalized schema. Images supplement text. |
| PhotoGallery | Pictures have useful descriptions or empty alt when decorative. Videos play only after an explicit user action, with accessible controls and no autoplay. Captions for spoken content and a text alternative for meaningful visual content are proposed release details. Missing media displays neutral text/placeholder without inventing an offering. Current mock contains a video placeholder and no playable clip. |
| ContactGate | Signed out → Sign-in / return, without any hidden real contact values. Signed in → contact access; initiation is a separate event from reveal. Demo unlocked view uses sample contact labels and does not call/message anyone. |
| AuthForm | Offer Google and email. Email mechanism/account recovery remains architectural/policy choice; prototype demonstrates the choice, not a live credential flow. Cancellation returns to prior Listing; success restores intended contact/edit/review action. |
| ProviderForm | Proposed sections: Company name/address/contact, Service coverage, searchable offerings, pictures/videos/menu files. Save draft and submit are distinct. Initial publishing and later listing edits require SuperAdmin approval; published menu edits save directly without approval. Proposed continuity: current published listing content remains visible until listing changes are approved. Package/media/mixed-edit classification and required fields/branch rules await implementation design. Prevent edits to another Company. |
| UploadField | Select pictures/videos through Browse; drag is optional. Show file name, progress, failure, retry/removal, and description field. Supplementary image/PDF menus remain supported and never substitute all searchable offering text. Exact formats/size limits/processing and contact-bearing media handling remain pending; avoid fake successful upload states. |
| ReviewForm | Labelled 1–5 choices as a radio group and optional comment. Existing Review opens for edit rather than creating a second active Review. Block reviewing one's own Company. Saved Reviews expose a selectable Review ID and proposed copy affordance. App removal/appeal requests require that ID and show an acknowledgement pending SuperAdmin assessment; email guidance requires the same ID without inventing a support address. No request automatically removes or restores content. Failed save/request retains input. The Listing mock's report disclosure is separate and never routes Customers into SuperAdmin surfaces. |
| AdminNav | Protected navigation for SuperAdmin only. Current surface indicated with text/state. Mobile horizontal navigation wraps to keep page labels visible and operable by keyboard/touch, with no hover dependency. |
| AdminQueue | Open one record with an explicit review action; record identifiers prevent applying decisions to a stale selection. Show relevant state, pending age, and source context. Listing edits join publishing review; menu edits bypass that queue. Ownership decisions belong to SuperAdmin, with exact evidence procedure pending. Moderation identifies Review ID and request type for reports/removal/appeals; acknowledgements are distinct from decisions. Proposed decision labels require an explicit result. |
| CandidateEvidence | Keep source reference, discovered time, extracted fields, and duplicate candidates visible during editing. Show unavailable/missing evidence, never fabricate certainty. Mock sources are placeholders, not active social retrieval. |
| ScheduleForm | Time and timezone both visible; suggested demo default 09:00 Asia/Kolkata is a proposal, not an owner decision. Save configuration separately from running discovery. Channel eligibility and reason are per channel/candidate where known. Disabled/ineligible cannot produce successful-send state. |
| StateMessage | Communicates loading/empty/error/offline/pending/success in text, and gives a relevant next action. Announce changed results politely; alert actual submission errors. No result count fabricated while loading. |
| DialogPanel | Proposed report, review-detail, and consequential-action panel. Focus enters at title or first field; Escape/Close returns to trigger. Keep one panel layer. Do not auto-dismiss unsaved evidence or form input. |

## State Patterns

All surfaces have visible keyboard focus using `{colors.focus}`. Cold load uses a labelled loading state; offline does not imply successful writes or queued sync. These proposed states apply even where only a normal-state mock exists.

| Surface | Loading / empty | Error / permission / offline | Resolution / special state |
|---|---|---|---|
| Directory | Loading providers; no matches or no chosen location | Search failure offers Retry; device denial offers manual location; offline retains visible context without claiming fresh results | Active filters/result count update; never silently broaden location/query |
| Listing detail | Loading Listing; absent menu/photos; “No reviews yet” | Removed/not found: back to results; offline labels stale data if shown | Locked/unlocked contact; ownership state; contact intent survives sign-in |
| Sign-in / return | Busy provider handoff/email choice | Cancel/failure returns without losing Listing intent; offline blocks claimed success | Success restores intended action; session expiry asks for login again |
| Provider workspace | New empty draft; existing content load | Required-field/upload/save errors preserve safe form input; access denied prevents cross-Company edit | Initial pending is not public; menu edit saves directly; listing edit awaits approval. Keeping current published content visible meanwhile is a proposal; decision labels remain proposals |
| Ownership claim | Evidence absent; submission busy | Invalid/missing proof; duplicate/competing claim; denied ownership; offline retains unsent input | SuperAdmin decides ownership before editing is granted; pending/approved/changes requested/rejected labels and conflict/revocation procedure are proposals |
| Review / report | No Review; existing Review and ID loaded | Own-Company review blocked; missing ID/invalid score; failed save/request retains input; login required/session expiry | Saved/edited Review acknowledgement; app/email removal or appeal request pending SuperAdmin decision; no automatic removal/restoration |
| SuperAdmin Listings | Queue load; no pending records | Unauthorized actor; stale record decision; write failure/offline | Publication/claim decisions confirmed per record; rejection/revision reason visible to Provider |
| SuperAdmin Discovery | Run pending; no candidates | Source outage/partial run; missing evidence; potential duplicate; disabled/ineligible channel; send failure | Vetting disposition, unclaimed publication, and invitation outcome shown independently |
| SuperAdmin Moderation | Reports/removal/appeal requests loading; no requests | Access denied; missing/stale Review ID; failed decision/offline | Explicit SuperAdmin outcome distinct from request receipt; aggregate handling and exact disposition labels remain proposals |
| SuperAdmin Settings | Configuration load; no connected eligible channels | Invalid time/timezone; save failure; unavailable integration | Saved settings separate from successful run/send; unsaved changes remain marked |
| SuperAdmin Insights | Loading; insufficient data | Measurement unavailable or partial, offline | Separate reveal/click and attempt/success; no sales conversion claim |
| Account / access recovery | Session check | Expired login, failed sign-out/recovery, offline | Return to public browsing after sign-out; fresh login restores permitted intent |
| Shared feedback states | Not applicable by themselves | Render owning surface's error/permission context | [states.html](mockups/states.html) illustrates empty results, location fallback, and error recovery |

Discovery state treatment is deliberately distinct: a Candidate can be reviewed while not published; an unclaimed Listing can be published while an Invitation remains unavailable or unsent. Configuring a daily schedule does not prove sources or outreach are operational. The [discovery mock](mockups/admin-discovery.html) and [settings mock](mockups/settings.html) show review concepts only. Source acquisition, exact channels, repeat-send policy, and launch fallback need later feasibility decisions.

## Interaction Primitives

**Vision in each interaction:** carry the confirmed warm everyday-wellness purpose into button feedback and loading, empty, success, and error states. Each should explain what is happening, preserve useful context, and offer the next relevant step. A proposed waiting treatment may pair a small food-related cue with readable status text; its motif and timing need a demonstration before selection. Buttons retain their identity across focus, pressed, busy, and completed states, with labels that describe the action. Never add artificial waiting to showcase animation, imply progress that cannot be measured, or hold back usable results. Reduced-motion mode removes decorative movement and preserves the same status information. The current static mockups do not implement these motion treatments.

- Explicit text search submission, labelled filters, and ordinary links/buttons support touch and keyboard. No hover-only action or drag-only edit.
- Back navigation restores search, filters, chosen location, and relevant return intent where safe. A changed location recalculates results using actual Service coverage rules selected later.
- Use one DialogPanel layer; move focus inside on open and back to the invoker on close. Inline error summaries link to affected fields.
- Forms save or submit deliberately. Do not imply background persistence or offline auto-sync. Retain safe unsent input after failure; never retain passwords or verification secrets in the demo.
- Do not automatically request location, play media, send Invitations, contact Providers, or dismiss unresolved errors. Public browsing needs no login; contact access, Reviews, and protected editing do.
- Product insight semantics distinguish searches, views, contact reveal/initiation, upload/submission result, publishing, Candidate review, invitation attempt/outcome, and onboarding. Event retention/consent/tooling are pending; mocks collect none.

## Accessibility Floor

Proposed WCAG 2.2 AA target for the eventual product. Visual contrast pairings and measured token ratios live in DESIGN.md/coverage-check.md. This stakeholder package is not a certification.

Provide semantic navigation/main landmarks, one main heading, skip navigation, descriptive link labels, and logical reading/tab order. Inputs have persistent labels, associated hints/errors, and meaningful required-state announcements. Rating options are keyboard-operable radios with spoken values. Focus uses a visible 3px `{colors.focus}` outline with white separation; keep it unobscured by sticky areas. Targets are at least 44 CSS px where practical.

Announce result-count changes with a polite live region; submission errors use an alert and focus a summary without losing input. Status text conveys the same meaning as fill/icon. Ensure text at 200% zoom and 320 CSS px reflows; content language and selectable text support browser translation. Food-photo alt describes the illustrative content, never the fictional provider's verified offering. User-played video controls must be keyboard-operable; captions and meaningful text alternatives are proposed release details. Review IDs remain selectable if clipboard access fails. Reduced-motion mode eliminates decorative transitions. No core flow requires animation, swipe, fine pointer precision, or location permission.

## Key Flows

Source journey titles below are verbatim. Names are fictional protagonists used for review. Numbered steps and proposed failure paths make the directory intent visible without adding dietary-specific requirements.

### UJ-1. Arun finds everyday home-cooked meals

1. Arun opens Directory on his phone and chooses Hyderabad/area manually, or explicitly uses device location.
2. He enters relevant text and narrows the results using available filters.
3. He opens a ProviderCard and reads Menu items/Packages and illustrative photos on Listing detail.
4. He selects ContactGate, signs in through AuthForm, and returns to the same Listing/contact intent.
5. **Climax:** he can access a relevant Provider's contact route and arrange breakfast/lunch/dinner directly outside NutriSystem.

Failure: location denial → manual choice; no results → revise text/filters; sign-in cancellation → public Listing stays usable. References: [directory](mockups/directory.html), [Listing detail](mockups/provider.html), [sign-in](mockups/sign-in.html).

### UJ-2. Dev finds an event caterer

1. Dev chooses the event's location in Directory.
2. He selects the proposed event-catering service filter and examines the remaining Providers.
3. On Listing detail he reads Packages and photographs, without date/guest-count booking controls.
4. He signs in for contact access.
5. **Climax:** he has a usable contact route to discuss the event directly with a Provider.

Failure: no suitable Package → return to preserved search and adjust; missing imagery → readable offering text remains. References: [directory](mockups/directory.html), [Listing detail](mockups/provider.html).

### UJ-3. Sana publishes and maintains her company

1. Sana chooses List your business and signs in as a Provider.
2. ProviderForm collects proposed Company fields, Service coverage, searchable Menu items/Packages, pictures/videos, and supplementary files.
3. She saves a draft, then submits for SuperAdmin review; pending status confirms that the Listing is not public yet.
4. She receives an explicit publishing decision or changes request and returns to the same editable draft to revise.
5. **Climax:** an approved Listing is publicly visible. Sana then saves menu edits without approval and submits later listing edits for SuperAdmin approval.

Claim variant: an existing unclaimed Listing routes Sana to Ownership claim; SuperAdmin handles the verification/decision, and editing stays unavailable until approved. Exact proof/conflict procedures remain proposals. Failure: upload/save error retains safe fields; rejected/competing claim shows status and next permitted action. For a published listing awaiting edit approval, preserving the current public version is a UX proposal. References: [onboarding](mockups/onboarding.html), [claim](mockups/claim.html), [SuperAdmin Listings](mockups/admin-listings.html).

### UJ-4. Alex vets a discovery Candidate

1. Alex, SuperAdmin, opens Settings and reviews the proposed daily time/timezone and connected channel eligibility.
2. In Discovery he inspects a run's complete/partial/failed outcome, then opens a Candidate.
3. CandidateEvidence displays source details and possible existing Listing matches; Alex edits extracted data without discarding evidence.
4. He records a vetting disposition. Separate review controls propose unclaimed publication and invitation eligibility/outcome; neither is automatic.
5. **Climax:** the Candidate has an explicit documented disposition, with publication and outreach outcomes distinguishable.

Failure: unsupported source → visible unavailable/partial status; probable duplicate → inspect existing Listing before action; ineligible channel → disabled with reason, no fake success. Actual invitations are not sent in the demo. Alex can inspect spine-only Insights for funnel/operating results once event definitions are selected. References: [Discovery](mockups/admin-discovery.html), [Listings](mockups/admin-listings.html), [Settings](mockups/settings.html).

### UJ-5. Mira maintains or reports a Review

1. Mira opens a Listing and chooses Write Review or Edit my Review, signing in if needed.
2. ReviewForm opens her existing Review where present; she selects 1–5 and optionally writes text. If the Company is her own, self-review is blocked.
3. She saves and sees an explicit result and selectable Review ID; the visible aggregate follows the later agreed rounding/eligibility policy.
4. For inappropriate content she uses the separate report action. For removal or appeal she sends SuperAdmin an app request or an email carrying the Review ID. The Review mock links to the Listing's inline removal/appeal/report form, while full DialogPanel treatment is spine-only.
5. **Climax:** her Review save or request acknowledgement is visible; SuperAdmin assesses the identified Review in Moderation and gives a distinct decision.

Failure: failed save/request retains input and offers retry; missing Review ID prevents an app removal/appeal request; failed clipboard access leaves selectable ID text. Reporting or requesting removal/appeal does not automatically remove or restore content. Session expiry restores the Review intent after sign-in. References: [Review](mockups/review.html), [Listing detail with inline report](mockups/provider.html), [Moderation](mockups/admin-moderation.html). A Customer request never grants access to the SuperAdmin queue.

### UJ-6. A Customer finds meals for an older person's specific diet

1. Leela chooses location on Directory and types a relevant term or applies the available filters.
2. Results reflect stored Provider-published information and chosen location, using the same basic flow as UJ-1.
3. She opens Listing detail and reads menu details, Packages, photographs, and declared attributes.
4. She signs in for contact access and asks the Provider directly about her requirements.
5. **Climax:** she finds a relevant Listing and a contact route; she remains the person judging whether to proceed.

Failure: no matching published information → revise search or directly clarify with a Provider; the site does not invent suitability evidence or require a special diet taxonomy. References: [directory](mockups/directory.html), [Listing detail](mockups/provider.html), [sign-in](mockups/sign-in.html).

## Responsive & Platform

At 320–600px, stack major sections and preserve horizontal photo/text ProviderCard recognition with actions below. FilterPanel uses a labelled disclosure; AdminNav becomes horizontal wrapping navigation. Long provider names and translated labels wrap. From 601–850px, use narrower filter/navigation rails and simpler detail columns; above 850px use the full desktop composition. Body text switches to `{typography.body-mobile}` at 600px and below. Use `{spacing.gutter-mobile}` and `{spacing.gutter-desktop}` consistently. The [phone-framing reference](mockups/directory-mobile.html) uses a labelled Directory iframe within a 406px shell, including two 8px edges, for 390px content at its full desktop framing size. The frame contracts on small screens; it is a review-only wrapper, not an additional product surface. No native app, dark-mode contract, or offline editor is introduced.

Browser translation may modify text length/order. Set accurate source/content language, keep essential offering text selectable, and validate Directory, sign-in/contact return, ProviderForm, and administrative states against intended browser behavior during implementation QA. Display translation availability is controlled by the browser; search still matches stored text. Text embedded in photos/PDFs is not automatically translated by this contract.

## Review Decisions and Handoff

Stakeholders should accept or change the proposed visual tokens, layout, English copy, field suggestions, filter vocabulary, and exact publishing/claim/review state labels. The owner has confirmed approval boundaries, SuperAdmin ownership responsibility, self-review prohibition, app/email removal/appeal requests with Review ID, and picture/video support. PRD D-8–D-11 now retain only unresolved implementation/procedure details. Integration/source feasibility, channel eligibility, data/privacy policy, authentication mechanism, media limits, and numeric quality targets remain pending at their later gates. Budget follows architecture's stack/cloud decision. These items do not stop visual review.

Spine-only variants are explicitly documented in IA: detailed edit/revision forms beyond the mocked approval-boundary examples, claim conflict/revocation, full report DialogPanel beyond the inline mock, administrative claim detail, Insights, account/recovery, and playable video. The Listing mock labels its ownership-claim preview as an unclaimed-Listing example, to distinguish it from the displayed claimed demo Provider. No independent full UX-review lenses or stakeholder approval are implied by the mechanical check in [coverage-check.md](coverage-check.md). Technical design and implementation follow stakeholder review of the PRD/UX package. GTM remains deferred.
