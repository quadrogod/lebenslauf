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

window.addEventListener('beforeprint', _qzAll);
