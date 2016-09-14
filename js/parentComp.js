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
	
	handleLogin(user){
		//console.log("user stored", user);
		this.state.userObject = user;
	}

	handleSubmit(userData){
	//	console.log("handle submit", userData);
		this.state.userData = userData ? userData : "";
		//console.log("handle submit", userData, this.state.userData);
		
		Utility.makeAjaxData('/rest', 'POST', this.state.userData, this.redirectToMainPage.bind(this));
	}

	redirectToMainPage(){
		console.log("redirection");
		if(window.location.pathname){
			this.handleLogin();
			this.context.router.replace('/home');
		}
		else
			console.log("error in redirecting url");
	}

    render() {
    	//console.log("------>> ", this.state.userData);
    return <div className = "row">
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
												parentScope: this
											})}
		   </div>;
    }
}

ParentComp.contextTypes = {
  router: React.PropTypes.object.isRequired
}


module.exports = ParentComp;

