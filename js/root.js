/* root.js */

import React from 'react';
import {Link } from 'react-router';


class ParentComp extends React.Component {
	constructor(props){
		super(props);
		this.state = {};
	}
  render() {
    return <div className = "row">
			<div className = "col-md-8">
				<button><Link to = "/repair">REPAIR</Link></button>
				<button>SERVICE</button>
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
		</div>;
  }
}


module.exports = ParentComp;