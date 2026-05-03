// Ejemplo de funcionamiento de un Callback
function procesarPedido(plato, callback) {
    console.log(`Preparando pedido: ${plato}...`);
    setTimeout(() => {
        console.log(`Pedido de ${plato} listo.`);
        callback();
    }, 2000);
}

procesarPedido("Pizza", () => {
    console.log("Notificación: El cliente ha sido avisado.");
});
