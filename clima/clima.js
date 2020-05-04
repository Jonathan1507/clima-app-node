const axios = require('axios');

const getClima = async (lat, lng) => {
    const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=ddd752b99967c8133ad74823988349d9&units=metric`);

    return respuesta.data.main.temp;
}

module.exports = {
    getClima
}