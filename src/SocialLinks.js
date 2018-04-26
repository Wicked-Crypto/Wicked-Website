import React, { Component } from 'react';
import Facebook from './images/facebook-icon.png'
import Twitter from './images/twitter-icon.png'
import Meetup from './images/meetup-icon.png'

class SocialLinks extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <p>Follow our Facebook</p>
            <img src={Facebook} height="90" width="90" />
          </div>
          <div className="col-4">
            <p>Follow our Twitter</p>
            <img src={Twitter} height="90" width="90" />
          </div>
          <div className="col-4">
            <p>Follow our Meetup</p>
            <img src={Meetup} height="90" width="90" />
          </div>
        </div>
      </div>
    );
  }
}

export default SocialLinks;