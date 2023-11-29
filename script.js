function mudarCores() {
    var tituloPrincipal = document.getElementById('tituloPrincipal');
    var subtitulos = document.querySelectorAll('h2, h3');

    tituloPrincipal.style.color = getRandomColor();

    for (var i = 0; i < subtitulos.length; i++) {
        subtitulos[i].style.color = getRandomColor();
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
