from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED

root = Path.cwd()
ux_relative = '_bmad-output/planning-artifacts/ux-designs/ux-nutrisystem-2026-10-07'
# The handoff is maintained in the repository; package rebuilds preserve later feedback.
destination = root / '_bmad-output/stakeholder-review/nutrisystem-review-2026-10-07.zip'
destination.parent.mkdir(parents=True, exist_ok=True)
files = [f for f in (root / '_bmad-output/planning-artifacts').rglob('*') if f.is_file() and not any(p in {'.working', 'imports'} for p in f.parts) and f.name != '.memlog.md']
files += list((root / 'docs').rglob('*.md'))
start = f'''# NutriSystem stakeholder review package

Extract this archive first. Open `{ux_relative}/mockups/index.html` in your browser for the offline gallery. Keep all extracted folders together so the links and food image work.

Submit feedback as file/line comments in the stakeholder review PR at https://github.com/manojirukulla/nutrisystem/pulls. This ZIP is an optional visual preview, not the feedback record. Read `{ux_relative}/REVIEW.md` for commenting steps, review sequence and limitations. The canonical PRD is `_bmad-output/planning-artifacts/prds/prd-nutrisystem-2026-10-07/prd.md`.

Completed stakeholder-review editions; approval and implementation readiness remain pending. All sample content is illustrative. Mock actions do not run services. GTM is deferred.
'''
with ZipFile(destination, 'w', ZIP_DEFLATED) as archive:
    archive.writestr('START-HERE.md', start)
    for f in sorted(set(files)):
        archive.write(f, f.relative_to(root).as_posix())
with ZipFile(destination) as archive:
    assert archive.testzip() is None
    assert f'{ux_relative}/mockups/index.html' in archive.namelist()
    assert f'{ux_relative}/mockups/assets/meal-demo.png' in archive.namelist()
print(f'Created and verified {destination.name}: {len(files)+1} entries, {destination.stat().st_size:,} bytes')

