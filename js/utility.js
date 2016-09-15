
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

utility.makeAjaxData = function(url, method, data, successCallback, errorCallback){
	console.log("inside makeAjaxData");
	//var promise = new Promise(function(resolve, reject) {
		
			$.ajax({ 
				url: url,
				method: method,
				params: JSON.stringify(data),
				data: data
			}).done(function(res){
				
				successCallback(res);
				//resolve(res);	//winston.log('info', 'ajaxCall Success', res);
			}).fail(function(err){
				console.log("error", err);
						//winston.log('error', 'ajaxCall failed', err);
				//reject(err);
			});	
//});
}

module.exports = utility;


