'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _loginPage = require('./../js/loginPage.js');

var _loginPage2 = _interopRequireDefault(_loginPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe(" login component ", function () {

	var onButtonClick = _sinon2.default.spy();
	var login = (0, _enzyme.shallow)(_react2.default.createElement(_loginPage2.default, { handleSubmit: onButtonClick }));

	it('should contain input field', function () {
		var check = _react2.default.createElement('input', { ref: 'username', type: 'text', className: 'form-control', id: 'username' });
		expect(login.contains(check)).toEqual(true);
	});

	it('login button click', function () {

		login.find('button.login').simulate('click');
		expect(onButtonClick.calledOnce).toEqual(true);
		//expect(login.contains(form)).toEqual(false);
	});

	it('should contain form class', function () {
		var form = _react2.default.createElement(
			'button',
			{ type: 'button', className: 'btn btn-default' },
			'Reset'
		);
		expect(login.contains(form)).toEqual(true);
	});
});