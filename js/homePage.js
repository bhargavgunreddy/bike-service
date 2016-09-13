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
				<div className = "col-md-12">
					<div className = "col-md-2"></div>
					<div className = "col-md-8">
						<div className = "col-md-6">
							<Link to = "/repair"><button type = "button" className = "btn btn-default">REPAIR</button></Link>
						</div>
						<div className = "col-md-6">
							<Link to = "/service"><button type = "button" className = "btn btn-default">SERVICE</button></Link>
						</div>
					</div>
					<div className = "col-md-2"></div>
				</div>
		</div>;
  }
}


module.exports = HomeComp;