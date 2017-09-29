import { connect } from 'react-redux';
import historyDisplay from './historyDisplay';

function mapStoreToProps(store) {
    return {
        history: store.historyItems.history
    }
}

export default connect(mapStoreToProps)(historyDisplay);