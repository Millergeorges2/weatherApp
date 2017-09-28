import React from 'react';

export default class currentWeather extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        const { city } = this.props
        return (
            <div style={{ padding: 0 + 'px', marginRight: 40 + 'px', }} className="card col-sm-6">
                <h3 style={{ alignContent: 'center', textAlign: 'center' }} className="card-header">City Information</h3>
                <div className="card-block">
                    <h4 style={{ textAlign: 'center' }} className="card-title">{city}</h4>
                </div>
                <div style={{ alignContent: "center" }} className="container">
                    <div style={{ alignContent: "center" }} className="row">
                        <div style={{ marginLeft: 10 + "px", marginRight: 10 + "px" }}>Tempature
              <p style={{ display: "block" }}>22 degrees!</p>
                        </div>
                        <div style={{ margin: "auto" }}>Presure
              <p style={{ display: "block" }}>over 9000</p>
                        </div>
                        <div style={{ marginLeft: 10 + "px", marginRight: 10 + "px" }}>humidity
              <p style={{ display: "block" }}>40%</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}