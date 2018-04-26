import React, { Component } from 'react';
import './SubMenu.css';

class SubMenu extends Component {
  render() {
    return (
    	<div class="submenu">
    		<button className="mdl-button mdl-js-button mdl-js-ripple-effect button-city">
  				Warsaw
			</button>
    		<button className="mdl-button mdl-js-button mdl-js-ripple-effect button-city">
  				New York
			</button>
    		<button className="mdl-button mdl-js-button mdl-js-ripple-effect button-city">
  				Paris
			</button>
			<button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent button-sponsor">
  				Become a sponsor
			</button>
    	</div>
    );
  }
}

export default SubMenu;