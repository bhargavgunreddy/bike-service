/*var LoginComp = require('./../js/loginPage.js');
var React = require('react');
var TestUtils = require('react-addons-test-utils');

describe(" Login component test", function(){
	beforeEach(function(){
		//var component = TestUtils.renderIntoDocument(<LoginComp/>);
		var component = TestUtils.renderIntoDocument(React.createElement(LoginComp, null));
		this.renderedDOM = React.findDOMNode(component);
	});

	it("render Login form into page", function(){
		var renderedForm = this.renderedDOM.querySelector('form');
		expect(renderedForm.attr('name')).toEqual('loginForm');
	});

	it("render Login Component into page", function(){
		TestUtils.Simulate.change(
    		TestUtils.findRenderedDOMComponentWithClass (component, 'login')
  		);
  		expect(component.state).length.not.toEqual(0);
	});
});*/