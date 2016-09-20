var React = require('react');
var shallow = require('enzyme');
var sinon = require('sinon');
var TestJob = require('./testComp.js');



describe('Repair Comp Test ::', () => {

	it('renders component', ()=>{
		const wrapper = shallow('TestJob');
		expect(wrapper.find('#button')).to.have.length(1);
	});
});