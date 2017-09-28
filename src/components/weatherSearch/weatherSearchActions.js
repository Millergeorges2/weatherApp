export const types = {
    GET_CITY: 'GET_CITY',

};

export function getCity(city) {
    return {
        type: types.GET_USER_INPUT,
        payload: { city }
    }
}