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

export default function weatherSearchReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case types.GET_CITY: {
            return {
                ...state,
                city: payload.city
            };
        }
        case types.GET_WEATHER: {
            return{
               state
            };
        }

        default: {
            return state;
        }
    }


}