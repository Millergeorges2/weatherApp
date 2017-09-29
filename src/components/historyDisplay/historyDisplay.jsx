import React from 'react';

export default class historyDisplay extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const {city, history} = this.props;

        return(
            <div style={{ padding: 0 + 'px' }} className="card col-sm-5">
              <h3 className="card-header">Search History</h3>
              <div className="card-block">
                  <ul>
                  {history.map((hist, index) => {
                    return ( 
                        <ul key={index}>
                            <li > <p>{hist.city.toString()}</p> <p>{hist.date.toString()}</p></li>
                        </ul>
                    )
                })}              
                  </ul>
              </div>
            </div>
        )
    }

}