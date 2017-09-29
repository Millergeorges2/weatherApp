import { types } from './historyDisplayAction';

const initialState = {
    history: []
};



export default function historyReducer(state = initialState, action) {
    const { type, payload } = action;
    var date = new Date();

    switch (type) {
        case types.ADD_HISTORY: {
            return {
                history:[
                ...state.history,
                    {
                    city: payload.city,
                    date: date
                    }
                ]
            }
        }

        default: {
            return state;
        }
    }


}