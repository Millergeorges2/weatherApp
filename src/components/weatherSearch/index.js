import { connect } from 'react-redux';
import weatherSearch from './weatherSearch';


function mapStoreToProps(store){
    return{
        city: store.city.city,
        temperature: store.city.temperature,
        pressure: store.city.pressure,
        humidity: store.city.humidity,
        windspeed: store.city.windspeed,
        icon: store.city.icon

    };
}

export default connect(mapStoreToProps)(weatherSearch);