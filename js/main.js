
/* main.js */

import React from 'react';
import { ReactDOM, render } from 'react-dom';
import { Router, Route, Redirect, IndexRedirect, IndexRoute, Link, browserHistory, hashHistory } from 'react-router'
import ParentComp from './root.js';
import RepairJobComp from './repairJob.js';
import ServiceJobComp from './serviceJob.js';
import LoginComp from './loginPage.js';


require('./../node_modules/bootstrap/dist/css/bootstrap.css');
require('./../node_modules/font-awesome/css/font-awesome.css');


/*class Home extends React.Component {
	constructor(props){
		super(props);
		this.state = {};
	}
  render() {
    return <div className = "row" name="homeComp">
				CURRENTLY RENDERING HOME
			</div>;
  }
}
*/

render(<Router history={browserHistory}>
		<Route path='/' component={ParentComp}>
		   <IndexRedirect to = "/login"/>
		  <Route path='/login' component={LoginComp}/>
		  <Route path='/repair' component={RepairJobComp} />
		  <Route path='/service' component={ServiceJobComp} />
		</Route>
	  </Router>,
  document.getElementById('root'));


