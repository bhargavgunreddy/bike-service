/* repairJob.js */

var React = require('react');

var RepairJobComp = React.createClass({
	getInitialState: function(){
		return {}
	},
	
	render: function(){
		return <form>
				<table>
					<tr>
						<td><label for = "repairVehicleNum">Vehicle Reg No:</label></td>
						<td><input id = "repairVehicleNum"/></td>
					</tr>
					<tr>
						<td><label for = "repairUnderWarranty"></label></td>
						<td>
							<select id = "repairUnderWarranty">
								<option value = "yes">Yes</option>
								<option value = "no">No</option>
							</select>
						</td>
					</tr>
					<tr>
						<td><label for = "repairOrReplace"></label></td>
						<td>
							<select id = "repairOrReplace">
								<option value = "repair">Repair</option>
								<option value = "replace">Replace</option>
							</select>
						</td>
					</tr>
					<tr>
						<td><label for = "repairPart">Part to be Repaired</label>
							<apan>Select Not sure if you are not sure of the cause</label>
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
						<td><label for = ""></label></td>
						<td><input id = ""/></td>
					</tr>
					<tr>
						<td><label for = "repairDesc"> Description </label></td>
						<td><textarea id = "repairDesc"></textarea></td>
					</tr>
				</table>
			</form>;
	}
});

//module.exports = RepairJobComp;