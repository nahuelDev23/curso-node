let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'Milena',
        id,
    }

    if (id === 20) {
        callback(`Usuario con id ${id} no existe en la base de datos`)
    } else {

        callback(null, usuario);
    }

}

let respuestaDb = (err, usuario) => {
    if (err) {
        return console.log(err)
    }
    console.log('Usuario de base de datos', usuario);
}

getUsuarioById(20, respuestaDb);