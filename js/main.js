
/* main.js */

import React from 'react';
import { ReactDOM, render } from 'react-dom';
import { Router, Route, Redirect, IndexRedirect, Link, browserHistory } from 'react-router'
import ParentComp from './root.js';
import RepairJobComp from './repairJob.js';

require('./../css/bootstrap.css');



render((
  <Router history={browserHistory}>
    <Route path="/">
		<IndexRedirect to="/home"/>
		<Route path="/home" component={ParentComp}/>
		<Route path="/repair" component={RepairJobComp}/>
		<Route path="/*" >
			<Redirect to ="/"/>
		</Route>
	</Route>
  </Router>
), document.getElementById('root'));



