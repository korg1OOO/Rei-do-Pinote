document.getElementById('menu-toggle').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    var mainContent = document.getElementById('main-content');

    menu.classList.toggle('active');
    if(menu.classList.contains('active')) {
        overlay.style.display = 'block';
        mainContent.style.opacity = '0.5';
    } else {
        overlay.style.display = 'none';
        mainContent.style.opacity = '1';
    }
});