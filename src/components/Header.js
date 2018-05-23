import React from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';
import './Header.css';
import Logo from '../images/wicked-logo.png'

const Header = () => (
	<header>
		<div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
		  <header className="mdl-layout__header">
		    <div className="mdl-layout__header-row">
		      <div className="mdl-layout-spacer">
		        <Link to='/'><span><img src={Logo} height="90" width="90" /></span></Link>
		      </div>
		      <nav className="mdl-navigation mdl-layout--large-screen-only">
		        <a className="mdl-navigation__link header__link" href="https://wicked-crypto.github.io/#about">About</a>
		        <a className="mdl-navigation__link header__link"><Link to='/meetups' className="header-link">Meetups</Link></a>
		        <a className="mdl-navigation__link header__link" href="https://wicked-crypto.github.io/#sponsors">Sponsors</a>
		      	<a className="mdl-navigation__link header__link" href="https://wicked-crypto.github.io/#contact">Contact</a>		  
		      </nav>
		    </div>
		  </header>
		  <div className="mdl-layout__drawer">
		    <nav className="mdl-navigation">
		      <a className="mdl-navigation__link" href="#about">About</a>
		      <a className="mdl-navigation__link"><Link to='/meetups' className="header-link">Meetups</Link></a>
			  <a className="mdl-navigation__link city__link" href="https://wicked-crypto.github.io/meetups/warsaw">Warsaw</a>
			  <a className="mdl-navigation__link city__link" href="https://wicked-crypto.github.io/meetups/newyork">New York</a>
			  <a className="mdl-navigation__link city__link" href="https://wicked-crypto.github.io/meetups/paris">Paris</a>
		      <a className="mdl-navigation__link" href="https://wicked-crypto.github.io/#sponsors">Sponsors</a>
		      <a className="mdl-navigation__link" href="https://wicked-crypto.github.io/#contact">Contact</a>		
		      <a className="mdl-navigation__link" href="https://wicked-crypto.github.io/#social">Social</a>		    
		    </nav>
		  </div>
		</div>
	</header>
)

export default Header;