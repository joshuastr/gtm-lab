const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

export function initPlays(plays) {
    const el = document.getElementById('playsContainer');
    if (!el) return;
    const areas = [...new Set(plays.map((p) => p.area).filter(Boolean))];
    el.innerHTML = `
        <div class="section-controls">
            <p class="section-intro">Practical best-practice guides distilled from the research: when to use each play, the steps, and the source.</p>
            <div class="kb-filters">
                <button class="filter-chip active" data-area="">All</button>
                ${areas.map((a) => `<button class="filter-chip" data-area="${esc(a)}">${esc(a)}</button>`).join('')}
            </div>
        </div>
        <div id="playsList" class="plays-list"></div>`;

    const list = el.querySelector('#playsList');
    let area = '';

    function render() {
        const items = plays.filter((p) => !area || p.area === area);
        list.innerHTML = items.map((p) => `
            <article class="play">
                <div class="play-area">${esc(p.area)}</div>
                <h3 class="play-title">${esc(p.title)}</h3>
                ${p.when ? `<p class="play-when"><span class="play-label">When</span> ${esc(p.when)}</p>` : ''}
                <ol class="play-steps">${p.steps.map((s) => `<li>${esc(s.text)}${s.detail ? `<div class="step-detail">${esc(s.detail)}</div>` : ''}</li>`).join('')}</ol>
                ${p.source ? `<p class="play-source">Source: ${esc(p.source)}</p>` : ''}
            </article>`).join('');
    }

    el.querySelectorAll('.filter-chip').forEach((c) => c.addEventListener('click', () => {
        el.querySelectorAll('.filter-chip').forEach((x) => x.classList.remove('active'));
        c.classList.add('active');
        area = c.dataset.area;
        render();
    }));
    render();
}
