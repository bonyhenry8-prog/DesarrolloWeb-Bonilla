// Simulación de conexión a un servidor con Async/Await
async function conectarServidor() {
    try {
        console.log("Intentando conectar al servidor...");
        const resultado = await new Promise(res => setTimeout(() => res("Conexión Establecida."), 2000));
        console.log(resultado);
    } catch (error) {
        console.log("Fallo en la conexión.");
    }
}

conectarServidor();
