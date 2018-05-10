var menuAndButton = {};

menuAndButton.init = function() {


	$('#btn').linkbutton({
	    iconCls: 'icon-search',
	    onClick: function(){
	    	alert("123");
	    }
	});

	// Menu
	$('#mm').menu({
	    onClick:function(item){
			//...
	    }
	});
	// append a top menu item
	$('#mm').menu('appendItem', {
		text: 'New Item',
		iconCls: 'icon-ok',
		onclick: function(){alert('New Item')}
	});
	$('#mm').menu('appendItem', {
		text: 'Open',
		iconCls: 'icon-open',
		onclick: function(){alert('New Opem')}
	});

	// append a menu separator
	$('#mm').menu('appendItem', {
		separator: true
	});
	// append a sub menu item
	var item = $('#mm').menu('findItem', 'Open');  // find 'Open' item
	$('#mm').menu('appendItem', {
		parent: item.target,  // the parent item element
		text: 'Open Excel',
		iconCls: 'icon-excel',
		onclick: function(){alert('Open Excel')}
	});

	$('#mm').menu('show', {
	    left: 200,
	    top: 100
	});

};

$(document).ready(function(){

	menuAndButton.init();
});


