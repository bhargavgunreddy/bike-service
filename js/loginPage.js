/* loginPage.js */

import React from 'react';
import Utility from './utility.js';


class loginComp extends React.Component {
	constructor( context) {
	    super(context);
		this.state = {
	      userData: {}
	    };
	}

	redirectToMainPage(){
		console.log("redirection");
		if(window.location.pathname){
			this.context.router.replace('/home');
		}
		else
			console.log("error in redirecting url");
	}

	handleSubmit(){
		console.log("handle submit", this.state);
		this.state.userData = {
			uname: this.refs.username.value,
			pwd: this.refs.password.value
		};
		
		Utility.makeAjaxData('/rest', 'POST', this.state.userData, this.redirectToMainPage.bind(this));
	}

	render(){
		console.log("state-->", this.state);
		console.log("state-->", this.context);
		return <div>
					<div className = "form-group">
						<form className = "form" name = "loginForm">
							<table className = "table">
							  <tbody className = "table-bordered">
								<tr className = "form-group">
									<td><label htmlFor = "username">Username:</label></td>
									<td>
										<div className="input-group">
											<span className = "input-group-addon">
												<span className="glyphicon glyphicon-lock"></span>
											</span>
											<input ref = "username" className = "form-control" id = "username" />
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
									<td><button type = "button" className = "btn btn-default login" onClick = {this.handleSubmit.bind(this)}>Login</button></td>
								</tr>
							  </tbody>
							</table>
						</form>
				</div>
				</div>;
	}
};

loginComp.contextTypes = {
  router: React.PropTypes.object.isRequired
}


module.exports = loginComp;
