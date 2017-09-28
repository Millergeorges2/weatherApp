import React from 'react';

import { getcity } from './weatherSearchActions'

export default class weatherSearch extends React.Component {
    constructor(props) {
        super(props);
        //bind here
    }


    render() {
        return (
            <div>
                <button className="btn btn-primary">San Diego</button>
                <button className="btn btn-primary">New York</button>
                <button className="btn btn-primary">Washington D.C</button>
                <button className="btn btn-primary">London</button>
                <button className="btn btn-primary">Tokyo</button>

                <div style={{ marginBottom: 20 + 'px' }} className="input-group">
                    <input type="text" className="form-control" placeholder="Username" aria-describedby="sizing-addon2" />
                    <span className="input-group-addon" id="sizing-addon2">GO!</span>
                </div>
            </div>
        )
    }
}