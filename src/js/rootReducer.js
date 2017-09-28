import { combineReducers } from 'redux';

import weathersearchreducer from '../components/weatherSearch/weatherSearchReducer';

const rootReducer = combineReducers({
// add reducers
city: weathersearchreducer
});

export default rootReducer;
