const axios = require('axios');

const getLugarLatLng = async (direct) => {
    const encodeURL = encodeURI(direct);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
        headers: { 'x-rapidapi-key': 'ee9dc04f68msh89e7bdea8e45894p14fbd8jsnc7b0ea76d8f3' }
    });

    const respuesta = await instance.get();

    if (respuesta.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direct}`);
    }

    const data = respuesta.data.Results[0];

    const direccion = data.name;
    const latitud = data.lat;
    const longitud = data.lon;


    return {
        direccion,
        latitud,
        longitud
    }
};

module.exports = {
    getLugarLatLng
}


