// 垂直柱状图组件对象

function H5ComponentBar_v(name,cfg){
	 
	var component = new H5ComponentBar(name,cfg);

	var width = 100/cfg.data.length;
	
	component.find('.line').css('width',width+'%');

	$.each(component.find('.rate'),function(){
		var w = $(this).css('width');
		$(this).height(w).width('');
	})

	$.each(component.find('.per'),function(){
		$(this).appendTo($(this).prev());
	})

	return component;

}