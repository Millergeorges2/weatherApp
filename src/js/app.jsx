import React from 'react';

import WeatherSearch from '../components/weatherSearch/index'

import CurrentWeather from '../components/currentWeather/currentWeather'

import HistoryDisplay from '../components/historyDisplay/historyDisplay'

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className="jumbotron">
          <h1 className="display-3">Origin Weather App</h1>
          <p className="lead"> Always know if you'll need an umbrella</p>
        </div>
        <div>
          <WeatherSearch />
        </div>
        <div className="container">
          <div className="row">
            <CurrentWeather />
            <HistoryDisplay />
          </div>
        </div>
      </div>
    );
  }
}
