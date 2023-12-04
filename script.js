//script.js
document.addEventListener('DOMContentLoaded', function () {
    //Simula un retraso de 2 segundos para la pantalla de carga 
    setTimeout(function(){
        hideSplashScreen();
    }, 3000);

});

function hideSplashScreen() {
    const splashScreen = document.getElementById('splash-screen');
    splashScreen.style.display = 'none';

    //Muestra la pantalla de incio
    const homeScreen = document.getElementById('home-screen');
    homeScreen.classList.remove('hidden');

    //Agrega un evento al boton de inicio
    const startButton = document.getElementById('start-button');
    startButton.addEventListener('click', function(){
        alert('!LA APLICACION HA COMENZADO!');
    });

}


if ('Notification' in Window) {
    Notification.requestPermission().then(function(permission){
        if (permission === 'granted'){
            new Notification('¡Bienvenido!', {
                body: 'Gracias por su visita a nuestro sitio web.'
            });
         }
            });
}