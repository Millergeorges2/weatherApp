import { types } from './weatherSearchActions';

const initialState = {
    city: '',
    temperature: '',
    pressure: '',
    humidity: '',
    lowTemp: '',
    highTemp: '',
    windSpeed: ''
};


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

export default function weatherSearchReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case types.GET_CITY: {
            return {
                ...state,
                city: payload.city
            };
        }
        case 'GET_WEATHER_FULFILLED': {
            return{
               ...state,
               temperature: payload.main.temp,
               pressure: payload.main.pressure,
               humidity: payload.main.humidity,
               lowTemp: payload.main.temp_min,
               highTemp: payload.main.temp_max,
               windSpeed: payload.wind.speed,
               icon: payload.weather[0].icon
            };
        }

        default: {
            return state;
        }
    }


}