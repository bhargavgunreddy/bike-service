/* loginPage.js */

import React from 'react';
import Utility from './utility.js';
import {IndexLink, Link } from 'react-router';


var loginComp = React.createClass({
	getInititalState: function(){
		return {}
	},
	
	handleSubmit: function(){
		var userData = {
			uname: this.refs.username.value,
			pwd: this.refs.password.value
		};

		var response = Utility.makeAjaxData('/login', 'POST', userData);

		
	},
	componentDidMount: function(){
		
	},
	render: function(){
		return <div>
			<div className = "form-group">
				<IndexLink to = "/app" className =""><button  type = "button" className = "btn btn-default">BACK</button></IndexLink><br/>
			</div>
			<form className = "form">
				<table className = "table">
				  <tbody className = "table-bordered">
					<tr className = "form-group">
						<td><label htmlFor = "username">Username:</label></td>
						<td>
							<div className="input-group">
								<span className = "input-group-addon">
									<span className="glyphicon glyphicon-lock"></span>
								</span>
								<input ref = "username" className = "form-control" id = "username" type = "number"/>
							</div>
							</td>
					</tr>
					<tr className = "form-group">
						<td className = "col-md-4">
							<label htmlFor = "password" className = "control-label">Password</label>
						</td>
						<td className = "col-md-8">
								<input ref = "password" className = "form-control" id = "password"/>
						</td>
					</tr>
					<tr className = "form-group">
						<td><button type = "button" className = "btn btn-default">Reset</button></td>
						<td><button type = "button" className = "btn btn-default" onClick = {this.handleSubmit}>Login</button></td>
					</tr>
				  </tbody>
				</table>
			</form>
		</div>;
	}
});

module.exports = loginComp;