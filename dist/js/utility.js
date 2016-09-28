"use strict";

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var utility = {};

utility.makeAjax = function (url, method, data, successCallback, errorCallback) {
	_jquery2.default.ajax({
		url: url,
		method: method,
		data: data
	}).done(function (res) {
		successCallback.apply(this, [res]);
	}).fail(function (err) {
		errorCallback.apply(this, [err]);
	});
};

utility.makeAjaxData = function (url, method, data, successCallback, errorCallback) {
	console.log("inside makeAjaxData");
	//var promise = new Promise(function(resolve, reject) {

	_jquery2.default.ajax({
		url: url,
		method: method,
		params: JSON.stringify(data),
		data: data
	}).done(function (res) {

		successCallback(res);
		//resolve(res);	//winston.log('info', 'ajaxCall Success', res);
	}).fail(function (err) {
		console.log("error", err);
		//winston.log('error', 'ajaxCall failed', err);
		//reject(err);
	});
	//});
};

module.exports = utility;