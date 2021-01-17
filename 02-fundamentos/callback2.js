let empleados = [{
        id: 1,
        nombre: 'Nahuel'
    },
    {
        id: 2,
        nombre: 'Milena'
    },
    {
        id: 3,
        nombre: 'Never'
    },
];

let salarios = [{
        id: 1,
        salario: 1000,

    },
    {
        id: 2,
        salario: 2000,
    }
];

let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id)

    if (!empleadoDB) {
        callback(`no existe un empleado con el ID ${ id }`)
    } else {
        callback(null, empleadoDB)
    }
}



/**
 *  Ejercicio
 * @param {Object} empleado 
 * @param {Object} callback 
 */
let getSalario = (empleado, callback) => {

    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB) {
        callback(`No se encontro un salario para el usuario ${empleado.nombre}`)
    } else {
        callback(null, { nombre: empleado.nombre, salario: salarioDB.salario })
    }
}

getEmpleado(1, (err, empleado) => {
    if (err) {
        console.log(err)
    } else {
        getSalario(empleado, (err, resp) => {
            if (err) {
                return console.log(err);
            } else {
                return console.log(resp);
            }
        })
    }
})