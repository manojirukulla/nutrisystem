# NutriSystem historical discussion input

Historical snapshot of the original setup handoff. Later owner decisions supersede its geography/language questions and UX/GTM sequence. Use canonical BMAD artifacts and the current HANDOFF.md for active status.

Updated: 2026-10-07. Stage: BMAD setup complete; product definition not started.

## Completed

- Initialized Git on `main` in the previously empty project directory.
- Installed and verified BMAD Core and BMM 6.12.1 with 29 repo-local Codex skills.
- Prepared repo-local uv and a process-only PowerShell environment launcher.
- Added setup instructions and agent working agreement.

No brief, PRD, detailed UX, architecture, application code, remote, or commit exists yet.

## Next action

Run `bmad-product-brief` in a fresh project chat, using the discussion input below. Then run `bmad-prd` to formalize and validate requirements. This session's agreed scope is setup plus product definition; detailed UX and architecture are later discussions. Do not treat this handoff as an approved PRD.

## Recorded user decisions and requirements

These summarize the human discussion, including explicit answers given through question tools. Reconcile them through BMAD rather than asking every question again.

- A mobile-friendly web directory for healthy meal services and caterers, extensible to other food service categories.
- One-city pilot; healthy tiffin/subscription meals, home kitchens, and event caterers.
- Directory launch scope excludes booking and payments.
- Three personas: customer, caterer/provider, and SuperAdmin. Clarify whether an additional limited Admin role is needed.
- Customers browse publicly; contact details require login. Google/email login for the free pilot; phone login deferred with an extension path.
- Default results show providers serving the chosen location. Request device location permission explicitly, with manual selection as fallback.
- Filters/search include provider name, state, city, area, menu items, packages, and relevant dietary, cuisine, and service attributes.
- Accessible, stylish horizontal cards with provider name, aggregate stars/review count, address, and contact access.
- Structured menu items/packages and photos, with supplementary PDF/image menus. Daily rotating menu scheduling is deferred.
- Signed-in customers can give one editable 1–5 star review per provider, optional text, and report inappropriate content. Show 'No reviews yet' when applicable.
- Providers onboard and manage their companies. Initial publishing requires admin review. Preserve a future path to evidence-based automated verification.
- SuperAdmin manages listings, reviews, comments, feedback, and discovery candidates.
- Admin may publish sourced, unclaimed listings; verify ownership before granting provider editing access.
- A separate discovery service finds missing providers via Instagram, Facebook, and YouTube. Keep source evidence and deduplicate against the directory.
- SuperAdmin vets/edits candidates before invitations. Discovery runs daily at a configurable time and timezone.
- Directory and discovery are desired at launch if feasible. Invitation channels are configurable; actual sends depend on channel eligibility and supported APIs.
- SEO matters at launch. Capture useful product insights, errors, searches, listing engagement, contact actions, onboarding, and discovery conversion.
- Warm everyday wellness direction: cream/forest green and food photography. Detailed visual design remains to be developed.
- Low-cost launch and AI-assisted development are priorities. Keep durable repo documentation that later agents can use across chats.
- Use BMAD for development stages, and subagents for independent parallel work.

## Proposals to evaluate, not finalized decisions

- Next.js/TypeScript, Supabase Postgres/Auth/Storage, Postgres search and geographic support, with a separate scheduled discovery worker.
- Netlify as a possible free pilot host. Vercel Hobby commercial-use limitations and Supabase limits require an architecture/cost decision; an end-to-end zero-cost launch is not guaranteed.
- Suggested tagline: 'Healthy food that fits your day'.
- Separate approvals for publishing a sourced listing and sending an invitation.
- Audit records and preservation of original review content when administrators modify it.

## Open questions

- Pilot city, country, and launch language(s).
- Actual existing domain/GoDaddy hosting or AWS accounts.
- Budget, expected listing/customer volume, and release success thresholds.
- Exact service attributes, menu fields, location coverage rules, and moderation policies.
- Feasible discovery sources and invitation channels, and what launch behavior is acceptable where automation is unavailable.

Once canonical BMAD artifacts exist, link them here and remove duplicated active requirements. Preserve this discussion summary as historical input when appropriate.
