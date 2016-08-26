/* render.js */


var ReactDOM = require('react-dom');
var React = require('react');

// var root = require("./root.js");
// var rootComp = root.ParentComp;

// console.log("Just to check concatenation", rootComp);

ReactDOM.render(<div>REACT COMPONENT</div>, document.getElementById("root"));
ReactDOM.render(<ParentComp/>, document.getElementById("root1"));

