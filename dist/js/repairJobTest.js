'use strict';

var React = require('react');
var shallow = require('enzyme');
var sinon = require('sinon');
var TestJob = require('./testComp.js');

describe('Repair Comp Test ::', function () {

	it('renders component', function () {
		var wrapper = shallow('TestJob');
		expect(wrapper.find('#button')).to.have.length(1);
	});
});