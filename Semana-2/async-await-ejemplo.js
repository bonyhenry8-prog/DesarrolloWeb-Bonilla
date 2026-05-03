// Ejemplo de revolución con Async y Await
async function ejecutarCompra() {
    try {
        console.log("Iniciando transacción segura...");
        const resultado = await new Promise(res => setTimeout(() => res("Pago procesado exitosamente."), 2000));
        console.log(resultado);
    } catch (error) {
        console.log("Hubo un fallo en el sistema.");
    }
}

ejecutarCompra();
