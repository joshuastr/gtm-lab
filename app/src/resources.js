const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

export function initResources(items) {
    const el = document.getElementById('resourcesContainer');
    if (!el) return;
    const cats = [...new Set(items.map((r) => r.category).filter(Boolean))];
    el.innerHTML = `
        <div class="section-controls">
            <p class="section-intro">A curated starting library for learning GTM and GTM engineering: the people, publications, and primary sources this tool was built from. Start with one or two, not all of them.</p>
            <div class="kb-filters">
                <button class="filter-chip active" data-cat="">All</button>
                ${cats.map((c) => `<button class="filter-chip" data-cat="${esc(c)}">${esc(c)}</button>`).join('')}
            </div>
        </div>
        <div id="resList"></div>`;

    const list = el.querySelector('#resList');
    let cat = '';

    function render() {
        const groups = cats
            .filter((c) => !cat || c === cat)
            .map((c) => ({ c, items: items.filter((r) => r.category === c) }))
            .filter((g) => g.items.length);

        list.innerHTML = groups.map((g) => `
            <section class="data-group">
                <h3 class="data-group-title">${esc(g.c)}</h3>
                <div class="table-wrap">
                    <table class="data-table res-table">
                        <tbody>
                            ${g.items.map((r) => {
                                const name = r.url
                                    ? `<a href="${esc(r.url)}" target="_blank" rel="noopener noreferrer" class="res-name">${esc(r.name)}</a>`
                                    : `<span class="res-name">${esc(r.name)}</span>`;
                                return `<tr><td>${name}</td><td>${esc(r.what)}</td></tr>`;
                            }).join('')}
                        </tbody>
                    </table>
                </div>
            </section>`).join('');
    }

    el.querySelectorAll('.filter-chip').forEach((c) => c.addEventListener('click', () => {
        el.querySelectorAll('.filter-chip').forEach((x) => x.classList.remove('active'));
        c.classList.add('active');
        cat = c.dataset.cat;
        render();
    }));
    render();
}
