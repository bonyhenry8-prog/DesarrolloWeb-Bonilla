// Simulación de stock usando Promesas
const validarPago = new Promise((resolve, reject) => {
    const pagoExitoso = true;
    setTimeout(() => {
        if (pagoExitoso) resolve("Pago procesado con éxito.");
        else reject("Error: Fondos insuficientes.");
    }, 2000);
});

validarPago
    .then(msj => console.log(msj))
    .catch(err => console.error(err));
