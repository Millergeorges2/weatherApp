export const types = {
    GET_CITY: 'GET_CITY',

};

export function getCity(city) {
    return {
        type: types.GET_CITY,
        payload: { city }
    }
}