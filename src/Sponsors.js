import React, { Component } from 'react';
import BitWage from './images/bitwage.png'
import Forbes from './images/forbes.png'
import Spindle from './images/spindle.png'

class Sponsors extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <img src={BitWage} height="90" width="90" />
          </div>
          <div className="col-4">
            <img src={Forbes} height="90" width="90" />
          </div>
          <div className="col-4">
            <img src={Spindle} height="90" width="90" />
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <img src={BitWage} height="90" width="90" />
          </div>
          <div className="col-4">
            <img src={Forbes} height="90" width="90" />
          </div>
          <div className="col-4">
            <img src={Spindle} height="90" width="90" />
          </div>
        </div>
      </div>
    );
  }
}

export default Sponsors;