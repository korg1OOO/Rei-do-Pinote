/* Site que aprendi a fazer a splash screen: https://dev.to/amjadmh73/splash-screen-for-your-spa-2h9k*/

function loadApp() {
    document.getElementById('splash-screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
}

setTimeout(loadApp, 5000);

document.getElementById('login-form').addEventListener('submit', function(enviar) {
    enviar.preventDefault();
    window.location.href = 'html/servicos.html';
});
