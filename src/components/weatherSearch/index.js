import { connect } from 'react-redux';
import weatherSearch from './weatherSearch';


function mapStoreToProps(store){
    return{
        city: store.city.city,
    };
}

export default connect(mapStoreToProps)(weatherSearch);