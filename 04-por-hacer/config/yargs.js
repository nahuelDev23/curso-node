const argv = require('yargs')
    .command('crear', 'Crear una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer',
        }
    })
    .command('actualizar', 'actualiza el estado de una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer',
        },
        completado: {
            default: true,
            alias: 'c',
            desc: 'Marca como completado o pendiente la tarea',
        }
    })
    .command('borrar', 'borra una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer',
        },
    })
    .command('filtrar', 'filtra por estado', {
        completado: {
            default: false,
            alias: 'c',
            desc: 'Marca como completado o pendiente la tarea',
        }
    })
    .help()
    .argv

module.exports = {
    argv
}