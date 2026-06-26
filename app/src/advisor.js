const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

export function initAdvisor(data) {
    const el = document.getElementById('advisorContainer');
    if (!el) return;
    const bands = data.bands || [];
    el.innerHTML = `
        <div class="advisor">
            <p class="advisor-q">${esc(data.question)}</p>
            <div class="advisor-options">
                ${bands.map((b, i) => `
                    <button class="opt-btn" data-i="${i}" aria-pressed="false">
                        <span class="opt-acv">${esc(b.acv)}</span>
                        <span class="opt-label">${esc(b.label)}</span>
                    </button>`).join('')}
            </div>
            <div id="advisorRec" class="rec-empty">Pick your ACV band to see a grounded, cited recommendation.</div>
        </div>`;

    const rec = el.querySelector('#advisorRec');
    el.querySelectorAll('.opt-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
            el.querySelectorAll('.opt-btn').forEach((b) => { b.classList.remove('active'); b.setAttribute('aria-pressed', 'false'); });
            btn.classList.add('active');
            btn.setAttribute('aria-pressed', 'true');
            const b = bands[+btn.dataset.i];
            rec.className = 'rec-card';
            rec.innerHTML = `
                <div class="rec-head"><span class="rec-band">${esc(b.label)}</span><span class="rec-acv">ACV ${esc(b.acv)}</span></div>
                <div class="rec-row"><span class="rec-key">Motion</span><span class="rec-val">${esc(b.motion)}</span></div>
                <div class="rec-row"><span class="rec-key">Channels</span><span class="chips">${(b.channels || []).map((c) => `<span class="chip">${esc(c)}</span>`).join('')}</span></div>
                ${b.avoid ? `<div class="rec-row"><span class="rec-key">Avoid</span><span class="rec-val">${esc(b.avoid)}</span></div>` : ''}
                <div class="rec-why">${esc(b.why)}</div>
                ${(b.caveats || []).map((c) => `<div class="caveat">⚠ ${esc(c)}</div>`).join('')}
                ${(b.refine || []).map((r) => `<div class="refine">→ ${esc(r)}</div>`).join('')}
                <div class="rec-source">Source: ${esc(b.source)}</div>`;
        });
    });
}
