/* root.js */

import React from 'react';
import {Link } from 'react-router';


class ParentComp extends React.Component {
	constructor(props){
		super(props);
		this.state = {};
	}
	handleSubmit(){
		console.log("parent handle submit");
		console.log(this.refs.repairVehicleNum.value, "<-");
	}
  render() {
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
				
				{this.props.children && React.cloneElement(this.props.children, {handleSubmit: this.handleSubmit})}
		   </div>;
  }
}


module.exports = ParentComp;