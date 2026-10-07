# UX coverage check

Date: 2026-10-07. Files: [DESIGN.md](DESIGN.md), [EXPERIENCE.md](EXPERIENCE.md). Sources: canonical [PRD](../../prds/prd-nutrisystem-2026-10-07/prd.md) and [brief](../../briefs/brief-nutrisystem-2026-10-07/brief.md).

This report records the proactive mechanical Pass 1 required by the installed `bmad-ux` skill. It does not claim an optional full UX review, independent accessibility audit, implementation test, or stakeholder approval. The package is final for stakeholder review; approval and implementation readiness remain pending.

## Mechanical coverage

| Category | Check / result |
|---|---|
| Flow coverage | All six PRD UJ titles appear verbatim in EXPERIENCE.md Key Flows, including the older-person title. Each has a named protagonist, five numbered steps, a climax, failure/recovery, and inline mock references. Functional requirements map to surfaces below. |
| Token completeness | DESIGN.md defines 15 six-digit hex colors, seven typography roles, five radii, nine spacing entries, and 22 named components. All `{path.to.token}` references in both spines resolve; no undefined references found. |
| Component coverage | The 22 DESIGN.md component names exactly match EXPERIENCE.md Component Patterns and DESIGN.md frontmatter. Visual anatomy and behavioral rules exist for each; no unpaired names found. |
| State coverage | All 13 IA rows have corresponding State Patterns rows. Their applicable loading/empty, error/offline/access, and resolution states are explicit. Common focus treatment and permission/manual-location fallback are documented. |
| Visual reference coverage | 13 HTML compositions, one generated meal asset, and its provenance note are linked inline in the relevant spine sections. The dedicated mobile reference was added to the Directory rows. No unreferenced composition remains. |
| Source references | Both spines' PRD/brief source paths resolve. Shared component terminology and six journey names match. No framework, live integration, booking/payment, diet-matching engine, or native language selector is introduced. |
| Shape | DESIGN.md body follows all eight canonical sections in order. EXPERIENCE.md includes all eight required sections and Responsive & Platform because narrow/wide web layouts differ. |

Checks used a local Python standard-library script to extract frontmatter token paths, references, component rows, UJ headings, numbered/climax/failure coverage, and local links; state/requirement mapping was inspected against the PRD and IA. Token-format shape was also inspected directly. No package installation or remote call was required.

## Requirement-to-surface accounting

| Source requirement | Owning UX surface / treatment |
|---|---|
| FR-1: Public browsing | Directory and Listing detail remain usable before sign-in. |
| FR-2: Chosen location | Directory LocationControl and shared permission/manual fallback. |
| FR-3: Service coverage matching | Directory results, Listing coverage, Provider workspace coverage. Exact geographic rules remain pending. |
| FR-4: Search and filters | Directory SearchBar/FilterPanel and searchable offerings. |
| FR-5: Provider cards and empty states | Directory ProviderCard and StateMessage. |
| FR-6: Pilot login | Sign-in / return and account/recovery. Google/email only. |
| FR-7: Contact access after login | Listing detail ContactGate and sign-in return intent. |
| FR-8: Role and ownership boundaries | Protected Provider/SuperAdmin surfaces and unauthorized/access-expiry states. |
| FR-9: Provider onboarding | Provider workspace ProviderForm. |
| FR-10: Initial publishing review | Provider initial-publish and later listing-edit approval, direct menu-edit save, and SuperAdmin Listings. Preserving current public listing during edit review is a proposal. |
| FR-11: Structured Menu items and Packages | Provider workspace and Listing OfferingCard; searchable Directory data. |
| FR-12: Supplementary menu files | Provider UploadField supports pictures/videos and existing supplementary PDF menus; Listing PhotoGallery includes a video placeholder. Structured text remains present; playable video and exact formats/limits are implementation work. |
| FR-13: Sourced unclaimed Listings | SuperAdmin Listings/Discovery and public ownership badge. |
| FR-14: Ownership verification | Ownership claim and SuperAdmin claim detail; SuperAdmin handles verification/decisions; no editing before approval. Exact evidence/conflict procedure remains pending. |
| FR-15: One editable Review | Review surface opens existing contribution for edit, blocks own-Company review, and exposes selectable Review ID. |
| FR-16: Aggregate Review display | ProviderCard and Listing Review context; exact visible-set/rounding policy pending. |
| FR-17: Reporting | Listing inline report/removal/appeal form/receipt; Review links to app form and gives email guidance carrying Review ID; Moderation request type/ID; spine-only full report DialogPanel. Requests acknowledge pending SuperAdmin decisions without automatic removal/restoration. No Customer link into protected moderation surfaces. |
| FR-18: SuperAdmin content management | Listings, Discovery, Moderation, claims and resulting states. |
| FR-19: Evidence-backed Candidates | Discovery CandidateEvidence and duplicate context. |
| FR-20: Daily configurable schedule | Settings ScheduleForm, Discovery run result. |
| FR-21: Candidate vetting and editing | Discovery Candidate details/disposition. |
| FR-22: Configurable eligible Invitations | Settings eligibility and distinct Discovery invitation outcome. |
| FR-23: Conditional discovery release | Discovery source/channel unavailable/partial states; launch feasibility remains a later decision. |
| FR-24: Public search visibility | Public Directory/Listing text and protected contacts; metadata/page policy pending. |
| FR-25: Analytics and diagnostics | Spine-only Insights and event semantics; no mock tracking or sales attribution. |
| FR-26: Browser-assisted translation | Foundation/Responsive & Platform: selectable source text, English proposed copy, platform-dependent translation, no translated-query promise. |

## Measured color pairings

Relative luminance was calculated from sRGB channel values with gamma conversion; contrast is `(lighter luminance + 0.05) / (darker luminance + 0.05)`. Ratios are rounded to two decimals. These token pairings meet the proposed normal-text or control threshold shown; surrounding images, rendered states, zoom, and screen-reader operation still require implementation verification.

| Foreground / background | Ratio | Intended floor |
|---|---:|---:|
| White / forest primary | 9.78:1 | 4.5:1 text |
| Ink / cream canvas | 11.75:1 | 4.5:1 text |
| Ink / white | 12.83:1 | 4.5:1 text |
| Secondary ink / cream | 5.71:1 | 4.5:1 text |
| Secondary ink / white | 6.23:1 | 4.5:1 text |
| Secondary ink / soft green | 5.37:1 | 4.5:1 text |
| Ochre / accent fill | 5.50:1 | 4.5:1 text |
| Error / error fill | 5.94:1 | 4.5:1 text |
| Input border / white | 4.00:1 | 3:1 essential boundary |
| Focus blue / white | 5.94:1 | 3:1 focus |
| Focus blue / cream | 5.44:1 | 3:1 focus |

Decorative pale borders are not used as the sole essential control indicator. State meaning includes words and focus has a separation edge.

## Composition inventory and intentional spine-only coverage

| Reference | Shows |
|---|---|
| [index.html](mockups/index.html) | Stakeholder gallery and the coherent directory vision. |
| [directory.html](mockups/directory.html) | Location/text search, filters, horizontal provider cards and Review signals. |
| [directory-mobile.html](mockups/directory-mobile.html) | Same directory in a phone-width composition. |
| [provider.html](mockups/provider.html) | Offerings/pictures/Reviews, video placeholder without a clip, locked/unlocked contact concepts, inline report form/receipt, and explicitly labelled unclaimed-Listing ownership-preview link. |
| [sign-in.html](mockups/sign-in.html) | Google/email choice and retained contact intent. |
| [onboarding.html](mockups/onboarding.html) | Proposed Provider fields/menu input, picture/video upload control, initial publishing-pending state, direct menu-edit and approval-required listing-edit examples. |
| [admin-listings.html](mockups/admin-listings.html) | SuperAdmin listing review and dispositions. |
| [admin-discovery.html](mockups/admin-discovery.html) | Source evidence, duplicate context, vetting and distinct publication/invitation outcomes. |
| [admin-moderation.html](mockups/admin-moderation.html) | Reports/removal/appeal requests with Review ID and distinct SuperAdmin content decision. |
| [claim.html](mockups/claim.html) | Ownership claim/pending evidence review concept. |
| [review.html](mockups/review.html) | One editable score/optional text, self-review block, Review ID, and app/email removal/appeal request guidance. |
| [states.html](mockups/states.html) | Empty results, location fallback, and error recovery examples. |
| [settings.html](mockups/settings.html) | Proposed configurable discovery time/timezone and channel eligibility. |
| [meal-demo.png](mockups/assets/meal-demo.png) / [asset-notes.md](mockups/assets/asset-notes.md) | AI-generated illustrative thali photograph and provenance; no real provider evidence. |

Intentional spine-only variants: detailed Provider editing/revision forms beyond the edit-policy examples; ownership conflicts/revocation; administrative claim detail; full report DialogPanel beyond the inline mock; SuperAdmin Insights; account/sign-out/access recovery; playable video. Their owning journeys, state/recovery patterns, and components are specified in EXPERIENCE.md. They are not silently omitted features or standalone mock claims. Per-source/per-channel edge states are documented even where one representative example is visualized.

## Sequential editorial polish

The installed UX customization calls `bmad-review lenses=structure,prose`. Those instructions were read and applied sequentially within this delegated task, without spawning reviewers. Reference/Database was the chosen structure model: canonical token sections and matched visual/behavior tables let stakeholders and downstream agents inspect individual rules. Exact `word_metrics.py` counts before final visual extraction were DESIGN.md 1,834 words and EXPERIENCE.md 3,425 words, including frontmatter. Final counts after extraction are 1,983 and 3,619 respectively. No length target was supplied.

Structure pass preserved the IA/state/flow repetition because each serves a separate check: reachability, recovery, and complete user journey. Prose pass preserved the confirmed/proposed/pending distinctions and replaced ambiguous coverage with explicit mobile/asset references. No optional full review or stakeholder acceptance was run. Final extraction reconciled the spines to the promoted mock CSS: 52px desktop/38px mobile directory titles, 600px/850px breakpoints, forest demo strip, 15px mobile body, soft-green filters/navigation, wrapping mobile AdminNav, and 126×136/88×104 card photos. Final mobile header links retain List your business with 44px targets; All services is the default filter scope; the phone wrapper provides 390px content within a 406px shell. These are final review proposals; unresolved policy/integration items remain labelled review decisions.

## Remaining review and delivery boundaries

Stakeholders still need to accept or change detailed visual choices, English source copy, proposed fields/state labels, and unresolved PRD decisions. Approval boundaries, SuperAdmin ownership responsibility, self-review prohibition, removal/appeal request routes with Review ID, and picture/video support are confirmed owner decisions. Browser translation behavior, auth/email mechanism, media limits/contact-bearing assets, ownership evidence/conflict procedure, aggregate eligibility/rounding, source/channel feasibility, event privacy, and release thresholds remain later-gate details. Budget follows architecture's stack/cloud decision. These pending details do not prevent completion of this review package.

The policy update preserved six verbatim journey titles, their five numbered steps/climax/failure paths, 22 paired components, token definitions and all source/mock links. A small structure pass kept confirmed rules near Foundation and their specific surface rules in the existing tables; the subsequent prose pass distinguished confirmed policy from proposed continuity, fields, labels and media accessibility details. Vision-through-buttons/loading principles and pending stakeholder/implementation status remain intact. Exact policy-update word counts before the final reference correction were DESIGN.md 2,202 and EXPERIENCE.md 4,242, including frontmatter; no length target or reduction was requested. No optional expanded review was run.

The mockups demonstrate proposed appearance and local interaction only. They do not prove real search ranking, coverage matching, server authorization, live discovery/invitations, provider contacts, upload persistence, production SEO, or operational reliability. The parent task separately owns visual inspection and mock interaction checks; this report makes no claim that those have already passed.
