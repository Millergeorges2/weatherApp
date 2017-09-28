import { connect } from 'react-redux';
import currentWeather from './currentWeather';

function mapStoreToProps(store) {
    return {
        city : store.city.city
    }
}