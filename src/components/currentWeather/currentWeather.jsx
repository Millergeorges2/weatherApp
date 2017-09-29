import React from 'react';

export default class currentWeather extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        const { city,
            temperature,
            pressure,
            humidity,
            lowTemp,
            highTemp,
            windSpeed,
            icon
         } = this.props
        return (
            <div style={{ padding: 0 + 'px', marginRight: 40 + 'px', }} className="card col-sm-6">
                <h3 style={{ alignContent: 'center', textAlign: 'center' }} className="card-header">City Information</h3>
                <div className="card-block">
                    <h4 style={{ textAlign: 'center' }} className="card-title">{city}</h4>
                    <img style={{marginLeft: 'auto', marginRight: 'auto', display: 'block'}}src= {"http://openweathermap.org/img/w/" + icon + ".png"}/>
                </div>
                <div style={{ alignContent: "center" }} className="container">
                    <div style={{ alignContent: "center" }} className="row">
                        <div style={{ marginLeft: 10 + "px", marginRight: 10 + "px" }}> <h4>Tempature (f)</h4>
                            <p style={{ display: "block", color: 'green', textAlign: 'center'} }><strong>{temperature}</strong></p>
                        </div>
                        <div style={{ margin: "auto" }}> <h4> Pressure </h4>
                            <p style={{ display: "block", color: 'green', textAlign: 'center'}}><strong>{pressure}</strong></p>
                        </div>
                        <div style={{ marginLeft: 10 + "px", marginRight: 10 + "px" }}> <h4 style={{textAlign: 'center'}}> Humidity </h4>
                            <p style={{ display: "block", color: 'green', textAlign: 'center'}}><strong>{humidity}%</strong></p>
                        </div>
                    </div>
                </div>

                <div style={{ alignContent: "center" }} className="container">
                    <div style={{ alignContent: "center" }} className="row">
                        <div style={{ marginLeft: 10 + "px", marginRight: 10 + "px" }}> <h4 style={{textAlign: 'center'}}>Low Temp (f)</h4>
                            <p style={{ display: "block", color: 'green', textAlign: 'center'}}><strong>{lowTemp}</strong></p>
                        </div>
                        <div style={{ margin: "auto" }}> <h4 style={{textAlign: 'center'}}> High Temp (f)</h4>
                            <p style={{ display: "block", color: 'green', textAlign: 'center'}}><strong>{highTemp}</strong></p>
                        </div>
                        <div style={{ marginLeft: 10 + "px", marginRight: 10 + "px" }}> <h4 style={{textAlign: 'center'}}> Wind Speeds </h4>
                            <p style={{ display: "block", color: 'green', textAlign: 'center'}}><strong>{windSpeed}</strong></p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}