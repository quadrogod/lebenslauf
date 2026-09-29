function _qz(linkEl) {
    var wrapper = linkEl.closest('.qc-i');
    var decoded = atob(wrapper.dataset.a + wrapper.dataset.b + wrapper.dataset.c);
    var parts = decoded.split('|');
    var link = document.createElement('a');
    link.href = parts[0];
    link.textContent = parts[1];
    wrapper.innerHTML = '';
    wrapper.appendChild(link);
    return false;
}

function _qzAll() {
    document.querySelectorAll('.qc-l').forEach(function (link) {
        _qz(link);
    });
}

function _qzFit() {
    var container = document.querySelector('.a4-container');
    if (!container) return;
    var A4_HEIGHT_PX = 1123; // A4 height at 96dpi, matches .a4-container CSS
    container.style.transform = '';
    container.style.height = 'auto';
    var contentHeight = container.scrollHeight;
    container.style.height = '';
    if (contentHeight > A4_HEIGHT_PX) {
        container.style.transform = 'scale(' + (A4_HEIGHT_PX / contentHeight) + ')';
    }
}

function _qzUnfit() {
    var container = document.querySelector('.a4-container');
    if (container) container.style.transform = '';
}

window.addEventListener('beforeprint', _qzAll);
window.addEventListener('beforeprint', _qzFit);
window.addEventListener('afterprint', _qzUnfit);
