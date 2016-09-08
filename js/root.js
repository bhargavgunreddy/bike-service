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
			<div className = "col-md-8">
				<Link to = "/repair"><button type = "button" className = "btn btn-default">REPAIR</button></Link>
				<Link to = "/service"><button type = "button" className = "btn btn-default">SERVICE</button></Link>
			</div>
			<div className = "col-md-4">
				<div className = "col-md-6">
					<span>Total Tickets</span>
					<br/>
					<span>23</span>
				</div>
				<div className = "col-md-6">
					<span>Tickets Today</span>
					<br/>
					<span>5</span>
				</div>
			</div>
			<div>
				{this.props.children && React.cloneElement(this.props.children, {handleSubmit: this.handleSubmit})}
			</div>
		</div>;
  }
}


module.exports = ParentComp;