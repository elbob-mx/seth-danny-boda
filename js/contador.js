let cuentaRegresiva = new Date("August 17, 2024 00:00").getTime();
const mesesContador = document.getElementById("mes");
const diasContador = document.getElementById("dias");
const horasContador = document.getElementById("hora");
const minutosContador = document.getElementById("minuto");
const segundosContador = document.getElementById("segundo");

// Update the count down every 1 second
let x = setInterval(function () {
    let hoy = new Date().getTime();

    let intervalo = cuentaRegresiva - hoy;

    let meses = Math.floor(intervalo / (1000 * 60 * 60 * 24 * 30.437));
    let dias = Math.floor(intervalo / ((1000 * 60 * 60 * 24 * 30.437) / 4));
    let horas = Math.floor((intervalo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutos = Math.floor((intervalo % (1000 * 60 * 60)) / (1000 * 60));
    let segundos = Math.floor((intervalo % (1000 * 60)) / 1000);

    mesesContador.innerText = meses;
    diasContador.innerText = dias;
    horasContador.innerText = horas;
    minutosContador.innerText = minutos;
    segundosContador.innerText = segundos;

    if (intervalo < 0) {
        clearInterval(x);
        document.getElementById("nuevo").innerHTML = "· ¡Gracias por acompañarnos! ·";
    }
}, 1000);
