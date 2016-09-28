/* loginPage.js */

import React from 'react';



class loginComp extends React.Component {
	constructor(props, context) {
	    super(props, context);
	}

	handleLoginSubmit(){
		//console.log("handle submit", this.state);
		var userData = {
			uname:  this.refs.username ? this.refs.username.value : "",
			pwd: this.refs.password ? this.refs.password.value : ""
		};
		this.props.handleSubmit.apply(this.props.parentScope ,[userData]);
		
		//Utility.makeAjaxData('/rest', 'POST', this.state.userData, this.redirectToMainPage.bind(this));
	}

	render(){
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
											<input ref = "username" type = "text" className = "form-control" id = "username" />
										</div>
										</td>
								</tr>
								<tr className = "form-group">
									<td className = "col-md-4">
										<label htmlFor = "password" className = "control-label">Password</label>
									</td>
									<td className = "col-md-8">
											<input ref = "password" type = "password" className = "form-control" id = "password"/>
									</td>
								</tr>
								<tr className = "form-group">
									<td><button type = "button" className = "btn btn-default">Reset</button></td>
									<td><button type = "button" className = "btn btn-default login" onClick = {this.handleLoginSubmit.bind(this)}>Login</button></td>
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
