import axios from 'axios'

export const types = {
    GET_CITY: 'GET_CITY',
    GET_WEATHER: 'GET_WEATHER'
};

export function getCity(city) {
    return {
        type: types.GET_CITY,
        payload: { city }
    }
}

export function getWeather(city){
    return {
        type: types.GET_WEATHER,
        payload: axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=f04ff14f39b30af8edd26f0499a711d7')
            .then(response => response.data).catch(err => console.log(err))
    }
}


