const fs = require('fs');
const path = require('path');
const base = path.resolve(__dirname, '..');
const mock = path.join(base, 'mockups');
const files = fs.readdirSync(mock).filter(f => f.endsWith('.html'));
const missing = [], badFragments = [], duplicateIds = [];
let links = 0, images = 0;
for (const name of files) {
  const file = path.join(mock, name), html = fs.readFileSync(file, 'utf8');
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
  for(const id of new Set(ids)) if(ids.filter(x=>x===id).length>1) duplicateIds.push({name,id});
  for (const m of html.matchAll(/\b(href|src)="([^"]+)"/g)) {
    const value = m[2]; if (/^(https?:|data:|mailto:)/.test(value)) continue;
    const [relative, fragment] = value.split('#');
    const target = relative ? path.resolve(mock, relative) : file;
    links++; if(m[1]==='src' && /\.(png|jpg)$/.test(relative)) images++;
    if(!fs.existsSync(target)) missing.push({name,value});
    else if(fragment && target.endsWith('.html') && !fs.readFileSync(target,'utf8').includes(`id="${fragment}"`)) badFragments.push({name,value});
  }
  if(!html.includes('lang="en"') || !html.includes('name="viewport"')) missing.push({name,issue:'document metadata'});
}
const prd = fs.readFileSync(path.resolve(base, '../../prds/prd-nutrisystem-2026-10-07/prd.md'),'utf8');
const frIds = [...prd.matchAll(/^#### FR-(\d+):/gm)].map(m=>Number(m[1]));
const ok = !missing.length && !badFragments.length && !duplicateIds.length && frIds.length === 26 && new Set(frIds).size===26;
const result={reviewDate:'2026-10-07',htmlPages:files.length,localReferencesChecked:links,imageReferencesChecked:images,missing,badFragments,duplicateIds,functionalRequirements:frIds.length,passed:ok,limits:'Static artifact checks; no application service or end-to-end implementation tested.'};
fs.mkdirSync(path.join(base,'verification'),{recursive:true});
fs.writeFileSync(path.join(base,'verification/artifact-audit.json'),JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify(result));
if(!ok) process.exitCode=1;
