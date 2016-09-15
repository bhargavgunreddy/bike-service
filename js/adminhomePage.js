/* root.js */

import React from 'react';
import {Link } from 'react-router';
import Utility from './utility.js';


class AdminHomeComp extends React.Component {
	constructor(props, context){
		super(props);
		this.state = {
			serviceRequests: []
		};
	}

	goBack(){
		this.context.router.goBack(-1);
	}

	componentWillMount(){
		Utility.makeAjaxData('/getServiceRequests', 'GET', "" ,this.populateData.bind(this));
	}

	populateData(data){
		console.log("home page Response",data);
		this.setState({serviceRequests: data});
		//this.state.serviceRequests = data;
	}

	buildServiceRows(list, index){

		return <tr key = {list._id}>
			<td>{list.id}</td>
			<td>{list.regnum}</td>
			<td>{list.underWarranty}</td>
			<td>{list.jobtype}</td>
			<td>{list.part}</td>
			<td>{list.desc}</td>
			<td>{list.status}</td>
		</tr>;
	}
	
    render() {
    	//console.log("params list", this.props.userInfo);
    	var displayComp = this.state.serviceRequests.length > 0 ? 
    				this.state.serviceRequests.map(this.buildServiceRows) : 
    				<tr><td colSpan = "5">Great Insights takes time</td></tr>;
      return <div className = "row adminComp">
		      	<div className = "col-md-12 fullDimension">
					<div className = "col-md-2"></div>
						<table className = "table tablebordered serviceReqTable">
							<thead>
								<tr className = "success">
									<th>ServiceId</th>
									<th>Reg Num</th>
									<th>Warranty</th>
									<th>Job Type</th>
									<th>Part</th>
									<th>Description</th>
									<th>Status</th>
								</tr>
							</thead>
							<tbody>
								{displayComp}
							</tbody>
						</table>
					<div className = "col-md-2"></div>
				</div>
		</div>;
  }
}

AdminHomeComp.contextTypes = {
  router: React.PropTypes.object.isRequired
}


module.exports = AdminHomeComp;