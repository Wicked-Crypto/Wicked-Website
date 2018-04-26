import React, { Component } from 'react';
import './WickedCarousel.css';

class WickedCarousel extends Component {
  render() {
    return (
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="https://bniajfi.org/wp-content/uploads/2014/03/blog-placeholder.png" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="http://aeei.co.za/wp-content/uploads/2014/05/placeholder-red1-815x458.png" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://rawya-trading.com/wp-content/uploads/2013/11/placeholder.gif" alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default WickedCarousel;