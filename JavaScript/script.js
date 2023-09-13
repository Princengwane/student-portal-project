const content = document.getElementById('content');

function loadContent(page) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            content.innerHTML = xhr.responseText;
        }
    };
    xhr.open('GET', `${page}.html`, true);
    xhr.send();
}

document.addEventListener('DOMContentLoaded', () => {
    loadContent('home'); // Load home page by default

    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const page = event.target.getAttribute('href').substring(1);
            loadContent(page);
        });
    });
});
