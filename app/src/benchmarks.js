const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

export function initBenchmarks(rows) {
    const el = document.getElementById('benchmarksContainer');
    if (!el) return;
    const topics = [...new Set(rows.map((r) => r.topic).filter(Boolean))];
    el.innerHTML = `
        <div class="section-controls">
            <p class="section-intro">Useful GTM benchmarks with their source and the context that matters. Read the caveat, not just the number.</p>
            <div class="kb-filters">
                <button class="filter-chip active" data-topic="">All</button>
                ${topics.map((t) => `<button class="filter-chip" data-topic="${esc(t)}">${esc(t)}</button>`).join('')}
            </div>
        </div>
        <div id="benchList"></div>`;

    const list = el.querySelector('#benchList');
    let topic = '';

    function render() {
        const groups = topics
            .filter((t) => !topic || t === topic)
            .map((t) => ({ t, items: rows.filter((r) => r.topic === t) }))
            .filter((g) => g.items.length);

        list.innerHTML = groups.map((g) => `
            <section class="data-group">
                <h3 class="data-group-title">${esc(g.t)}</h3>
                <div class="table-wrap">
                    <table class="data-table bench-table">
                        <thead><tr><th>Metric</th><th>Value</th><th>Source</th></tr></thead>
                        <tbody>
                            ${g.items.map((r) => {
                                const src = r.url
                                    ? `<a href="${esc(r.url)}" target="_blank" rel="noopener noreferrer">${esc(r.source)}</a>`
                                    : esc(r.source);
                                return `
                                    <tr>
                                        <td>
                                            <div class="cell-title">${esc(r.metric)}</div>
                                            ${r.caveat ? `<div class="cell-sub">${esc(r.caveat)}</div>` : ''}
                                        </td>
                                        <td class="cell-value">${esc(r.value)}</td>
                                        <td class="cell-src">${src}</td>
                                    </tr>`;
                            }).join('')}
                        </tbody>
                    </table>
                </div>
            </section>`).join('');
    }

    el.querySelectorAll('.filter-chip').forEach((c) => c.addEventListener('click', () => {
        el.querySelectorAll('.filter-chip').forEach((x) => x.classList.remove('active'));
        c.classList.add('active');
        topic = c.dataset.topic;
        render();
    }));
    render();
}
