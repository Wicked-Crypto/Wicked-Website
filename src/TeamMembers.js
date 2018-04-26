import React, { Component } from 'react';
import WebDev from './images/web-dev.png'
import Sonia from './images/sonia.png'
import Przemek from './images/przemek.png'
import Wizzard from './images/graphic-wizzard.png'

class TeamMembers extends Component {
  render() {
    return (
      <div className="container">
        <h2>Our Team</h2>
        <div className="row">
          <div className="col-3">
            <img src={WebDev} height="90" width="90" />
            <p>Developer Web/Mobile</p>
          </div>
          <div className="col-3">
            <img src={Sonia} height="90" width="90" />
            <p>Sonia Targosz</p>
          </div>
          <div className="col-3">
            <img src={Przemek} height="90" width="90" />
            <p>Przemysław Targosz</p>
          </div>
          <div className="col-3">
            <img src={Wizzard} height="90" width="90" />
            <p>Graphic Wizzard</p>
          </div>
        </div>
      </div>
    );
  }
}

export default TeamMembers;