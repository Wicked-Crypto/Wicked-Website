import React, { Component } from 'react';
import Warsaw from './images/warsaw.jpg'
import NewYork from './images/paris.jpg'
import Paris from './images/new-york.jpg'
import './CityGallery.css';

class CityGallery extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6">
            <div className="city-card warsaw-card">
              <h3 className='city-name'>Warsaw</h3>
            </div>
          </div>
          <div className="col-12 col-sm-6">
            <div className="city-card new-york-card">
              <h3 className='city-name'>New York</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6">
            <div className="city-card warsaw-card">
              <h3 className='city-name'>Paris</h3>
            </div>
          </div>
          <div className="col-12 col-sm-6">
            <div className="city-card next-city-card">
              <div className='next-city-content'>
                <h3 className='city-name'>Which city should be next?</h3>
                <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent button-apply">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CityGallery;