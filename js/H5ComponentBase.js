// 基本图文组件对象
/*
	cfg = {
		type : 'base',
		text : 'xxxx'
	}
*/

function H5ComponentBase(name,cfg){
	this.cfg = cfg || {};
	this.id = ('h5_c_'+Math.random()).replace('.','_'); 

	var cls = 'h5_component_'+this.cfg.type+' h5_component_name_'+name;

	var component = $('<div class="h5_component '+cls+'" id="'+this.id+'"></div>');

	// 短路运算 A && B , 若A为真,则运行B
	this.cfg.text && component.text(this.cfg.text);
	// 配置的宽高是实际效果宽高的两倍，是为了在 Ritina 屏幕下也能清晰显示
	this.cfg.width && component.width(this.cfg.width/2);
	this.cfg.height && component.height(this.cfg.height/2);

	this.cfg.css && component.css(this.cfg.css);
	this.cfg.bg && component.css('background-image','url('+this.cfg.bg+')');

	if(this.cfg.center === true){
		component.css({
			'left' : '50%',
			'marginLeft' : (this.cfg.width/4*-1)+'px'
		})
	}

	// 接受 .page 的 onLeave 事件(触发component的onleave)和 afterLoad 事件(触发component的onload)
	var that = this;
	component.on('onload',function(){
		setTimeout(function(){
			component.addClass('h5_component_'+that.cfg.type+'_load');
			component.removeClass('h5_component_'+that.cfg.type+'_leave');

			that.cfg.animateIn && component.animate(that.cfg.animateIn);
		},cfg.delay || 0);

		return false;  // 阻止事件继续向上传播
	});
	component.on('onleave',function(){
		setTimeout(function(){
			component.addClass('h5_component_'+that.cfg.type+'_leave');
			component.removeClass('h5_component_'+that.cfg.type+'_load');

			that.cfg.animateOut && component.animate(that.cfg.animateOut);
		},cfg.delay || 0);

		return false;
	});

	// 添加 onclick 功能
	if(typeof cfg.onclick === 'function'){
		component.on('click',cfg.onclick);
	}

	return component;
}