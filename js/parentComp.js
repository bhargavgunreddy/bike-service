/* root.js */

import React from 'react';
import {Link } from 'react-router';
import Utility from './utility.js';

class ParentComp extends React.Component {
	constructor(props, context){
		super(props);
		this.state = {
			userData:{}
		};
	}
	
	handleSubmit(userData){
	//	console.log("handle submit", userData);
		this.state.userData = userData ? userData : "";
		//console.log("handle submit", userData, this.state.userData);
		
		Utility.makeAjaxData('/getUserDetails', 'POST', this.state.userData, this.redirectToMainPage.bind(this));
	}

	handleLogout(){
		console.log("User will be logged out");
		this.state.userData = {};
		this.context.router.replace('/login');
	}

	redirectToMainPage(param){
		//console.log("redirection", param, param.length);
		// null check
		if(param.length > 0){
			this.state.userData = param[0];
			//console.log("redirection", param[0]);
			if(this.state.userData.role){
				this.state.userData.role.toString().trim().toLowerCase() === "admin" ? 
						this.context.router.replace('/admin') : this.context.router.replace('/home');	
			}else{
				console.log("No role assigned to user");
			}
		}
		else
			console.log("error in redirecting url");
	}

    render() {
    	//console.log("->", this.state.userData.role, this.state.userData.role ? "block" : "none" );
    	var logoutStyle = {"display": this.state.userData.role ? "block" : "none" };
    return <div className = "row parentComp">
    			<div className = "col-md-12 col-sm-12" style = {logoutStyle}>
    				<button className = "btn btn-info" onClick = {this.handleLogout.bind(this)}>LOGOUT</button>
    			</div>
				<div className = "col-md-12 col-sm-12 ticketsCountBanner">
					<div className = "col-md-8 col-sm-2"></div>
					<div className = "col-md-4 col-sm-10">
							<div className = "col-md-6 col-sm-6 circle">
								<span className = "col-md-8 col-sm-12 circleLabel">Total Tickets</span>  
								<span className="col-md-4 col-sm-12">23</span>
							</div>
							<div className = "col-md-6 col-sm-6 circle">
								<span className = "col-md-8 col-sm-12 circleLabel">Tickets Today</span>
								<span className = "col-md-4 col-sm-12">5</span>
							</div>
					</div>
				</div>
				{this.props.children && React.cloneElement(this.props.children, {
												handleSubmit: this.handleSubmit,
												handleLogin: this.handleLogin,
												parentScope: this,
												userInfo: this.state.userData
											})}
		   </div>;
    }
}

ParentComp.contextTypes = {
  router: React.PropTypes.object.isRequired
}


module.exports = ParentComp;

