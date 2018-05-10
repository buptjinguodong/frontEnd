var exercizeObj = {};

exercizeObj.init = function() {

	// Layout
	$('#cc').layout();
	// collapse the west panel
	// $('#cc').layout('collapse','west');
	$('#cc').layout('add',{
	    region: 'west',
	    width: 180,
	    title: 'West Title',
	    split: true,
	    tools: [{
			iconCls:'icon-add',
			handler:function(){alert('add')}
	    },{
			iconCls:'icon-remove',
			handler:function(){alert('remove')}
	    }]
	});



	// accordion
	$('#aa').accordion({
	    animate:false
	});
	$('#aa').accordion('add', {
		title: 'New Title',
		content: 'New Content'
		// selected: false
	});
	$('#aa').accordion('add', {
		title: 'New Title',
		content: 'New Content',
		selected: false
	});


	// Tabs
	$('#tt').tabs({
	    border:false,
	    onSelect:function(title){
			// alert(title+' is selected');
	    }
	});
	$('#tt').tabs('add',{
		title: 'new tab',
		selected: false
		//...
	});
	$('#tt').tabs('add',{
	    title:'New Tab',
	    content:'Tab Body',
	    closable:true,
	    tools:[{
			iconCls:'icon-mini-refresh',
			handler:function(){
				alert('refresh');
			}
	    }]
	});

	// Panel
	$('#p').panel({
		// id:"p_panel",
	    width:500,
	    height:150,
	    title:'My Panel',
	    href:'content_url.php',
	    collapsible: true,
	    onLoad:function(){
			alert('loaded successfully');
	    },
	    tools:[
	    	{
			    iconCls:'icon-add',
			    handler:function(){alert('new')}
		    },
		    {
			    iconCls:'icon-save',
			    handler:function(){alert('save')}
		    }
	    ]
	}); 

	// Menu - 提供右键菜单功能 OR 提供仿真桌面菜单功能
	$('#mm').menu('show', {
	  left: 200,
	  top: 100
	});
	$("#mm").menu("hide");

	// 
	$('#dd1').draggable();
	$('#dd2').draggable({
		proxy:'clone'
	});
	$('#dd3').draggable({
		proxy:function(source){
			var p = $('<div class="proxy">proxy</div>');
			p.appendTo('body');
			return p;
		}
	});
};

$(document).ready(function(){

	exercizeObj.init();
});


