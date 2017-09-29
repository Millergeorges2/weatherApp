
export const types = {
    ADD_HISTORY: 'ADD_HISTORY'
};

export function addItem(city) {
    return {
        type: types.ADD_HISTORY,
        payload: { city }
    }
};
