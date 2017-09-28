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
            .then(function(response){
                console.log(response.data)
            }).catch(err => console.log(err))
    }
}


//API RESPONSE EXAMPLE

// {"coord":
// {"lon":145.77,"lat":-16.92},
// "weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],
// "base":"cmc stations",
// "main":{"temp":293.25,"pressure":1019,"humidity":83,"temp_min":289.82,"temp_max":295.37},
// "wind":{"speed":5.1,"deg":150},
// "clouds":{"all":75},
// "rain":{"3h":3},
// "dt":1435658272,
// "sys":{"type":1,"id":8166,"message":0.0166,"country":"AU","sunrise":1435610796,"sunset":1435650870},
// "id":2172797,
// "name":"Cairns",
// "cod":200}
