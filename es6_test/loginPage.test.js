
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import LoginComp from './../js/loginPage.js';

describe(" login component ", ()=>{

	const onButtonClick = sinon.spy();
	const login = shallow(<LoginComp handleSubmit = {onButtonClick}/>);

	it('should contain input field', () => {
  	  	const check = <input ref = "username" type = "text" className = "form-control" id = "username" />;
  	  	expect(login.contains(check)).toEqual(true);
	});

	it('login button click', () => {
		
  	  	login.find('button.login').simulate('click');
    	expect(onButtonClick.calledOnce).toEqual(true);
		//expect(login.contains(form)).toEqual(false);
	});


	it('should contain form class', () => {
  	  	const form  = <button type = "button" className = "btn btn-default">Reset</button>;
		expect(login.contains(form)).toEqual(true);
	});


});