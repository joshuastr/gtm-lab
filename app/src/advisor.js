const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

export function initAdvisor(data) {
    const el = document.getElementById('advisorContainer');
    if (!el) return;
    const arche = data.archetype || { question: '', options: [] };
    const options = arche.options || [];
    const bands = data.bands || [];
    const cross = data.cross || [];

    el.innerHTML = `
        <div class="advisor">
            <p class="advisor-q">${esc(arche.question)}</p>
            <div class="advisor-options" id="archeOptions">
                ${options.map((o) => `
                    <button class="opt-btn" data-track="${esc(o.track)}" aria-pressed="false">
                        <span class="opt-acv">${esc(o.label)}</span>
                        <span class="opt-label">${esc(o.sub)}</span>
                    </button>`).join('')}
            </div>
            <div id="advisorStep2"></div>
            <div id="advisorRec" class="rec-empty">Pick what you are taking to market to get a grounded, cited recommendation.</div>
        </div>`;

    const step2 = el.querySelector('#advisorStep2');
    const rec = el.querySelector('#advisorRec');

    const clearRec = () => { rec.className = 'rec-empty'; rec.textContent = 'Pick your band to see a grounded, cited recommendation.'; };

    function renderRec(b) {
        if (!b) return;
        rec.className = 'rec-card';
        rec.innerHTML = `
            <div class="rec-head"><span class="rec-band">${esc(b.label)}</span>${b.acv ? `<span class="rec-acv">${esc(b.acv)}</span>` : ''}</div>
            <div class="rec-row"><span class="rec-key">Motion</span><span class="rec-val">${esc(b.motion)}</span></div>
            <div class="rec-row"><span class="rec-key">Channels</span><span class="chips">${(b.channels || []).map((c) => `<span class="chip">${esc(c)}</span>`).join('')}</span></div>
            ${b.avoid ? `<div class="rec-row"><span class="rec-key">Avoid</span><span class="rec-val">${esc(b.avoid)}</span></div>` : ''}
            <div class="rec-why">${esc(b.why)}</div>
            ${(b.caveats || []).map((c) => `<div class="caveat">⚠ ${esc(c)}</div>`).join('')}
            ${(b.refine || []).map((r) => `<div class="refine">→ ${esc(r)}</div>`).join('')}
            ${b.see ? `<div class="rec-see">See: ${esc(b.see)}</div>` : ''}
            <div class="rec-source">Source: ${esc(b.source)}</div>
            ${cross.length ? `<div class="rec-cross"><div class="rec-cross-title">Fundamentals (any motion)</div>${cross.map((c) => `<div class="rec-cross-item">${esc(c)}</div>`).join('')}</div>` : ''}`;
    }

    function selectInGroup(group, btn) {
        group.querySelectorAll('.opt-btn').forEach((b) => { b.classList.remove('active'); b.setAttribute('aria-pressed', 'false'); });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
    }

    el.querySelectorAll('#archeOptions .opt-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
            selectInGroup(el.querySelector('#archeOptions'), btn);
            const tracked = bands.filter((b) => b.track === btn.dataset.track);
            step2.innerHTML = '';
            if (tracked.length > 1) {
                // Software: ask ACV, then show the band recommendation.
                clearRec();
                step2.innerHTML = `
                    <p class="advisor-q advisor-q-sub">${esc(data.acvQuestion)}</p>
                    <div class="advisor-options" id="bandOptions">
                        ${tracked.map((b) => `
                            <button class="opt-btn" data-label="${esc(b.label)}" aria-pressed="false">
                                <span class="opt-acv">${esc(b.acv)}</span>
                                <span class="opt-label">${esc(b.label)}</span>
                            </button>`).join('')}
                    </div>`;
                const bandGroup = step2.querySelector('#bandOptions');
                bandGroup.querySelectorAll('.opt-btn').forEach((bb) => {
                    bb.addEventListener('click', () => {
                        selectInGroup(bandGroup, bb);
                        renderRec(tracked.find((b) => b.label === bb.dataset.label));
                    });
                });
            } else if (tracked.length === 1) {
                // Hardware / services: one cited recommendation, no ACV step.
                renderRec(tracked[0]);
            }
        });
    });
}
