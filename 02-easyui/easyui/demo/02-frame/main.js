var frameMain = {}

frameMain.init = function() {

	/** 配置West布局 **/
	// 配置并创建accordion
	$("aa").accordion({
		animate: true
	});
	// 初始化 参数管理
	$("#paramTree").tree({
		onClick: function(node){
			alert(node.text + " " + node.url);  // alert node text property when clicked
		},
		data: [{
			text: '参数目录列式',
			url: 'param/list'
		},{
			text: '参数明细维护',
			url: 'param/detailEdit'
		}]
	});
	// 初始化 活动管理
	$("#actiTree").tree({
		onClick: function(node){
			alert(node.text + " " + node.url);  // alert node text property when clicked
		},
		data: [{
			text: '活动列式',
			url: 'param/list'
		},{
			text: '活动明细维护',
			url: 'param/detailEdit'
		}]
	});
	// 初始化 订单管理
	$("#orderTree").tree({
		onClick: function(node){
			alert(node.text + " " + node.url);  // alert node text property when clicked
		},
		data: [{
			text: '订单列式',
			url: 'param/list'
		},{
			text: '订单维护',
			url: 'param/detailEdit'
		}]
	});
	// 初始化 用户管理
	$("#userTree").tree({
		onClick: function(node){
			alert(node.text + " " + node.url);  // alert node text property when clicked
		},
		data: [{
			text: '用户列式',
			url: 'param/list'
		},{
			text: '用户维护',
			url: 'param/detailEdit'
		}]
	});

	// 新增参数
	$('#aa').accordion('add', {
		title: '',
		content: '<ul>'
			+ "<li class='menu-link'><a href='#'>参数目录列式</a></li>"
			+ "<li class='menu-link'><a href='#'>参数明细维护</a></li>"
			+ "</ul>",
		selected: false
	});
	$('#aa').accordion('add', {
		title: '活动管理',
		content: '活动管理内容',
		selected: false
	});

};

$(document).ready(function(){
	frameMain.init();
});
