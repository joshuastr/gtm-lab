// build-data.mjs — the dogfood / sync generator.
// Reads the GTM Lab knowledge base markdown (../knowledge-base/*.md) and emits public/data/*.json.
// The KB is the single source of truth; the app renders it, so the two can never drift.
// Run via `npm run build:data` (also runs automatically before dev/build).

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const KB = join(__dirname, '..', '..', 'knowledge-base');
const OUT = join(__dirname, '..', 'public', 'data');
mkdirSync(OUT, { recursive: true });

const read = (f) => readFileSync(join(KB, f), 'utf8');
const write = (f, obj) => writeFileSync(join(OUT, f), JSON.stringify(obj, null, 2) + '\n');

// ---- glossary.md → glossary.json -------------------------------------------------
// Format: `## Category` headers; entries `- **Term** — definition *(source)*` (⚠ = contested).
function parseGlossary(md) {
    const out = [];
    let category = '';
    // merge wrapped continuation lines (indented, non-blank) into their bullet
    const merged = [];
    for (const raw of md.split('\n')) {
        if (/^\s+\S/.test(raw) && merged.length && merged[merged.length - 1].startsWith('- ')) {
            merged[merged.length - 1] += ' ' + raw.trim();
        } else {
            merged.push(raw);
        }
    }
    for (const line of merged) {
        const cat = line.match(/^##\s+(.+)/);
        if (cat) { category = cat[1].trim(); continue; }
        if (!line.startsWith('- **')) continue;
        const term = (line.match(/\*\*(.+?)\*\*/) || [])[1];
        if (!term) continue;
        let rest = line.replace(/^- \*\*.+?\*\*\s*[:—-]\s*/, '');
        const caveated = /⚠/.test(line);
        const source = (rest.match(/\*\(([^)]+)\)\*\s*$/) || [])[1] || '';
        const definition = rest.replace(/\s*\*\([^)]+\)\*\s*$/, '').replace(/⚠/g, '').replace(/\*\*/g, '').trim();
        out.push({ term, category, definition, source, caveated });
    }
    return out;
}

// ---- benchmarks.md → benchmarks.json ---------------------------------------------
// Format: `## Topic-group`; `### Metric`; then `- key: value` lines.
function parseBenchmarks(md) {
    const out = [];
    let cur = null;
    const push = () => { if (cur && cur.metric) out.push(cur); };
    for (const raw of md.split('\n')) {
        const line = raw.trim();
        const h3 = line.match(/^###\s+(.+)/);
        if (h3) { push(); cur = { metric: h3[1].trim(), value: '', topic: '', status: 'descriptive', source: '', url: '', caveat: '' }; continue; }
        if (!cur) continue;
        const kv = line.match(/^-\s+(value|topic|status|source|url|caveat):\s*(.*)$/);
        if (kv) cur[kv[1]] = kv[2].trim();
    }
    push();
    return out;
}

// ---- advisor.md → advisor.json ---------------------------------------------------
// Format: `## Band: name  (ACV ...)`; then `- key: value` (key ∈ motion/channels/avoid/why/source/caveat/refine).
// `channels` and `refine` may repeat or be comma-lists → arrays.
function parseAdvisor(md) {
    const out = { archetype: { question: '', options: [] }, acvQuestion: '', bands: [], cross: [] };
    let cur = null;
    let mode = '';
    const push = () => { if (cur) out.bands.push(cur); cur = null; };
    for (const raw of md.split('\n')) {
        const line = raw.trim();
        const arche = line.match(/^##\s+Archetype:\s*(.+)/i);
        if (arche) { push(); mode = 'archetype'; out.archetype.question = arche[1].trim(); continue; }
        const acvq = line.match(/^##\s+ACV question:\s*(.+)/i);
        if (acvq) { push(); mode = 'acv'; out.acvQuestion = acvq[1].trim(); continue; }
        if (/^##\s+Cross-band/i.test(line)) { push(); mode = 'cross'; continue; }
        const band = line.match(/^##\s+Band:\s*(.+)/i);
        if (band) {
            push();
            const [track, label, acv] = band[1].split('|').map((s) => s.trim());
            cur = { track: track || '', label: label || '', acv: acv || '', motion: '', channels: [], avoid: '', why: '', source: '', caveats: [], refine: [], see: '' };
            mode = 'band';
            continue;
        }
        if (line.startsWith('## ')) { push(); mode = ''; continue; }
        if (mode === 'archetype') {
            const o = line.match(/^-\s+option:\s*(.+)/i);
            if (o) { const p = o[1].split('|').map((s) => s.trim()); out.archetype.options.push({ label: p[0] || '', track: p[1] || '', sub: p[2] || '' }); }
            continue;
        }
        if (mode === 'cross') {
            const c = line.match(/^-\s+(.+)/);
            if (c) out.cross.push(c[1].trim());
            continue;
        }
        if (mode === 'band' && cur) {
            const kv = line.match(/^-\s+(motion|channels|avoid|why|source|caveat|refine|see):\s*(.*)$/);
            if (!kv) continue;
            const [, key, val] = kv;
            if (key === 'channels') cur.channels = val.split(',').map((s) => s.trim()).filter(Boolean);
            else if (key === 'caveat') cur.caveats.push(val.trim());
            else if (key === 'refine') cur.refine.push(val.trim());
            else cur[key] = val.trim();
        }
    }
    push();
    return out;
}

// ---- tools.md → tools.json -------------------------------------------------------
// Format: `## Category`; `### Tool`; then `- what/best/watch:` lines.
function parseTools(md) {
    const out = [];
    let category = '';
    let cur = null;
    const push = () => { if (cur && cur.name) out.push(cur); };
    for (const raw of md.split('\n')) {
        const line = raw.trim();
        const cat = line.match(/^##\s+(.+)/);
        if (cat) { category = cat[1].trim(); continue; }
        const h3 = line.match(/^###\s+(.+)/);
        if (h3) { push(); cur = { name: h3[1].trim(), category, what: '', best: '', watch: '' }; continue; }
        if (!cur) continue;
        const kv = line.match(/^-\s+(what|best|watch):\s*(.*)$/);
        if (kv) cur[kv[1]] = kv[2].trim();
    }
    push();
    return out;
}

// ---- plays.md → plays.json -------------------------------------------------------
// Format: `## Area`; `### Play`; then `- when:`, repeated `- step:`, `- source:`.
function parsePlays(md) {
    const out = [];
    let area = '';
    let cur = null;
    const push = () => { if (cur && cur.title) out.push(cur); };
    for (const raw of md.split('\n')) {
        const line = raw.trim();
        const a = line.match(/^##\s+(.+)/);
        if (a) { area = a[1].trim(); continue; }
        const h3 = line.match(/^###\s+(.+)/);
        if (h3) { push(); cur = { title: h3[1].trim(), area, when: '', steps: [], source: '' }; continue; }
        if (!cur) continue;
        const kv = line.match(/^-\s+(when|step|detail|source):\s*(.*)$/);
        if (!kv) continue;
        if (kv[1] === 'step') cur.steps.push({ text: kv[2].trim(), detail: '' });
        else if (kv[1] === 'detail') { if (cur.steps.length) cur.steps[cur.steps.length - 1].detail = kv[2].trim(); }
        else cur[kv[1]] = kv[2].trim();
    }
    push();
    return out;
}

// ---- starthere.md → start.json ---------------------------------------------------
// Format: `## N. Title`; then `- what/why/action/see:` lines.
function parseStartHere(md) {
    const out = [];
    let cur = null;
    const push = () => { if (cur && cur.title) out.push(cur); };
    for (const raw of md.split('\n')) {
        const line = raw.trim();
        const h = line.match(/^##\s+(.+)/);
        if (h) { push(); cur = { title: h[1].replace(/^\d+\.\s*/, '').trim(), what: '', why: '', action: '', see: '' }; continue; }
        if (!cur) continue;
        const kv = line.match(/^-\s+(what|why|action|see):\s*(.*)$/);
        if (kv) cur[kv[1]] = kv[2].trim();
    }
    push();
    return out;
}

// ---- resources.md → resources.json -----------------------------------------------
// Format: `## Category`; `### Name`; then `- what:` and `- url:` lines.
function parseResources(md) {
    const out = [];
    let category = '';
    let cur = null;
    const push = () => { if (cur && cur.name) out.push(cur); };
    for (const raw of md.split('\n')) {
        const line = raw.trim();
        const cat = line.match(/^##\s+(.+)/);
        if (cat) { category = cat[1].trim(); continue; }
        const h3 = line.match(/^###\s+(.+)/);
        if (h3) { push(); cur = { name: h3[1].trim(), category, what: '', url: '' }; continue; }
        if (!cur) continue;
        const kv = line.match(/^-\s+(what|url):\s*(.*)$/);
        if (kv) cur[kv[1]] = kv[2].trim();
    }
    push();
    return out;
}

const start = parseStartHere(read('starthere.md'));
const glossary = parseGlossary(read('glossary.md'));
const benchmarks = parseBenchmarks(read('benchmarks.md'));
const advisor = parseAdvisor(read('advisor.md'));
const tools = parseTools(read('tools.md'));
const plays = parsePlays(read('plays.md'));
const resources = parseResources(read('resources.md'));

write('start.json', start);
write('glossary.json', glossary);
write('benchmarks.json', benchmarks);
write('advisor.json', advisor);
write('tools.json', tools);
write('plays.json', plays);
write('resources.json', resources);

console.log(`build-data: ${start.length} steps, ${glossary.length} terms, ${benchmarks.length} benchmarks, ${advisor.bands.length} advisor bands, ${tools.length} tools, ${plays.length} plays, ${resources.length} resources → public/data/`);
