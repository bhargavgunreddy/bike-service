
/* main.js */

import React from 'react';
import { ReactDOM, render } from 'react-dom';
import { Router, Route, Redirect, IndexRedirect, IndexRoute, Link, browserHistory, hashHistory } from 'react-router'
import ParentComp from './root.js';
import RepairJobComp from './repairJob.js';
import ServiceJobComp from './serviceJob.js';



require('./../node_modules/jquery/dist/jquery.js');
require('./../node_modules/bootstrap/dist/css/bootstrap.css');
require('./../node_modules/font-awesome/css/font-awesome.css');

// render((
  // <Router history={browserHistory}>
    // <Route path="/">
		// <IndexRedirect to="/home"/>
		// <Route path="/home" component={ParentComp}/>
		// <Route path="/repair" component={RepairJobComp}/>
		// <Route path="/*" >
			// <Redirect to ="/"/>
		// </Route>
	// </Route>
  // </Router>
// ), document.getElementById('root'));


class Home extends React.Component {
	constructor(props){
		super(props);
		this.state = {};
	}
  render() {
    return <div className = "row">
				CURRENTLY RENDERING HOME
			</div>;
  }
}


render(<Router history={browserHistory}>
		<Route path='/' component={ParentComp}>
		  <IndexRoute component={Home} />
		  <Route path='/repair' component={RepairJobComp} myprop = "Bhargav"/>
		  <Route path='/service' component={ServiceJobComp} />
		</Route>
	  </Router>,
  document.getElementById('root'));


