// 柱状图组件对象

function H5ComponentBar(name,cfg){
	 
	var component = new H5ComponentBase(name,cfg);

	// item : ["JavaScript", 0.8, "#ff7676"]
	var color = cfg.data[0][2] || '#99c0ff';

	$.each(cfg.data,function(index,item){
		// item : ["JavaScript", 0.8, "#ff7676"]
		var color = cfg.data[index][2] || '#99c0ff';

		var line = $('<div class="line"></div>');
		var name = $('<div class="name"></div>');
		var rate = $('<div class="rate"></div>');
		var per = $('<div class="per" style="color:'+color+'"></div>');

		// 柱状条的宽度
		var width = component.width() - 60 -20 -10;
		width = width * item[1];


		rate.html('<div class="bg" style="background-color:'+color+'"></div>');

		rate.css('width',width);

		name.text(item[0]);
		per.text(item[1] * 100 + '%');

		line.append(name) 
			.append(rate)
			.append(per);		

		component.append(line);

	});


	return component;

}