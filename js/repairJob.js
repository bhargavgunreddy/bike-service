/* repairJob.js */

import React from 'react';
import {IndexLink, Link } from 'react-router';

class RepairJobComp extends React.Component{
	constructor(props){
		super(props);
		this.state = {};
	}
	render(){
		return <div>
			<button><IndexLink to = "/">BACK</IndexLink></button><br/>
			<form className = "form">
				<table className = "table">
				  <tbody className = "table-bordered">
					<tr>
						<td><label htmlFor = "repairVehicleNum">Vehicle Reg No:</label></td>
						<td><input id = "repairVehicleNum"/></td>
					</tr>
					<tr>
						<td><label htmlFor = "repairUnderWarranty">Repair under Warranty ?</label></td>
						<td>
							<select id = "repairUnderWarranty">
								<option value = "yes">Yes</option>
								<option value = "no">No</option>
							</select>
						</td>
					</tr>
					<tr>
						<td><label htmlFor = "repairOrReplace">Job Type</label></td>
						<td>
							<select id = "repairOrReplace">
								<option value = "repair">Repair</option>
								<option value = "replace">Replace</option>
							</select>
						</td>
					</tr>
					<tr>
						<td><label htmlFor = "repairPart">Part to be Repaired</label>
							<span>Select Not sure if you are not sure of the cause</span>
						</td>
						<td><select id = "repairPart">
								<option value = "engine">Engine</option>
								<option value = "brake">Brake</option>
								<option value = "body">Body</option>
								<option value = "interior">Interior</option>
								<option value = "electricals">Electricals</option>
								<option value = "notsure">Not Sure</option>
							</select></td>
					</tr>
					<tr>
						<td><label htmlFor = "repairDesc"> Description </label></td>
						<td><textarea id = "repairDesc"></textarea></td>
					</tr>
					<tr>
						<td><button>RESET</button></td>
						<td><button>SUBMIT</button></td>
					</tr>
				  </tbody>
				</table>
			</form>
		</div>;
	}
};

module.exports = RepairJobComp;