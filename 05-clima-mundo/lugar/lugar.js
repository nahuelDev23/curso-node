const axios = require('axios').default;


const getLugarLatLng = async(direccion) => {
    const encodeUlr = encodeURI(direccion)
    const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeUlr}.json`,
        params: { 'access_token': 'pk.eyJ1IjoibmFodWVsZGV2MjMiLCJhIjoiY2trMWF0bHZvMGUwbzJvbnJtdjB6dHNpciJ9.WFM8r29jRCNMQhqP-eysTQ' }
    });
    const resp = await instance.get();

    if (resp.data.features.length === 0) {
        throw new Error(`No hay resultado para ${direccion}`)
    }

    const data = resp.data.features[0]
    const lugar = data.place_name
    const longitud = data.center[0]
    const latitud = data.center[1]

    return {
        lugar,
        longitud,
        latitud,
    }
}
module.exports = {
    getLugarLatLng,
}