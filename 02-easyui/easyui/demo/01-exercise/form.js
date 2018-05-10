var formObj = {};

formObj.init = function() {
	$('#vv').validatebox({
	    required: true,
	    validType: 'email'
	});
};

$(document).ready(function(){

	formObj.init();
});


