/* repairJob.js */

import React from 'react';
import {IndexLink, Link } from 'react-router';
import Utility from './utility.js';

class ServiceJobComp extends React.Component{
	constructor(props, context){
		super(props);
		this.state = {};
	}

	goBack(){
		this.context.router.goBack(-1);
	}

	render(){
		return <div>
			<div className = "form-group btn-btn-success col-md-12">
		      		<div className = "col-md-2"></div>
					<button  type = "button" className = "btn btn-success col-md-1" 
							onClick = {this.goBack.bind(this)}>BACK</button><br/>
					<div className = "col-md-9"></div>
				</div>
			<form className = "form">
				<table className = "table">
				  <tbody className = "table-bordered">
					<tr className = "form-group">
						<td><label htmlFor = "repairVehicleNum">Vehicle Reg No:</label></td>
						<td>
							<div className="input-group">
								<span className = "input-group-addon">
									<span className="glyphicon glyphicon-lock"></span>
								</span>
								<input className = "form-control" id = "repairVehicleNum" type = "number"/>
							</div>
							</td>
					</tr>
					<tr className = "form-group">
						<td className = "col-md-4">
							<label htmlFor = "repairUnderWarranty" className = "control-label">Repair under Warranty ?</label>
						</td>
						<td className = "col-md-8">
							<select id = "repairUnderWarranty" className = "form-control">
								<option value = "yes">Yes</option>
								<option value = "no">No</option>
							</select>
						</td>
					</tr>
					<tr className = "form-group">
						<td><label htmlFor = "repairOrReplace">Job Type</label></td>
						<td>
							<select className = "form-control" id = "repairOrReplace">
								<option value = "repair">Repair</option>
								<option value = "replace">Replace</option>
							</select>
						</td>
					</tr>
					<tr className = "form-group">
						<td><label htmlFor = "repairPart">Part to be Repaired</label><br/>
							<span>Select Not sure if you are not sure of the cause</span>
						</td>
						<td><select id = "repairPart" className = "form-control">
								<option value = "engine">Engine</option>
								<option value = "brake">Brake</option>
								<option value = "body">Body</option>
								<option value = "interior">Interior</option>
								<option value = "electricals">Electricals</option>
								<option value = "notsure">Not Sure</option>
							</select></td>
					</tr>
					<tr className = "form-group">
						<td><label htmlFor = "repairDesc"> Description </label></td>
						<td><textarea id = "repairDesc" className = "form-control"></textarea></td>
					</tr>
					<tr className = "form-group">
						<td><button type = "button" className = "btn btn-default">RESET</button></td>
						<td><button type = "button" className = "btn btn-default">SUBMIT</button></td>
					</tr>
				  </tbody>
				</table>
			</form>
		</div>;
	}
};

ServiceJobComp.contextTypes = {
  router: React.PropTypes.object.isRequired
}

module.exports = ServiceJobComp;