let saveEL = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let media = document.getElementById('media-res')
let infoboton = document.getElementById('info-boton')
let infotexto = document.getElementById('info-texto')
let count = 0;
let contfondos = 0
let vecesguardado = 0
let media1 = 0
let count2 = 0
let botoninfo = 0

document.addEventListener('DOMContentLoaded', function () {
    infotexto.classList.add('oculto')
});

function increment() {
    countEl.classList.add('animacioncambio1')
    count += 1
    setTimeout(function () {
        countEl.textContent = count
    }, 99)
    setTimeout(function () {
        countEl.classList.add('animacioncambio2')
    }, 99)
    setTimeout(function () {
        countEl.classList.remove('animacioncambio1')
    }, 99)
    setTimeout(function () {
        countEl.classList.remove('animacioncambio2')
    }, 198)
    console.log(count)
}
function increment10() {
    countEl.classList.add('animacioncambio1')
    count += 10
    setTimeout(function () {
        countEl.textContent = count
    }, 99)
    setTimeout(function () {
        countEl.classList.add('animacioncambio2')
    }, 99)
    setTimeout(function () {
        countEl.classList.remove('animacioncambio1')
    }, 99)
    setTimeout(function () {
        countEl.classList.remove('animacioncambio2')
    }, 198)
    console.log(count)
}
function increment50() {
    countEl.classList.add('animacioncambio1')
    count += 50
    setTimeout(function () {
        countEl.textContent = count
    }, 99)
    setTimeout(function () {
        countEl.classList.add('animacioncambio2')
    }, 99)
    setTimeout(function () {
        countEl.classList.remove('animacioncambio1')
    }, 99)
    setTimeout(function () {
        countEl.classList.remove('animacioncambio2')
    }, 198)

    console.log(count)
}
function increment100() {
    countEl.classList.add('animacioncambio1')
    count += 100
    setTimeout(function () {
        countEl.textContent = count
    }, 99)
    setTimeout(function () {
        countEl.classList.add('animacioncambio2')
    }, 99)
    setTimeout(function () {
        countEl.classList.remove('animacioncambio1')
    }, 99)
    setTimeout(function () {
        countEl.classList.remove('animacioncambio2')
    }, 198)

    console.log(count)
}

function decrement() {
    countEl.classList.add('animacioncambio3')
    count -= 1
    if (count <= 0) {
        count = 0
    }
    setTimeout(function () {
        countEl.textContent = count
    }, 99)
    setTimeout(function () {
        countEl.classList.add('animacioncambio4')
    }, 99)
    setTimeout(function () {
        countEl.classList.remove('animacioncambio3')
    }, 99)
    setTimeout(function () {
        countEl.classList.remove('animacioncambio4')
    }, 198)
    console.log(count)
}
function decrement10() {
    countEl.classList.add('animacioncambio3')
    count -= 10
    if (count <= 0) {
        count = 0
    }
    setTimeout(function () {
        countEl.textContent = count
    }, 99)
    setTimeout(function () {
        countEl.classList.add('animacioncambio4')
    }, 99)
    setTimeout(function () {
        countEl.classList.remove('animacioncambio3')
    }, 99)
    setTimeout(function () {
        countEl.classList.remove('animacioncambio4')
    }, 198)
    console.log(count)
}
function decrement50() {
    countEl.classList.add('animacioncambio3')
    count -= 50
    if (count <= 0) {
        count = 0
    }
    setTimeout(function () {
        countEl.textContent = count
    }, 99)
    setTimeout(function () {
        countEl.classList.add('animacioncambio4')
    }, 99)
    setTimeout(function () {
        countEl.classList.remove('animacioncambio3')
    }, 99)
    setTimeout(function () {
        countEl.classList.remove('animacioncambio4')
    }, 198)
    console.log(count)
}
function decrement100() {
    countEl.classList.add('animacioncambio3')
    count -= 100
    if (count <= 0) {
        count = 0
    }
    setTimeout(function () {
        countEl.textContent = count
    }, 99)
    setTimeout(function () {
        countEl.classList.add('animacioncambio4')
    }, 99)
    setTimeout(function () {
        countEl.classList.remove('animacioncambio3')
    }, 99)
    setTimeout(function () {
        countEl.classList.remove('animacioncambio4')
    }, 198)
    console.log(count)
}

function save() {
    let countStr = count + ' - '
    saveEL.textContent += countStr
    countEl.textContent = 0
    count2 = count2 + count
    count = 0
    vecesguardado = vecesguardado + 1
    calcmed()
}
function calcmed() {
    media1 = Math.round(count2 / vecesguardado)
    console.log('media = ' + media1)
    console.log('veces guardado = ' + vecesguardado)
    console.log('count 2 = ' + count2)
    media.textContent = 'media de resultados guardados: ' + media1
}

function fondo() {
    if (contfondos == 0) {
        document.body.classList.remove('cambiar-fondo3')
        document.body.classList.add('cambiar-fondo')
    }
    else if (contfondos == 1) {
        document.body.classList.remove('cambiar-fondo')
        document.body.classList.add('cambiar-fondo2')
    }
    else {
        document.body.classList.remove('cambiar-fondo2')
        document.body.classList.add('cambiar-fondo3')
    }

    if (contfondos == 0) {
        contfondos = 1
    }
    else if (contfondos == 1) {
        contfondos = 2
    }
    else {
        contfondos = 0
    }
    console.log(contfondos)
}
function eliminar() {
    saveEL.textContent = 'Entradas anteriores:'
}

function info() {
    if (botoninfo == 1) {
        infoboton.textContent = 'Información sobre el fondo'
        infotexto.classList.remove('visible')
        infotexto.classList.add('animacioncerrar')
        setTimeout(function () {
            infotexto.classList.remove('animacioncerrar')
            infotexto.classList.add('oculto')
        }, 480)
        botoninfo = 0
        console.log(botoninfo)
    }
    else {
        infotexto.classList.remove('oculto')
        infotexto.classList.add('animacionabrir')

        if (contfondos == 0) {
            infotexto.textContent = 'El tren de la imagen es un cercanías modelo civia. Los Civia son conocidos por su diseño moderno y su eficiencia en el transporte de pasajeros en áreas urbanas y suburbanas. Son parte de la flota de trenes de Renfe, ofreciendo comodidad y rapidez en trayectos cortos y medios dentro de ciudades y sus alrededores.';
        } else if (contfondos == 1) {
            infotexto.textContent = 'El tren de la imagen es un cercanías modelo 446. Los trenes de cercanías serie 446 son una opción popular para el transporte local en áreas urbanas y suburbanas. Reconocidos por su diseño funcional y capacidad para transportar pasajeros de manera eficiente, son una parte integral de la red de trenes de cercanías en España. Su fiabilidad y comodidad los convierten en una elección frecuente para trayectos cortos y medios dentro de ciudades y sus alrededores.'
        } else if (contfondos == 2) {
            infotexto.textContent = 'En este fondo se muestra la estación de tren de Quintana del Puente. Esta estación está ubicada en la provincia de Palencia, España, es parte de la línea ferroviaria Palencia-La Coruña y gestionada por Renfe Operadora. Funciona como parada facultativa, brindando servicio a la comunidad local y facilitando conexiones ferroviarias con otras localidades cercanas y ciudades importantes.'
        }
        infoboton.textContent = 'ocultar texto'
        setTimeout(function () {
            infotexto.classList.remove('animacionabrir')
            infotexto.classList.add('visible')
        }, 480)
        botoninfo = 1
    }
}



