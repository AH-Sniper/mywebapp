// 雷达图组件对象

function H5ComponentRadar(name,cfg){
	var component = new H5ComponentBase(name,cfg);

	var w = cfg.width;
	var h = cfg.height;
	// 加入一个画布
	var cvs = document.createElement('canvas');
	var ctx = cvs.getContext('2d');
	cvs.width = w;
	cvs.height = h;

	component.append(cvs);

	var color = cfg.data[0][2] || '#ff8888';
	var r = w/2;
	// 把半径设为 r-5 是为了图形的边界不被canvas的边界吞掉
	// ctx.arc(r,r,r-5,0,Math.PI*2);
	// ctx.stroke();

	// n 边形
	var n = cfg.data.length;
	// 计算一个圆周上的坐标（计算多边形的顶点坐标）
	/*
		已知：圆心坐标 (a,b)  半径 r
		n 表示多边形是几条边，i 表示第几个顶点 (0 到 n -1)
		rad = (2*Math.PI/n) * i + 旋转偏移量
		x = a + Math.sin( rad )*r
		y = b + Math.cos( rad )*r
	*/
	// 求出多边形顶点 (x,y)，封装画多边形
	function drawDBX(dbxR) {
		var rad;
		ctx.beginPath();
		for (var i=0;i<n;i++){
			rad = -(2*Math.PI/n) * i - Math.PI;
			var x = r + Math.sin( rad ) * dbxR;
			var y = r + Math.cos( rad ) * dbxR;
			// 顶点
			// ctx.arc(x,y,5,0,2*Math.PI);
			ctx.lineTo(x,y);
		}
		ctx.closePath();
	 	ctx.fill();
	}
	
	// 绘制多层多边形背景
	for(var i=10;i>0;i--){
		ctx.fillStyle = i%2 === 0 ? '#99c0ff' : '#f1f9ff';
		drawDBX((r-5)*(i/10));
	}
	// 绘制伞骨
	ctx.beginPath();
	for (var i=0;i<n;i++){
		rad = -(2*Math.PI/n) * i - Math.PI;
		var x = r + Math.sin( rad ) * (r-5);
		var y = r + Math.cos( rad ) * (r-5);
		// 顶点
		// ctx.arc(x,y,5,0,2*Math.PI);
		ctx.moveTo(x,y);
		ctx.lineTo(r,r);
		// 输出项目文字
		var text = $('<div class="text"></div>');
		text.text( cfg.data[i][0])
			.css('transition','all .3s '+(i*.16)+'s');

		component.append(text);
		// 设定文字位置的技巧
 		if( x > w/2){
 			text.css('left',x/2+5);
 		} else {
 			text.css('right',(w-x)/2+5);
 		}
 		if( y > h/2){
 			text.css('top',y/2+5);
 		} else {
 			text.css('bottom',(h-y)/2+5);
 		}
	}
	ctx.strokeStyle = '#e0e0e0';
	ctx.stroke();

	// 再加入一个画布，数据层
	var cvs2 = document.createElement('canvas');
	var ctx2 = cvs2.getContext('2d');
	cvs2.width = w;
	cvs2.height = h;

	component.append(cvs2);

	function draw(per){
		ctx2.clearRect(0,0,w,h);

		var arr = [];
		// 画线
		ctx2.beginPath();

		for(var i=0;i<cfg.data.length;i++){
			rad = -(2*Math.PI/n) * i - Math.PI;
			var x = r + Math.sin( rad ) * (r-5) * cfg.data[i][1] * per;
			var y = r + Math.cos( rad ) * (r-5) * cfg.data[i][1] * per;

			arr.push([x,y]);

			ctx2.lineTo(x,y);
		}
		ctx2.closePath();
		ctx2.fillStyle = "rgba(255,0,0,.2)";
		ctx2.fill();
		ctx2.stroke();

		ctx2.beginPath();
		// 根据数据将点画到伞骨图上
		arr.forEach(function(coor){
			var x = coor[0];
			var y = coor[1];
			ctx2.moveTo(x,y);
			ctx2.arc(x,y,5,0,2*Math.PI);	
		});
		ctx2.fillStyle = color;
		ctx2.fill();
	}

	// draw(1);

	// 雷达图生长动画，如果用 setTimeout 可以实现变速效果
	var timer = null;
	var per = 0;

	component.on('onload',function(){
		setTimeout(function(){
			clearInterval(timer);
			timer = setInterval(function(){
				per += 0.02;
				draw(per);				

				if(per >= 1){
					per = 1;
					clearInterval(timer);
					component.find('.text').css('opacity',1);
				}
			},20);
		},500);
	});

	component.on('onleave',function(){
		clearInterval(timer);
		timer = setInterval(function(){
			per -= 0.02;
			draw(per);		

			if(per <= 0){
				per = 0;
				clearInterval(timer);
				ctx2.clearRect(0,0,w,h);	
				component.find('.text').css('opacity',0);				
			}
		},20);
	})

	return component;
}