import { types } from './weatherSearchActions';

const defaultState = {
    city: ''
};

export default function weatherSearchReducer(state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        case types.GET_CITY: {
            return {
                ...state,
                city: payload.city
            }
        }

    }


}