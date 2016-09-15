/* root.js */

import React from 'react';
import {Link } from 'react-router';
import Utility from './utility.js';


class AdminHomeComp extends React.Component {
	constructor(props, context){
		super(props);
		//this.state = {};
	}

	componentDidMount(){
		Utility.makeAjaxData('/getServiceRequests', 'GET', "" ,this.populateData.bind(this));
	}

	populateData(data){
		console.log(data);
		this.serviceRequests = data;
	}

	buildServiceRows(list){

		return <tr>
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
    	console.log("params list", this.serviceRequests);
      return <div className = "row">
				<div className = "col-md-12">
					<div className = "col-md-2"></div>
						<table>
							<thead>
								<th>ServiceId</th>
								<th>Reg Num</th>
								<th>Warranty</th>
								<th>Job Type</th>
								<th>Part</th>
								<th>Description</th>
								<th>Status</th>
							</thead>
							<tbody>
								{this.serviceRequests.map(this.buildServiceRows)}
							</tbody>
						</table>
					<div className = "col-md-2"></div>
				</div>
		</div>;
  }
}


module.exports = AdminHomeComp;