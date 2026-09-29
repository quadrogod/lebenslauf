function revealContact(linkEl) {
    var wrapper = linkEl.closest('.reveal');
    var decoded = atob(wrapper.dataset.value);
    var parts = decoded.split('|');
    var link = document.createElement('a');
    link.href = parts[0];
    link.textContent = parts[1];
    wrapper.innerHTML = '';
    wrapper.appendChild(link);
    return false;
}

function revealAllContacts() {
    document.querySelectorAll('.reveal-link').forEach(function (link) {
        revealContact(link);
    });
}

function hideAllContacts() {
    document.querySelectorAll('.reveal').forEach(function (wrapper) {
        var link = document.createElement('a');
        link.href = '#';
        link.className = 'reveal-link';
        link.textContent = 'показать';
        link.onclick = function () {
            return revealContact(link);
        };
        wrapper.innerHTML = '';
        wrapper.appendChild(link);
    });
}

window.addEventListener('beforeprint', revealAllContacts);
window.addEventListener('afterprint', hideAllContacts);
