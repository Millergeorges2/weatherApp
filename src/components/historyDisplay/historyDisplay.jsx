import React from 'react';

export default class historyDisplay extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div style={{ padding: 0 + 'px' }} className="card col-sm-5">
              <h3 className="card-header">Search History</h3>
              <div className="card-block">
                <li><strong>Search one</strong> search time </li>
              </div>
            </div>
        )
    }

}