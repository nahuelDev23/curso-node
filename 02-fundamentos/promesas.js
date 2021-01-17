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

let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id)

        if (!empleadoDB) {
            reject(`no existe un empleado con el ID ${ id }`)
        } else {
            resolve(empleadoDB)
        }
    });

}
let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id);

        if (!salarioDB) {
            reject(`No se encontro un salario para el usuario ${empleado.nombre}`)
        } else {
            resolve({ nombre: empleado.nombre, salario: salarioDB.salario })
        }
    })

}

getEmpleado(30)
    .then(empleado => {
        getSalario(empleado).then(res => {
            console.log(res)
        }, err => console.log(err))
    })
    .catch(err => console.log(err))

/**
 * promesas en cadena
 * res es elresolve de getslario por el uso del return
 */
getEmpleado(22).then(empleado => {
    return getSalario(empleado);
}).then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})