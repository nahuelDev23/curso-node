let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre: function() {
        return `${ this.nombre} ${ this.apellido} - ${this.poder}`
    }
}

let { nombre: primerNombre, apellido, poder } = deadpool;
console.log(primerNombre, apellido, poder);