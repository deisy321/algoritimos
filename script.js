var coresMudadas = false; // Estado para verificar se as cores foram mudadas

function alterarCores() {
    var tituloPrincipal = document.querySelector('h1');
    var subtitulos = document.querySelectorAll('h2, h3');

    if (!coresMudadas) {
        // Armazenar as cores originais antes de mudar
        coresMudadas = true;
        tituloPrincipal.dataset.corOriginal = tituloPrincipal.style.color;
        for (var i = 0; i < subtitulos.length; i++) {
            subtitulos[i].dataset.corOriginal = subtitulos[i].style.color;
        }

        // Mudar as cores
        tituloPrincipal.style.color = 'purple';
        for (var i = 0; i < subtitulos.length; i++) {
            subtitulos[i].style.color = 'brown';
        }
    } else {
        // Reverter para as cores originais
        coresMudadas = false;
        tituloPrincipal.style.color = tituloPrincipal.dataset.corOriginal;
        for (var i = 0; i < subtitulos.length; i++) {
            subtitulos[i].style.color = subtitulos[i].dataset.corOriginal;
        }
    }
}
