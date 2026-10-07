---
name: NutriSystem
description: A warm local food-service directory, made concrete for stakeholder review.
status: final
stakeholder_approval: pending
review_feedback: GitHub stakeholder review PR file/line comments
implementation_readiness: pending
created: 2026-10-07
updated: 2026-10-07
sources:
  - ../../prds/prd-nutrisystem-2026-10-07/prd.md
  - ../../briefs/brief-nutrisystem-2026-10-07/brief.md
colors:
  canvas: '#F7F5EC'
  surface: '#FFFFFF'
  primary: '#244B3C'
  primary-hover: '#18382C'
  on-primary: '#FFFFFF'
  ink: '#23362D'
  ink-secondary: '#56645B'
  surface-soft: '#EAF0E5'
  border: '#D9DED2'
  input-border: '#748377'
  accent: '#755A1F'
  accent-surface: '#F4ECD6'
  error: '#A7352B'
  error-surface: '#FFF0ED'
  focus: '#2764B0'
typography:
  display:
    fontFamily: 'Georgia, Cambria, serif'
    fontSize: 52px
    fontWeight: '400'
    lineHeight: '1.12'
    letterSpacing: '-0.025em'
  display-mobile:
    fontFamily: 'Georgia, Cambria, serif'
    fontSize: 38px
    fontWeight: '400'
    lineHeight: '1.12'
    letterSpacing: '-0.8px'
  heading:
    fontFamily: 'system-ui, Segoe UI, sans-serif'
    fontSize: 26px
    fontWeight: '700'
    lineHeight: '1.25'
  body:
    fontFamily: 'system-ui, Segoe UI, sans-serif'
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.55'
  body-mobile:
    fontFamily: 'system-ui, Segoe UI, sans-serif'
    fontSize: 15px
    fontWeight: '400'
    lineHeight: '1.55'
  label:
    fontFamily: 'system-ui, Segoe UI, sans-serif'
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.5'
  meta:
    fontFamily: 'system-ui, Segoe UI, sans-serif'
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
rounded:
  sm: 8px
  md: 12px
  panel-mobile: 16px
  lg: 20px
  full: 9999px
spacing:
  '1': 4px
  '2': 8px
  '3': 12px
  '4': 16px
  '5': 24px
  '6': 32px
  '7': 48px
  gutter-mobile: 16px
  gutter-desktop: 32px
components:
  AppHeader: {background: '{colors.canvas}', foreground: '{colors.ink}'}
  DemoNotice: {background: '{colors.primary}', foreground: '{colors.on-primary}'}
  ActionButton: {background: '{colors.primary}', foreground: '{colors.on-primary}', radius: '{rounded.md}'}
  SearchBar: {background: '{colors.surface}', border: '{colors.input-border}', radius: '{rounded.md}'}
  LocationControl: {foreground: '{colors.ink}', radius: '{rounded.md}'}
  FilterPanel: {background: '{colors.surface-soft}', radius: '{rounded.lg}'}
  ProviderCard: {background: '{colors.surface}', radius: '{rounded.lg}'}
  StatusBadge: {background: '{colors.surface-soft}', foreground: '{colors.primary}', radius: '{rounded.full}'}
  OfferingCard: {background: '{colors.surface}', radius: '{rounded.md}'}
  PhotoGallery: {background: '{colors.surface-soft}', radius: '{rounded.lg}'}
  ContactGate: {background: '{colors.surface-soft}', radius: '{rounded.lg}'}
  AuthForm: {background: '{colors.surface}', radius: '{rounded.lg}'}
  ProviderForm: {background: '{colors.surface}', radius: '{rounded.lg}'}
  UploadField: {background: '{colors.canvas}', border: '{colors.input-border}', radius: '{rounded.md}'}
  ReviewForm: {background: '{colors.surface}', radius: '{rounded.lg}'}
  AdminNav: {background: '{colors.surface-soft}', foreground: '{colors.primary}'}
  AdminQueue: {background: '{colors.surface}', border: '{colors.border}', radius: '{rounded.lg}'}
  CandidateEvidence: {background: '{colors.canvas}', radius: '{rounded.md}'}
  ScheduleForm: {background: '{colors.surface}', radius: '{rounded.lg}'}
  StateMessage: {foreground: '{colors.ink}', radius: '{rounded.md}'}
  DialogPanel: {background: '{colors.surface}', radius: '{rounded.lg}'}
---

# NutriSystem visual contract

## Brand & Style

The confirmed direction is warm everyday wellness: cream, forest green, food photography, accessible horizontal provider cards, and a mobile-friendly web experience. Food and useful provider information carry the purpose throughout browsing, onboarding, and administration. The visual posture is welcoming and practical. It gives a Customer room to read what is offered and decide whom to contact.

**Vision throughout the experience:** the owner requires an enchanting experience that carries the purpose of finding nearby home-cooked food into every detail, including waiting symbols and buttons. Apply the same warm, thoughtful identity to primary actions, loading, empty results, successful actions, and recovery. Delight should help people feel oriented and cared for while making progress toward a relevant food service. Keep the experience calm, purposeful, and readable.

The owner finds the first-cut screen appearance acceptable. This is positive visual feedback; stakeholder approval remains pending. Publishing, ownership, and Review rules confirmed later by the owner are captured in EXPERIENCE.md. The exact waiting motif, motion timing, and action copy remain proposals to demonstrate; no leaf, meal, or other illustrated symbol has been selected. The existing static mockups establish screen composition and do not demonstrate animated waiting or transitions.

**Proposal status:** precise tokens, typography, layout, component anatomy, and English mock copy are review proposals authored under the owner's instruction to complete the package now. `final` means this review package is complete; stakeholder acceptance and implementation readiness remain pending. No frontend framework or component library is selected. [EXPERIENCE.md](EXPERIENCE.md) owns behavior. Together these two spines take precedence over visual mockups when they conflict.

Every product mock has a persistent DemoNotice disclosing illustrative businesses, photos, prices, ratings, and counts. Sample Reviews and availability follow the same demo context. Imagery is illustrative food photography, with no claim that it belongs to the fictional business. The [review gallery](mockups/index.html) introduces the vision and links the individual proposed screens. Mockups contain no live authentication, publishing, sending, payment, or booking.

## Colors

The cream canvas `{colors.canvas}` surrounds white `{colors.surface}` content. Forest `{colors.primary}` anchors actions and identity. `{colors.ink}` carries primary text and `{colors.ink-secondary}` carries supporting information. `{colors.surface-soft}` sets apart contextual panels and calm status labels. `{colors.accent-surface}` with `{colors.accent}` labels demo context and pending attention. Errors pair `{colors.error}` with `{colors.error-surface}` and plain text. `{colors.focus}` identifies keyboard focus.

`{colors.border}` is decorative separation, never the sole indicator of an input or control. Inputs use `{colors.input-border}`. Selected filters combine fill, checkmark, and text. Error and success states include words rather than relying on red or green.

Proposed contrast floor: normal text 4.5:1, large text 3:1, essential controls/focus 3:1 against their adjacent surfaces. Load-bearing pairs are white on forest; ink and secondary ink on cream/white/soft green; accent on its light fill; error on its light fill; input border against white; blue focus against cream and white. Actual arithmetic is recorded in [coverage-check.md](coverage-check.md); this is token verification, not a claim of complete accessibility certification.

## Typography

System sans fonts carry body text, navigation, labels, forms, and administrative tables. Georgia/Cambria serif is a proposed display accent for the directory introduction and major customer-facing headings. The promoted directory composition uses `{typography.display}` on wide screens, 42px at 601–850px, and `{typography.display-mobile}` at 600px and below. Operational section headings use `{typography.heading}`; administrative page titles use 32px system sans, reducing to 28px on mobile. Detail/sign-in titles reduce to 34px on mobile. Body copy uses `{typography.body}`, with `{typography.body-mobile}` on mobile; all fields remain zoomable and wrap safely.

Do not place essential information inside images. Provider names, offerings, and prices wrap as text; cards do not force one-line truncation of names. Telugu/Hindi content uses browser/system fallback fonts. Font loading is not a prerequisite, and no remote font dependency is selected. Allow text expansion from browser translation and 200% zoom without fixed text-box heights.

## Layout & Spacing

Use a 4px-based scale: `{spacing.1}` through `{spacing.7}`. Main content is centered at a proposed maximum of 1200px, with `{spacing.gutter-desktop}` wide-screen gutters and `{spacing.gutter-mobile}` narrow-screen gutters. Separate major sections by `{spacing.7}`, card internals by `{spacing.4}` or `{spacing.5}`, and related labels by `{spacing.2}`.

| Surface | Wide layout | Narrow layout | Visual reference |
|---|---|---|---|
| Directory | Intro, location/search, 240px filter column, wide horizontal results | Stacked intro/search; filter disclosure; horizontal image-and-text cards with actions underneath | [directory.html](mockups/directory.html), [directory-mobile.html](mockups/directory-mobile.html) frames the 390px reference |
| Listing detail | Photo/summary split; menu/main column and contact panel | Gallery, summary, contact panel, menu/packages, Reviews in reading order | [provider.html](mockups/provider.html) |
| Sign-in | Focused form, max 520px, return intent visible | Full-width form within mobile gutters | [sign-in.html](mockups/sign-in.html) |
| Provider editing | Step/context rail and form, max 900px | Step labels and form stack; pending result stays readable | [onboarding.html](mockups/onboarding.html) |
| SuperAdmin | 210px navigation rail; queue with review/detail panel; 170px rail at intermediate widths | Horizontal wrapping navigation; labelled queue rows become cards; details below | [admin-listings.html](mockups/admin-listings.html), [admin-discovery.html](mockups/admin-discovery.html), [admin-moderation.html](mockups/admin-moderation.html) |
| Claim / Review | Focused form and provider context | One column with clear return link | [claim.html](mockups/claim.html), [review.html](mockups/review.html) |
| States / settings | Grouped state examples or two-column settings sections | Stacked examples and labelled form fields | [states.html](mockups/states.html), [settings.html](mockups/settings.html) |

At 600px and below, the filter column becomes an inline disclosure and administrative navigation wraps horizontally. From 601–850px, filter and navigation rails are narrower; above 850px they use the full wide composition. These are proposals extracted from the promoted mocks rather than selected CSS tooling. Dense tables may scroll within a labelled region only where two-dimensional relationships require it; core mobile actions and content must reflow.

## Elevation & Depth

Use tonal separation and light borders for most surfaces. Proposed card shadow: `0 6px 24px rgba(35,54,45,0.05)`. Reserve stronger `0 16px 48px rgba(35,54,45,0.16)` for DialogPanel. Hover can darken a button or clarify a card edge; do not lift or move a card as the only activation cue. No background video, parallax, or loading shimmer is needed for this review direction.

## Shapes

ProviderCard, main panels, and DialogPanel use `{rounded.lg}`; main panels reduce to `{rounded.panel-mobile}` on mobile. Forms, inputs, and ActionButton use `{rounded.md}`. Small image tiles use `{rounded.sm}`. StatusBadge alone uses `{rounded.full}`. Photographs and video frames clip to the radius of their container. PhotoGallery retains its component name while supporting pictures and user-played videos. Missing media uses a neutral text fallback; the current mock shows a video placeholder rather than a playable clip.

The generated [demonstration meal image](mockups/assets/meal-demo.png) supplies illustrative thali photography across the review screens. [Asset notes](mockups/assets/asset-notes.md) record its provenance. Reuse in multiple fictional Listings demonstrates image treatment, not real provider menus or dietary evidence.

## Components

Names match EXPERIENCE.md exactly. All dimensions below are proposals; functional and state rules live in the peer spine.

| Component | Visual contract |
|---|---|
| AppHeader | NutriSystem wordmark, Browse and List your business links, sign-in/account area. Cream background, forest wordmark, restrained bottom border. Mobile header stacks wordmark above a left-aligned wrapping link row; links keep 44px targets and List your business remains visible. Public header and administrative header share type and spacing. |
| DemoNotice | Persistent full-width forest strip with white text, 12px on wide screens and 11px on mobile. Sits ahead of demo content; never hidden behind a tooltip. The dedicated phone-framing page exposes the notice within its Directory iframe. |
| ActionButton | Forest primary, white label, 44px minimum height, 12px corners. Secondary is white with visible input-border and forest label. Destructive uses error text with a written action label. Focus is 3px blue with 2px white separation. |
| SearchBar | Labelled text field and explicit Search button; white surface, visible input-border, 44px minimum input height. Example hints are separate from the label. |
| LocationControl | Visible city/area text with Change location and Use my location controls. Small location icon is supplementary. Text distinguishes selected location from provider address. |
| FilterPanel | Soft-green rounded panel; grouped checkbox labels, selected count, clear action. Mobile disclosure retains the active-filter summary outside the closed panel. |
| ProviderCard | White rounded horizontal tile. Wide: 126×136 photo beside main name/rating/address/attributes, with actions after the text. Intermediate: 92×114 photo. Narrow: 88×104 photo beside wrapping name/review/locality; actions below. Essential text stays visible. |
| StatusBadge | Pill containing a short state label. Soft-green for neutral/public state, ochre for pending, pale-red for failed/rejected. Ownership state and publishing state are distinct labels. |
| OfferingCard | Item/package name, descriptive text, optional explicitly labelled price/unit and photo. Package inclusions use a short list. Image absence preserves text geometry. |
| PhotoGallery | Large food image with supporting pictures or labelled video tiles. Video exposes a readable play action and controls; no autoplay or inaccessible carousel. Captions disclose illustrative mock imagery. Current video tile is a placeholder, with no clip. |
| ContactGate | Soft-green panel. Locked: clear sign-in action. Unlocked demo: visibly labelled sample contact routes. It does not resemble checkout. |
| AuthForm | White panel, Google and email choices, return Listing name. Field labels above inputs; grouped errors beneath fields and summary above. |
| ProviderForm | Sections for business, Service coverage, Menu items/Packages, pictures/videos and supplementary menu. Initial-publish, menu-edit and listing-edit contexts have distinct labels and draft/pending/result treatment. |
| UploadField | Visible outlined upload area with Browse files control, picture/video purpose text, file-name/status rows, and removable selected assets. Supplementary PDF menus remain supported. No unlabeled drag-only target. |
| ReviewForm | Five labelled rating choices, optional text area, current Review state, and explicit save action. Selected score uses text and shape in addition to color. Review ID is selectable, with a copy affordance proposed for implementation. Removal/appeal requests show the referenced ID and request type; self-review block has a clear text explanation. |
| AdminNav | Soft-green rail with forest labels. Current page uses forest fill and white text. Mobile uses horizontal wrapping navigation with every page label visible. |
| AdminQueue | White rounded list/table with identity, state, age/source where relevant, and explicit review action. Moderation shows Review ID and report/removal/appeal request type. Selected row has soft-green fill and text indication. |
| CandidateEvidence | Cream inset detail panel showing source/platform, source reference, discovery time, extracted data, and possible duplicate links. No unsupported “verified” seal. |
| ScheduleForm | Labelled time and timezone fields; separate source/channel eligibility rows and save action. Availability reasons remain legible beside disabled channels. |
| StateMessage | Compact titled panel for loading, empty, success, permission, offline, and error; appropriate labelled retry/change action. No decorative full-page illustration required. |
| DialogPanel | White max-width 640px panel with visible title, Close, contextual details, and bottom actions. Error text stays near its field; focus ring is unobscured. |

## Do's and Don'ts

| Do | Don't |
|---|---|
| Put offerings, Service coverage, Reviews, and contact intent ahead of decorative content. | Add booking, payment, personalized diet assessment, or medical-outcome claims to the designs. |
| Keep demo disclosure visible and use neutral fictional names. | Present sample ratings/prices/photos as real provider evidence or traction. |
| Give each state a plain text label and recovery path. | Use color, icons, hover, or image text as the only information channel. |
| Show business ownership separately from publishing and customer ratings. | Turn review/ownership status into a food-safety or dietary certification badge. |
| Preserve horizontal card recognition while allowing content to wrap. | Squeeze mobile cards into unreadable fixed heights or hide essential actions. |
| Show browser translation as platform-dependent. | Add an app language selector or imply translated queries/embedded files are supported. |
