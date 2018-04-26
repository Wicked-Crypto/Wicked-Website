import React, { Component } from 'react';
import SubMenu from './SubMenu';
import WickedCarousel from './WickedCarousel';
import CityGallery from './CityGallery';
import WhatIs from './WhatIs';
import SocialLinks from './SocialLinks';
import './Home.css';

class Home extends Component {
  render() {
    return (
    	<div class="Home">
    		<SubMenu />
    		<WickedCarousel />
    		<h2>Find Wicked Crypto Meetup in your city</h2>
    		<CityGallery />
    		<h2>What is Wicked Crypto?</h2>
    		<WhatIs />
            <h3>For updates, more info about speakers & live streaming:</h3>
            <SocialLinks />
    	</div>
    );
  }
}

export default Home;