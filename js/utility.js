
import $ from 'jquery';


var utility = {};

utility.makeAjax = function(url, method, data, successCallback, errorCallback){
	$.ajax({ 
				url: url,
				method: method,
				data: data
			}).done(function(res){
				successCallback.apply(this,[res]);
			}).fail(function(err){
				errorCallback.apply(this,[err]);
			});	
};

utility.makeAjaxData = function(url, method, data){
	$.ajax({ 
				url: url,
				method: method,
				data: data
			}).done(function(res){
				//winston.log('info', 'ajaxCall Success', res);
				return res;
			}).fail(function(err){
				//winston.log('error', 'ajaxCall failed', err);
				return err;
			});	
}

module.exports = utility;


