
/* main.js */

import React from 'react';
import { ReactDOM, render } from 'react-dom';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'
import ParentComp from './parentComp.js';
import RepairJobComp from './repairJob.js';
import ServiceJobComp from './serviceJob.js';
import LoginComp from './loginPage.js';
import AdminHomeComp from './adminhomePage.js';
import HomeComp from './homePage.js';
import LoginRequired from './loginReq.js';


require('./../node_modules/bootstrap/dist/css/bootstrap.css');
require('./../node_modules/font-awesome/css/font-awesome.css');
require('./../css/custom.css');

render(<Router history={browserHistory}>
		<Route path='/' component={ParentComp}>
		   <IndexRedirect to = "/login"/>
		  <Route path='/login' component={LoginComp}/>
		  <Route handler={LoginRequired}>
		  	<Route path='/admin' component={AdminHomeComp}/>
		  	<Route path='/home' component={HomeComp}/>
		  	<Route path='/repair' component={RepairJobComp} />
		  	<Route path='/service' component={ServiceJobComp} />
		  </Route>  	
		</Route>
	  </Router>,
  document.getElementById('root'));


