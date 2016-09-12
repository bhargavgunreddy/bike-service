/* root.js */

import React from 'react';
import {Link } from 'react-router';
import Utility from './utility.js';


class HomeComp extends React.Component {
	constructor(props, context){
		super(props);
		this.state = {};
	}

	componentDidMount(){
		//Utility.makeAjaxData()
	}
	
    render() {
      return <div className = "row">
			
			<div className = "col-md-4">
				<div className = "col-md-6">
					<span>Login Successful</span>
					<br/>
					<span>23</span>
				</div>
				<div className = "col-md-6">
					<span>List of Tickets Today</span>
					<br/>
					<table>
						<thead>
							<tr>
								<th colSpan = "2">List of tickets</th>
								</tr>
						</thead>
						<tbody>
							<tr>
								<td >1</td>
								<td >General Servicing</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>;
  }
}


module.exports = HomeComp;