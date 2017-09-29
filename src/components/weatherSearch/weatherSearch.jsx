import React from 'react';

import { getCity } from './weatherSearchActions';

import { getWeather } from './weatherSearchActions'

import {addItem} from '../historyDisplay/historyDisplayAction'
export default class weatherSearch extends React.Component {
    constructor(props) {
        super(props);
        //bind here
        this.handleWeatherInput = this.handleWeatherInput.bind(this);
        this.handleGoButton = this.handleGoButton.bind(this);
        this.handleDefault = this.handleDefault.bind(this);
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
            dispatch(addItem(city));
    }

    handleDefault(event){

        const { dispatch, city } = this.props;

        const { value } = event.target;

        dispatch(getCity(value));
        dispatch(getWeather(city));
        dispatch(addItem(value));
        
    }
    render() {
        return (
            <div>
                <button onClick={this.handleDefault} value="San Diego" className="btn btn-primary">San Diego</button>
                <button onClick={this.handleDefault} value="New York" className="btn btn-primary">New York</button>
                <button onClick={this.handleDefault} value="Washington D.C" className="btn btn-primary">Washington D.C</button>
                <button onClick={this.handleDefault} value="London" className="btn btn-primary">London</button>
                <button onClick={this.handleDefault} value="Tokyo" className="btn btn-primary">Tokyo</button>

                <div style={{ marginBottom: 20 + 'px' }} className="input-group">
                    <input onChange={this.handleWeatherInput} type="text" className="form-control" placeholder="Type City!" aria-describedby="sizing-addon2" />
                    <span onClick={this.handleGoButton} className="input-group-addon" id="sizing-addon2">GO!</span>
                </div>
            </div>
        )
    }
}