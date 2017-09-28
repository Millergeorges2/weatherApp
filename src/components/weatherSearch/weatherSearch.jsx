import React from 'react';

import { getCity } from './weatherSearchActions';

import { getWeather } from './weatherSearchActions'

export default class weatherSearch extends React.Component {
    constructor(props) {
        super(props);
        //bind here
        this.handleWeatherInput = this.handleWeatherInput.bind(this);
        this.handleGoButton = this.handleGoButton.bind(this);
    }


    handleWeatherInput(event){
        //this.props.dispatch passed in through
        //the connect, gives access to actions in the 
        //weatherSearch actions
        const { dispatch } = this.props;

        const { value } = event.target;
        //passes value to get city in the actions
        dispatch(getCity(value));

    }

    handleGoButton(event){
        const { dispatch, city } = this.props;
            dispatch(getWeather(city));
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
                    <input onChange={this.handleWeatherInput} type="text" className="form-control" placeholder="Username" aria-describedby="sizing-addon2" />
                    <span onClick={this.handleGoButton} className="input-group-addon" id="sizing-addon2">GO!</span>
                </div>
            </div>
        )
    }
}