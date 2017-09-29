import { types } from './weatherSearchActions';

const initialState = {
    city: 'Enter a city!',
    temperature: '0',
    pressure: '0',
    humidity: '0',
    lowTemp: '0',
    highTemp: '0',
    windSpeed: '0',
    icon: ''
};


function fahrenheitConversion(kelv) {
    return Math.ceil((9/5)*(kelv - 273) + 32);
}

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
               temperature: fahrenheitConversion(payload.main.temp),
               pressure: payload.main.pressure,
               humidity: payload.main.humidity,
               lowTemp: fahrenheitConversion(payload.main.temp_min),
               highTemp: fahrenheitConversion(payload.main.temp_max),
               windSpeed: payload.wind.speed,
               icon: payload.weather[0].icon
            };
        }

        default: {
            return state;
        }
    }


}