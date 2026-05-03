// Simulación de una petición a base de datos usando Callbacks
function buscarUsuario(id, callback) {
    console.log("Buscando usuario en la base de datos...");
    setTimeout(() => {
        const usuario = { id: id, nombre: "Henry" };
        callback(usuario);
    }, 2000);
}

buscarUsuario(101, (user) => {
    console.log("Usuario encontrado: " + user.nombre);
});
