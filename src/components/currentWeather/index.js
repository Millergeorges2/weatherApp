import { connect } from 'react-redux';
import currentWeather from './currentWeather';

function mapStoreToProps(store) {
    return {
        city: store.city.city,
        temperature: store.city.temperature,
        pressure: store.city.pressure,
        lowTemp: store.city.lowTemp,
        highTemp: store.city.highTemp,
        humidity: store.city.humidity,
        windSpeed: store.city.windSpeed,
        icon: store.city.icon
    }
}

export default connect(mapStoreToProps)(currentWeather);