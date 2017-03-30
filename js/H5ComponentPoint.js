// 散点图组件对象

function H5ComponentPoint(name,cfg){
	var component = new H5ComponentBase(name,cfg);

	// 以第一个数据的比例为大小的 100%
	var base = cfg.data[0][1];

	$.each(cfg.data,function(index, item){
		// item : ['B项', .2, 'yellow', 0, '-120%']
		var point = $('<div class="point point_index_'+index+'"></div>');
		point.text(item[0]+'-'+(item[1]*100)+'%');

		var per = (item[1]/base)*100+'%';

		point.width(per).height(per)
			 .css('background-color',item[2])
			 .css('line-height',component.height()*parseInt(per)/100+'px');

		if(item[3] !== undefined){
			point.css({
				'left' : item[3],
				'top' : item[4]
			});
		}

		component.append(point);

	});

	component.find('.point').on('click',function(){
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
	});

	return component;
}