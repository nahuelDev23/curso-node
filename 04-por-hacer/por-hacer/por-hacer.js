const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw new Error('no se pudo grabar', err)
    })
}

const cargarDb = () => {
    try {
        listadoPorHacer = require('../db/data.json')
    } catch (error) {
        listadoPorHacer = [];
    }

}

const crear = (descripcion) => {
    cargarDb();
    let porHacer = {
        descripcion,
        completado: false,
    };
    listadoPorHacer.push(porHacer);
    guardarDB()
    return porHacer;
}

const getListado = () => {
    cargarDb();
    return listadoPorHacer
}

const actualizar = (descripcion, completado = true) => {
    cargarDb();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion
    })

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB()
        return true
    } else {
        return false
    }
}
const borrar = (descripcion) => {
    cargarDb();
    let nuevoListado = listadoPorHacer.filter(tarea => {
        /**
         * guarda todas las que no sean lo que pasaste por la descipcion
         */
        return tarea.descripcion !== descripcion
    })

    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado
        guardarDB()
        return true;
    }
}

const filtrar = (estado) => {
    cargarDb();
    let nuevoListado = listadoPorHacer.filter(tarea => {
        /**
         * guarda todas las que coincida lo que pasaste por la descipcion
         */
        return tarea.completado == estado
    })

    if (nuevoListado.length > 0) {
        return nuevoListado;
    }


}
module.exports = {
    crear,
    getListado,
    actualizar,
    borrar,
    filtrar
}