// let cuentaRegresiva = new Date("August 17, 2024 00:00").getTime();
// const mesesContador = document.getElementById("mes");
// const diasContador = document.getElementById("dias");
// const horasContador = document.getElementById("hora");
// const minutosContador = document.getElementById("minuto");
// const segundosContador = document.getElementById("segundo");

// // Update the count down every 1 second
// let x = setInterval(function () {
//     let hoy = new Date().getTime();

//     let intervalo = cuentaRegresiva - hoy;

//     let meses = Math.floor(intervalo / (1000 * 60 * 60 * 24 * 30.437));
//     let dias = Math.floor(intervalo / ((1000 * 60 * 60 * 24 * 30.437) / 4));
//     let horas = Math.floor((intervalo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     let minutos = Math.floor((intervalo % (1000 * 60 * 60)) / (1000 * 60));
//     let segundos = Math.floor((intervalo % (1000 * 60)) / 1000);

//     mesesContador.innerText = meses;
//     diasContador.innerText = dias;
//     horasContador.innerText = horas;
//     minutosContador.innerText = minutos;
//     segundosContador.innerText = segundos;

//     if (intervalo < 0) {
//         clearInterval(x);
//         document.getElementById("nuevo").innerHTML = "· ¡Gracias por acompañarnos! ·";
//     }
// }, 1000);

// Establecer la fecha objetivo (17 de agosto de 2024)
const fechaObjetivo = new Date("August 17, 2024 00:00:00").getTime();

// Actualizar el contador cada segundo
const intervalo = setInterval(() => {
    // Obtener la fecha y hora actual
    const fechaActual = new Date().getTime();

    // Calcular la diferencia de tiempo entre la fecha actual y la fecha objetivo
    const diferencia = fechaObjetivo - fechaActual;

    // Calcular días, horas, minutos y segundos restantes
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    // Mostrar el contador en el elemento HTML
    const contadorElemento = document.getElementById("cuentaRegresiva");
    contadorElemento.innerHTML = `${dias} días · ${horas} horas · ${minutos} minutos · ${segundos} segundos`;

    // Si la cuenta regresiva ha terminado, detener el intervalo
    if (diferencia < 0) {
        clearInterval(intervalo);
        contadorElemento.innerHTML = "¡Gracias por acompañarnos en este día tan especial!";
    }
}, 1000); // 1000 milisegundos = 1 segundo
