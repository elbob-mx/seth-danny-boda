// Establecer la fecha (17 de agosto de 2024)
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
    contadorElemento.innerHTML = `${dias} días · ${horas} hrs · ${minutos} min · ${segundos} seg`;

    // Si la cuenta regresiva ha terminado, detener el intervalo
    if (diferencia < 0) {
        clearInterval(intervalo);
        contadorElemento.innerHTML = "¡Gracias por acompañarnos en este día tan especial!";
    }
}, 1000);
