import React, { Component } from 'react';
import Home from './Home';
import './NavigationBar.css';
import Logo from './images/wicked-logo.png'

class NavigationBar extends Component {
  render() {
    return (
		<div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
		  <header className="mdl-layout__header">
		    <div className="mdl-layout__header-row">
		      <div className="mdl-layout-spacer">
		      	<span className="mdl-layout-title"><img src={Logo} height="90" width="90" /></span>
		      </div>
		      <nav className="mdl-navigation mdl-layout--large-screen-only">
		        <a className="mdl-navigation__link" href="">About</a>
		        <a className="mdl-navigation__link" href="">Meetups</a>
		        <a className="mdl-navigation__link" href="">News</a>
		        <a className="mdl-navigation__link" href="">Sponsors</a>
		      	<a className="mdl-navigation__link" href="">Contact</a>		  
		      </nav>
		    </div>
		  </header>
		  <div className="mdl-layout__drawer">
		    <nav className="mdl-navigation">
		      <a className="mdl-navigation__link" href="">About</a>
		      <a className="mdl-navigation__link" href="">Meetups</a>
			  <a className="mdl-navigation__link" href="">Warsaw</a>
			  <a className="mdl-navigation__link" href="">- Upcoming</a>
			  <a className="mdl-navigation__link" href="">- Latest</a>
			  <a className="mdl-navigation__link" href="">New York</a>
			  <a className="mdl-navigation__link" href="">Paris</a>
		      <a className="mdl-navigation__link" href="">News</a>
		      <a className="mdl-navigation__link" href="">Sponsors</a>
		      <a className="mdl-navigation__link" href="">Contact</a>		
		      <a className="mdl-navigation__link" href="">Social</a>		    
		    </nav>
		  </div>
		  <main className="mdl-layout__content">
		    <div className="page-content">
		        <Home />
		    </div>
		  </main>
		</div>
    );
  }
}

export default NavigationBar;