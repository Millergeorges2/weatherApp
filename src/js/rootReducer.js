import { combineReducers } from 'redux';

import weathersearchreducer from '../components/weatherSearch/weatherSearchReducer';

import historydisplayReducer from '../components/historyDisplay/historyDisplayReducer';

const rootReducer = combineReducers({
// add reducers
city: weathersearchreducer,
historyItems: historydisplayReducer
});

export default rootReducer;
