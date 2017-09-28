import { types } from './weatherSearchActions';

const initialState = {
    city: ''
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

        default: {
            return state;
        }
    }


}