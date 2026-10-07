const fs = require('fs');
const path = require('path');
const builder = path.join(__dirname,'build-mockups.cjs');
let lines = fs.readFileSync(builder,'utf8').split('\n');
function patch(prefix, changes) {
  const index = lines.findIndex(line => line.startsWith(prefix));
  if(index < 0) throw new Error('Missing generator section: '+prefix);
  for(const [before,after] of changes) {
    if(!lines[index].includes(before)) throw new Error('Missing patch text: '+before);
    lines[index]=lines[index].replace(before,after);
  }
}
const mediaPreview = '<section class="panel" id="media"><h2>Pictures & videos</h2><p>Provider-uploaded media helps you understand the food and service.</p><div class="file-preview" style="margin-top:16px"><strong>Video preview area</strong><p class="small">A published video appears here with explicit play/pause controls. No clip is supplied in this demo.</p><span class="btn secondary" aria-disabled="true">Play video · No demo clip</span></div><p class="caption">Video does not auto-play. Text descriptions remain available.</p></section>';
const requestPreview = '<p class="small">Illustrative review · Review ID: <strong>RV-DEMO-104</strong> · <a href="#report-preview">Report or request review action · Preview</a></p>';
const requestFields = '<summary>Review request · Customer preview</summary><div class="field" style="margin-top:16px"><label for="request-review-id">Review ID</label><input id="request-review-id" value="RV-DEMO-104" readonly></div><div class="field"><label for="review-request-type">Request type</label><select id="review-request-type"><option>Removal request</option><option>Appeal</option><option>Report inappropriate content</option></select></div><div class="field"><label for="report-reason">Reason or context</label><textarea id="report-reason" placeholder="Explain your request to SuperAdmin"></textarea></div><a class="btn" href="#report-sent">Send app request · Preview</a><div class="state" id="report-sent"><span class="badge amber">Awaiting SuperAdmin decision · Demo</span><h3>Request receipt preview</h3><p>Review ID RV-DEMO-104 is attached to the request. Removal or appeal needs a SuperAdmin decision.</p></div><div class="state"><h3>Prefer email?</h3><p>Send your removal or appeal request to SuperAdmin with Review ID <strong>RV-DEMO-104</strong>. The app will display the configured email address; none is configured in this preview.</p></div>';
patch("write('provider.html'",[
 ['<section class="panel" id="reviews">',mediaPreview+'<section class="panel" id="reviews">'],
 ['<p class="small">Illustrative review · <a href="#report-preview">Report review · Preview</a></p>',requestPreview],
 ['<summary>Report this review · Customer preview</summary><div class="field" style="margin-top:16px"><label for="report-reason">Reason</label><select id="report-reason"><option>Inappropriate content</option><option>Other concern</option></select></div><a class="btn" href="#report-sent">Submit report · Preview</a><div class="state" id="report-sent"><h3>Report received · Illustrative state</h3><p>SuperAdmin can assess this report. Reporting alone does not remove the review.</p></div>',requestFields]
]);
const editPolicies = '<section class="section" id="edit-policy"><p class="eyebrow">Existing published listing</p><h2>Two clear update paths.</h2><div class="twocol equal section"><section class="panel"><span class="badge">Menu edit</span><h3 style="margin-top:12px">Update your menu directly.</h3><p>Menu edits do not need SuperAdmin approval after the listing is published.</p><div class="actions"><a class="btn" href="#menu-live">Save menu changes · Preview</a></div><div class="state" id="menu-live"><h3>Menu changes saved · Demo</h3><p>No approval queue is needed for this menu edit. No actual save occurs in this preview.</p></div></section><section class="panel"><span class="badge amber">Listing edit</span><h3 style="margin-top:12px">Submit listing changes for approval.</h3><p>Changes to listing information need SuperAdmin approval.</p><div class="actions"><a class="btn" href="#listing-edit-pending">Submit listing changes · Preview</a></div><div class="state" id="listing-edit-pending"><h3>Listing changes awaiting approval · Demo</h3><p>Proposed state: approved public details remain visible until the revision is accepted.</p></div></section></div><p class="small">Exact treatment of mixed listing/menu/media/package changes will be defined during data and workflow design.</p></section>';
patch("write('onboarding.html'",[
 ['Create your company listing with clear service areas, menus and photos.','Create your company listing with clear service areas, menus, pictures and videos.'],
 ['<li class="current">3. Menu & photos</li>','<li class="current">3. Menu & media</li>'],
 ['<h2>Menu & photos</h2>','<h2>Menu & media</h2>'],
 ['<label for="photo">Food photos</label><input id="photo" type="file" accept="image/*"><small>Proposed upload field. Size/type limits will follow release policy.</small>','<label for="photo">Food pictures & videos</label><input id="photo" type="file" accept="image/*,video/*" multiple><small>Pictures and videos are supported. File formats, size/duration limits and processing behavior will be set during technical design. This preview performs no upload.</small>'],
 ['View publishing review mock</a></div></section>','View publishing review mock</a></div></section>'+editPolicies]
]);
patch("write('review.html'",[
 ['You can leave one review for this provider and update it later.','You can leave one review for this provider and update it later. You cannot review your own business.'],
 ['<h3>Your review is saved.</h3>','<h3>Your review is saved · Demo.</h3><p class="small">Review ID: <strong>RV-DEMO-104</strong></p>'],
 ['<p class="small">Illustrative save state; moderation visibility and aggregate rules remain proposed.</p>','<div class="state"><a href="provider.html#report-preview">Request removal or appeal through the app</a><p>Include Review ID RV-DEMO-104 in an email request to SuperAdmin.</p></div><section class="state error"><span class="badge red">Own-business account · Alternate state</span><h3>You cannot review your own business.</h3><p>The review form is unavailable for a company you own or manage. This block is shown as an alternate state for comparison.</p><span class="btn" aria-disabled="true">Review unavailable</span></section><p class="small">Illustrative states; detailed rating aggregates remain proposed.</p>']
]);
patch("admin('admin-moderation.html'",[
 ['<h2>Reported review</h2>','<h2>Review action request</h2><p class="small">Review ID: <strong>RV-DEMO-104</strong> · Request route: In app · Type: Removal request (illustrative)</p>'],
 ['<dt>Report status</dt>','<dt>Request status</dt>'],
 ['Audit/original preservation and appeals are proposed policy choices, not completed stakeholder approval.','SuperAdmin decides removal and appeals requested via app or email with the review ID. Self-review is prohibited. Detailed audit, response and aggregate handling remain design decisions.']
]);
patch("admin('admin-listings.html'",[
 ['<h2>Listings awaiting review</h2>','<h2>Listings awaiting review</h2><p class="small">Initial listings and listing edits need SuperAdmin approval. Published menu edits bypass this queue.</p>']
]);
patch("write('claim.html'",[
 ['Accepted evidence and appeal policy remain proposals for stakeholder/operations review.','SuperAdmin assesses ownership and decides the claim. Exact evidence procedures will be set by SuperAdmin.']
]);
patch("write('index.html'",[
 ['Exact fields, search/filter labels, publication/edit policies, ownership evidence, moderation rules and visual tokens are proposals. Budget, operating targets and integration feasibility remain for later decisions.','Menu edits need no approval after publication; listing edits need SuperAdmin approval. SuperAdmin handles ownership and review removal/appeal requests with a review ID. Self-review is prohibited. Pictures and videos are supported. Exact fields, media limits and visual details remain proposals. Budget will be assessed after architecture settles the stack and cloud provider.']
]);
fs.writeFileSync(builder,lines.join('\n'));
console.log('Updated policy and media examples in the mockup generator.');
