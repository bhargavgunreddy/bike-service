/* root.js */

var React = require('react');

var ParentComp = React.createClass({
	getInitialState: function(){
		return {}
	},
	
	render: function(){
		return <div>
			<button>REPAIR</button>
			<button>SERVICE</button>
		</div>;
	}
});

//module.exports = ParentComp;