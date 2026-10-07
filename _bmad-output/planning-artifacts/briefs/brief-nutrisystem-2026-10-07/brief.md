---
title: NutriSystem product brief
status: final
created: 2026-10-07
updated: 2026-10-07
edition: stakeholder-review
stakeholder_approval: pending
implementation_readiness: pending
sources:
  - ../../../../docs/discussion-input-2026-10-07.md
  - ../../../../docs/sources/earlier-product-chat-2026-10-07.md
---

# Product brief: NutriSystem

This stakeholder-review edition completes the product brief. Human acceptance and implementation readiness remain pending. Review it alongside the [PRD](../../prds/prd-nutrisystem-2026-10-07/prd.md), [visual design](../../ux-designs/ux-nutrisystem-2026-10-07/DESIGN.md), [experience specification](../../ux-designs/ux-nutrisystem-2026-10-07/EXPERIENCE.md), and [interactive mockups](../../ux-designs/ux-nutrisystem-2026-10-07/mockups/index.html).

## Purpose and vision

NutriSystem is a mobile-friendly web directory for finding local healthy meal services and caterers. The one-city pilot covers healthy tiffin/subscription meals, home kitchens, and event caterers. Customers browse publicly, compare providers serving their chosen location, and sign in to access contact details. Providers manage their companies and menus. SuperAdmin reviews publishing and oversees content and discovery.

The shared product purpose is to make local food-service discovery useful enough for customers to take the next step with a provider. The brief, PRD, and stakeholder UX presentation must express this same purpose. The pilot geography is Hyderabad, India, with English-, Telugu-, and Hindi-speaking audiences. The owner selected built-in browser/platform translation for the pilot rather than application-managed translations. Translation availability follows the Customer's browser/settings; it is not a guarantee of three app-authored language versions. The launch is a directory: booking and payment are outside the agreed scope.

## Customer needs and problem to validate

The owner supplied two customer contexts: someone seeking a specific healthy diet for an older person, and a bachelor living in a single room seeking healthy home-cooked breakfast, lunch, and dinner. Both use the same directory journey: search, filter, inspect menu details/photos, then contact the provider. The starting product uses basic text search and filters over published information; specialized dietary matching is deferred.

[ASSUMPTION A-1] Customers currently piece together provider information from social pages, recommendations, and scattered listings. They need to know who serves their area and compare offerings before contacting a provider. This is a customer-problem hypothesis, not completed customer research.

[ASSUMPTION A-2] Small providers need a manageable directory presence that makes their menu, packages, service coverage, and contact route easier to find. SuperAdmin needs a way to grow coverage without losing source evidence or confusing sourced listings with provider-owned ones.

## Proposed value

Customer value comes from location-relevant results, basic text search and filters, structured menu and package information, photographs, understandable review signals, and contact access. Customers inspect what Providers publish and decide whether to contact them. Provider value comes from onboarding and managing company information. SuperAdmin can assess publishing, moderate customer contributions, and vet discovery candidates before invitations.

The intended distinction is the combination of food-service-specific information and service coverage with supervised listing discovery. This is a positioning hypothesis. No exclusive advantage, market leadership, health certification, or proven traction is claimed.

## Who it serves

- Customers seeking meals for an older person's specific diet, and people living alone seeking home-cooked breakfast, lunch, and dinner. Event-catering Customers remain in the recorded pilot scope.
- Providers offering healthy tiffin/subscription meals, home kitchens, or event catering.
- SuperAdmin maintaining directory quality, reviewing publishing, and operating discovery.

SuperAdmin is the only administrative role for the pilot. A separate limited Admin role is deferred. The three launch personas are Customer, Provider/caterer, and SuperAdmin.

## Pilot scope

Confirmed capabilities include public browsing, explicit location permission with manual fallback, search and filters, Google/email login, contact access after login, provider-managed companies, structured menus/packages, picture/video uploads, supplementary PDF/image menus, one editable star review per signed-in customer per provider, optional review text, reporting, and SuperAdmin moderation. Self-review is prohibited. Removal and appeal requests reach SuperAdmin via the app or email with a Review ID.

Initial publishing and subsequent Listing edits require SuperAdmin approval; subsequent Menu edits do not. SuperAdmin may publish sourced, unclaimed listings and handles ownership verification before Provider editing access. A separate discovery service retains evidence, deduplicates candidates, runs daily at a configurable local time/timezone, and supports SuperAdmin vetting before invitations. Directory and discovery are desired at launch if feasible; unsupported discovery or invitation automation needs an explicit scope decision.

Booking, payments, phone login, and rotating daily-menu scheduling are deferred. Extension to other food-service categories is a future direction, not a pilot commitment.

## Experience and communication

The recorded direction is warm everyday wellness, cream and forest green, food photography, and accessible horizontal provider cards. Cards include provider name, aggregate stars/review count, address, and contact access. Detailed visual choices and sample brand copy are proposals in the linked UX edition, ready for stakeholder review.

The earlier discussion explicitly requested that purpose, theme, and story be reflected throughout the app, and that menu details/photos help Customers understand offerings. The stakeholder presentation should show how the original idea developed into the proposed product, and help reviewers visualize customer, provider, and SuperAdmin experiences. It must not present review status as proof of food safety or customer outcomes, or introduce booking/payment promises. GTM is deferred by the owner on 2026-10-07.

## Success and decision status

Success should connect relevant discovery to provider contact and sustainable listing quality. [PROPOSAL P-1] Measure contact-action rate after relevant browsing, area/category coverage, provider onboarding completion, review/report quality, and discovery-candidate conversion. Baselines, measurement period and release thresholds are undecided; these are proposed measures rather than agreed targets. The owner will assess budget after architecture finalizes the stack and cloud provider; no budget amount or technology/provider selection is recorded now.

Hyderabad, India and English/Telugu/Hindi audience intent are confirmed. Browser/platform translation is the selected pilot approach. English is the proposed source language for this review edition and its mockups, selected under the owner's instruction to complete the package without further questions. Provider content remains as entered; page translation does not translate search queries or create synchronized content copies. Budget, volume, release thresholds, coverage implementation, moderation policy, and source/channel feasibility belong in the PRD decision register. Technology, hosting, and suggested tagline remain proposals in the addendum.

## Next milestone

Review the completed PRD, UX specifications, and mockups with stakeholders. The latest owner instruction supersedes further coaching questions: representative interactions and sample fields are proposed for review, while architecture and release decisions remain assigned for later work. No research interview is required to produce this edition. After stakeholder feedback is incorporated, proceed to technical design and implementation planning.
