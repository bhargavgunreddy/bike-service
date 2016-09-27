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


import React from 'react';
import LoginComp from './../js/loginPage.js';
//import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
//import sinon from 'sinon';
//import chai from 'chai'
//import chaiEnzyme from 'chai-enzyme'

//import chai, {expect} from 'chai';
//import matcher from 'chai-react-element';
//chai.use(matcher);

//chai.use(chaiEnzyme()) // Note the invocation at the end


/*it('LoginComp', () => {
  const component = renderer.create(
    <LoginComp />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
*/
describe("TEST!", ()=>{


it('LoginComp 2', () => {
  
  const login = shallow(
    <LoginComp />
  );
	
  	//console.log(login);
	expect(login.length).toEqual(0);

	//expect(login).to.include.elementOfType('div').to.include.prop('className', 'lognForm');

	//expect(login).to.have.elementOfType('form').to.include.prop('className', 'loginForm');
  	/*expect(login.find('form').closest('.form-group'))
  			.toEqual('loginForm');*/
});

});