const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

export function initKnowledge(terms) {
    const el = document.getElementById('knowledgeContainer');
    if (!el) return;
    const categories = [...new Set(terms.map((t) => t.category).filter(Boolean))];
    el.innerHTML = `
        <div class="section-controls">
            <input id="kbSearch" class="kb-search" type="search" placeholder="Search ${terms.length} terms…" aria-label="Search glossary" />
            <div class="kb-filters">
                <button class="filter-chip active" data-cat="">All</button>
                ${categories.map((c) => `<button class="filter-chip" data-cat="${esc(c)}">${esc(c)}</button>`).join('')}
            </div>
        </div>
        <div id="kbList"></div>`;

    const list = el.querySelector('#kbList');
    let q = '';
    let cat = '';

    function render() {
        const ql = q.toLowerCase();
        const groups = categories
            .filter((c) => !cat || c === cat)
            .map((c) => ({
                c,
                items: terms.filter((t) => t.category === c &&
                    (!ql || t.term.toLowerCase().includes(ql) || t.definition.toLowerCase().includes(ql))),
            }))
            .filter((g) => g.items.length);

        list.innerHTML = groups.length
            ? groups.map((g) => `
                <section class="data-group">
                    <h3 class="data-group-title">${esc(g.c)}</h3>
                    <div class="table-wrap">
                        <table class="data-table kb-table">
                            <tbody>
                                ${g.items.map((t) => `
                                    <tr>
                                        <td class="cell-term">${esc(t.term)}${t.caveated ? ' <span class="kb-flag">contested</span>' : ''}</td>
                                        <td>${esc(t.definition)}${t.source ? ` <span class="kb-src">${esc(t.source)}</span>` : ''}</td>
                                    </tr>`).join('')}
                            </tbody>
                        </table>
                    </div>
                </section>`).join('')
            : '<p class="empty">No terms match your search.</p>';
    }

    el.querySelector('#kbSearch').addEventListener('input', (e) => { q = e.target.value; render(); });
    el.querySelectorAll('.filter-chip').forEach((c) => c.addEventListener('click', () => {
        el.querySelectorAll('.filter-chip').forEach((x) => x.classList.remove('active'));
        c.classList.add('active');
        cat = c.dataset.cat;
        render();
    }));
    render();
}
