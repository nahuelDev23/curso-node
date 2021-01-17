const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')

const argv = require('yargs').options({
    direccion: {
        alias: "d",
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true,
    }
}).argv

// let resultado = lugar.getLugarLatLng(argv.direccion).then(res => {
//     console.log(res)
// })

// clima.getclimaLatLng(40.750000, -74.000000)
//     .then(res => {
//         console.log(res)
//     }).catch(err => {
//         console.log(err)
//     })

const getInfo = async(direccion) => {
    try {
        let coordenadas = await lugar.getLugarLatLng(direccion)
        let climaActual = await clima.getclima(coordenadas.latitud, coordenadas.longitud)
        return `El clima actual de ${direccion} es de ${climaActual}`
    } catch (e) {
        return "no anda"
    }

}


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);