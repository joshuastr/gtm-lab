const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

export function initTools(tools) {
    const el = document.getElementById('toolsContainer');
    if (!el) return;
    const cats = [...new Set(tools.map((t) => t.category).filter(Boolean))];
    el.innerHTML = `
        <div class="section-controls">
            <p class="section-intro">The modern GTM stack by category: what each tool does, what it is best for, and what to watch out for. This is a map, not a ranking. The right pick depends on your motion, team, and budget.</p>
            <div class="kb-filters">
                <button class="filter-chip active" data-cat="">All</button>
                ${cats.map((c) => `<button class="filter-chip" data-cat="${esc(c)}">${esc(c)}</button>`).join('')}
            </div>
        </div>
        <div id="toolsList"></div>`;

    const list = el.querySelector('#toolsList');
    let cat = '';

    function render() {
        const groups = cats
            .filter((c) => !cat || c === cat)
            .map((c) => ({ c, items: tools.filter((t) => t.category === c) }))
            .filter((g) => g.items.length);

        list.innerHTML = groups.map((g) => `
            <section class="data-group">
                <h3 class="data-group-title">${esc(g.c)}</h3>
                <div class="table-wrap">
                    <table class="data-table tools-table">
                        <thead><tr><th>Tool</th><th>What it does</th><th>Best for</th><th>Watch out</th></tr></thead>
                        <tbody>
                            ${g.items.map((t) => `
                                <tr>
                                    <td><span class="tool-name">${esc(t.name)}</span></td>
                                    <td>${esc(t.what)}</td>
                                    <td>${esc(t.best)}</td>
                                    <td class="cell-watch">${esc(t.watch)}</td>
                                </tr>`).join('')}
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
