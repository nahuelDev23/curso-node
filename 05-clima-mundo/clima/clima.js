// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

const axios = require('axios').default;


const getclima = async(lat, lon) => {
    const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=a4cf1247b0f2e2fccbd1cd4530f3a3f9`)
    return respuesta.data.main.temp;
}
module.exports = {
    getclima,
}