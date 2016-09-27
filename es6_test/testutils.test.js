// 	import Greeter from 'components/Greeter';
	import React from 'react';
	import ReactTestUtils from 'react-addons-test-utils';
	import LoginComp from './../js/loginPage.js';
	//import {expect} from 'chai-react';
	import {shallow} from 'enzyme';
	//import expect from 'karma-webpack';
		
	//import {shallow} from 'enzyme';

	//var renderer = ReactTestUtils.createRenderer();

	it('LoginComp', () => {
  
  
	 	const shallowRenderer = ReactTestUtils.createRenderer();
		shallowRenderer.render(<LoginComp />);

		const component = shallowRenderer.getRenderOutput();
		console.log(component)

	 	expect(component.type).toBe('div');

 	});