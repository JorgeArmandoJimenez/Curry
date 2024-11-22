/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = e.target.getAttribute('data-page');
            loadPage(page);
        });
    });

    function loadPage(page) {
        content.classList.add('fade');
        
        setTimeout(() => {
            fetch(`${page}.html`)
                .then(response => response.text())
                .then(html => {
                    content.innerHTML = html;
                    content.classList.remove('fade');
                })
                .catch(error => {
                    console.error('Error loading page:', error);
                    content.innerHTML = '<p>Error loading page.</p>';
                    content.classList.remove('fade');
                });
        }, 300);
    }
});
