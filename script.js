function toggleMenu(element) {
    // Fecha todos os outros menus
    document.querySelectorAll('.menu-item').forEach(item => {
        if (item !== element) {
            item.classList.remove('active');
        }
    });

    // Alterna o menu atual
    element.classList.toggle('active');
}
