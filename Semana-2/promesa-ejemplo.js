// Ejemplo de mejora con Promesas
const verificarStock = new Promise((resolve, reject) => {
    const hayStock = true;
    setTimeout(() => {
        if (hayStock) resolve("Producto disponible en bodega.");
        else reject("Error: Producto agotado.");
    }, 2000);
});

verificarStock
    .then(mensaje => console.log(mensaje))
    .catch(error => console.error(error));
