const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

export function initStart(steps) {
    const el = document.getElementById('startContainer');
    if (!el) return;
    el.innerHTML = `
        <div class="section-controls">
            <p class="section-intro">The go-to-market motion from zero, in order. Each step: what it is, why it matters, and your first move. Work top to bottom; the deeper how-to for each lives in Plays. This path assumes a software or digital product. For a physical or hardware product the channels differ, so see the Hardware plays.</p>
        </div>
        <ol class="path">
            ${steps.map((s, i) => `
                <li class="stage">
                    <div class="stage-num">${i + 1}</div>
                    <div class="stage-body">
                        <h3 class="stage-title">${esc(s.title)}</h3>
                        <p class="stage-what">${esc(s.what)}</p>
                        ${s.why ? `<p class="stage-line"><span class="stage-label">Why</span> ${esc(s.why)}</p>` : ''}
                        ${s.action ? `<p class="stage-action"><span class="stage-label action">Do first</span> ${esc(s.action)}</p>` : ''}
                        ${s.see ? `<p class="stage-see">See: ${esc(s.see)}</p>` : ''}
                    </div>
                </li>`).join('')}
        </ol>`;
}
