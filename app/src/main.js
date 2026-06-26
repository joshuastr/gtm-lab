import { initStart } from './starthere.js';
import { initAdvisor } from './advisor.js';
import { initKnowledge } from './knowledge.js';
import { initBenchmarks } from './benchmarks.js';
import { initTools } from './tools.js';
import { initPlays } from './plays.js';
import { initResources } from './resources.js';

const BASE = import.meta.env.BASE_URL;
const loadJSON = (name) => fetch(`${BASE}data/${name}`).then((r) => r.json());

const tabContexts = {
    start: { title: 'Start Here', desc: 'The go-to-market motion from zero, in order. Each step: what it is, why it matters, and your first move.' },
    advisor: { title: 'GTM Advisor', desc: 'Answer a couple of questions and get a recommendation for your go-to-market motion and first channels, with its source.' },
    plays: { title: 'GTM Plays', desc: 'Practical best-practice guides distilled from the research: when to use each play, the steps, and the source.' },
    knowledge: { title: 'GTM Glossary', desc: 'The language of modern go-to-market. Search the full glossary; each term has a plain definition and a source.' },
    benchmarks: { title: 'GTM Benchmarks', desc: 'Useful GTM benchmarks with their source and the context that matters. Filter by topic.' },
    tools: { title: 'GTM Tools', desc: 'The modern go-to-market stack by category: what each tool does, what it is best for, and what to watch out for.' },
    resources: { title: 'Learning Resources', desc: 'A curated starting library: the people, publications, and primary sources to learn GTM and GTM engineering.' },
};

function initTabs() {
    const tabs = document.querySelectorAll('.tool-tab');
    const panels = document.querySelectorAll('.tab-panel');
    const title = document.getElementById('contextTitle');
    const desc = document.getElementById('contextDesc');
    // a11y: wire the tablist / tab / tabpanel relationships
    document.querySelector('.tool-tabs')?.setAttribute('aria-label', 'Sections');
    tabs.forEach((tab) => {
        const t = tab.dataset.tab;
        tab.id = `tab-${t}`;
        tab.setAttribute('aria-controls', `${t}Panel`);
        const panel = document.getElementById(`${t}Panel`);
        if (panel) { panel.setAttribute('aria-labelledby', `tab-${t}`); panel.setAttribute('tabindex', '0'); }
    });
    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            const target = tab.dataset.tab;
            tabs.forEach((t) => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
            tab.classList.add('active');
            tab.setAttribute('aria-selected', 'true');
            panels.forEach((p) => p.classList.remove('active'));
            document.getElementById(target + 'Panel')?.classList.add('active');
            const ctx = tabContexts[target];
            if (ctx) { title.textContent = ctx.title; desc.textContent = ctx.desc; }
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    initTabs();
    try {
        const [start, advisor, glossary, benchmarks, tools, plays, resources] = await Promise.all([
            loadJSON('start.json'),
            loadJSON('advisor.json'),
            loadJSON('glossary.json'),
            loadJSON('benchmarks.json'),
            loadJSON('tools.json'),
            loadJSON('plays.json'),
            loadJSON('resources.json'),
        ]);
        initStart(start);
        initAdvisor(advisor);
        initKnowledge(glossary);
        initBenchmarks(benchmarks);
        initTools(tools);
        initPlays(plays);
        initResources(resources);
    } catch (err) {
        console.error('Failed to load data. Run `npm run build:data`.', err);
    }
});
