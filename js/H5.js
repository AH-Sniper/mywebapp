// 内容管理对象

function H5(){

	this.id = ('h5_'+Math.random()).replace('.','_');
	this.el = $('<div class="h5" id="'+this.id+'"></div>').hide();
	this.page = [];

	$('body').append(this.el);

	// 新增一个页
	this.addPage = function(name,text){
		var page = $('<div class="section h5_page h5_page_'+name+'"></div>');
		page.text(text);

		this.page.push(page);
		this.el.append(page);

		if( typeof this.whenAddPage === 'function'){
			this.whenAddPage();
		}
		return this;
	};
	// 新增一个组件
	this.addComponent = function(name,cfg){
		var cfg = cfg || {};
		// $.extend() 如果只有一个对象参数，则是扩展插件写法，若是多个参数，则是混入式继承写法
		cfg = $.extend({
			type : 'base'
		},cfg);  

		var component; // 定义一个变量，存储组件元素
		// 获取当前已添加的page中的最后一个，方便链式调用
		/*
			h5.addPage('a','b')
				.addComponent('x',{})
				.addComponent('y',{})
			  .addPage('c','d')
			  	.addComponent('z',{})
		
		*/
		// [0] 是因为slice返回的是一个数组
		var page = this.page.slice(-1)[0];

		switch(cfg.type){
			case 'base':
				component = new H5ComponentBase(name,cfg);
				break;
			case 'polyline':
				component = new H5ComponentPolyline(name,cfg);
				break;
			case 'pie':
				component = new H5ComponentPie(name,cfg);
				break;
			case 'bar':
				component = new H5ComponentBar(name,cfg);
				break;
			case 'bar_v':
				component = new H5ComponentBar_v(name,cfg);
				break;
			case 'radar':
				component = new H5ComponentRadar(name,cfg);
				break;
			case 'ring':
				component = new H5ComponentRing(name,cfg);
				break;
			case 'point':
				component = new H5ComponentPoint(name,cfg);
				break;
			default:
				component = new H5ComponentBase(name,cfg);
				break;	
		}

		page.append(component);

		return this;
	};

	// H5对象初始化呈现
	this.loader = function(firstPage){
		var that = this;
		setTimeout(function(){
			that.el.fullpage({
				onLeave : function(index,nextIndex,direction){
					$(this).find('.h5_component').trigger('onleave');
				},
				afterLoad : function(anchorLink,index){
					$(this).find('.h5_component').trigger('onload');
				},
			});

			that.el.show();
			
			that.page[0].find('.h5_component').trigger('onload');

			if(firstPage){
				$.fn.fullpage.moveTo(firstPage);
			}
		},1000);
	}
	
	return this;
}