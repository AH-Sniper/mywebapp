// 折线图组件对象

function H5ComponentPolyline(name,cfg){
	var component = new H5ComponentBase(name,cfg);

	// 绘制网格线
	var w = cfg.width;
	var h = cfg.height;
	// 加入一个画布
	var cvs = document.createElement('canvas');
	var ctx = cvs.getContext('2d');
	cvs.width = w;
	cvs.height = h;

	component.append(cvs);

	var step = 10;
	ctx.beginPath();
	ctx.lineWidth = 1;
	ctx.strokeStyle = '#aaaaaa';

	// 画横线，假设10份
	for (var i=0;i<step+1;i++){
		var y = i * (h/step);
		ctx.moveTo(0,y);
		ctx.lineTo(w,y);
	}
	// 画竖线，根据项目的个数去分
	step = cfg.data.length;

	for (var i=0;i<step+2;i++){
		var x = i * (w/(step+1));
		ctx.moveTo(x,0);
		ctx.lineTo(x,h);
	}

	ctx.stroke();



	// 再加入一个画布，实际上是盖在第一张画布上面
	var cvs2 = document.createElement('canvas');
	var ctx2 = cvs2.getContext('2d');
	cvs2.width = w;
	cvs2.height = h;

	component.append(cvs2);

	var color = cfg.data[0][2] || '#ff8878';

	// 将 cfg.data 转为坐标数组
	var coorArr = [];

	var textWidth = (w/(cfg.data.length+1))/2;
	// 初始化
	for(var i=0;i<cfg.data.length;i++){
		x = (i+1)*w/(cfg.data.length+1);

		y = h - cfg.data[i][1]*h;

		coorArr.push([x,y]);
		// 取文本，放到下面
		var text = $('<div class="text"></div>');
		text.text(cfg.data[i][0]);
		text.css('width',textWidth)
			.css('left',x/2-textWidth/2)
			.css('transition','all 1s '+(i*0.1+1)+'s');

		component.append(text);
	}
	// 封装除了网格线的所有画画动作
	/*
		per : 0 到 1
	*/
	var draw = function(per){
		// 清除
		ctx2.clearRect(0,0,w,h);	
		// 更新 coorArr
		coorArr = [];
		for(var i=0;i<cfg.data.length;i++){
			x = (i+1)*w/(cfg.data.length+1);

			y = h - cfg.data[i][1]*h * per;

			coorArr.push([x,y]);
		}
		// 绘制折线数据
		ctx2.beginPath();
		ctx2.lineWidth = 3;
		ctx2.fillStyle = color;

		// 画点
		ctx2.textAlign = 'center';
		ctx2.textBaseline = 'bottom';
		ctx2.font = '18px arial';

		for(var i=0;i<coorArr.length;i++){
			x = coorArr[i][0];
			y = coorArr[i][1];
			ctx2.moveTo(x,y);
			ctx2.arc(x,y,6,0,2*Math.PI);
			// 画数据
			ctx2.fillText((cfg.data[i][1]*100+'%'),x,y-12);
		}

		ctx2.fill();

		// 连线
		ctx2.beginPath();
		for(var i=0;i<cfg.data.length-1;i++){
			x = coorArr[i][0];
			y = coorArr[i][1];
			xx = coorArr[i+1][0];
			yy = coorArr[i+1][1];

			ctx2.moveTo(x,y);
			ctx2.lineTo(xx,yy);
		}

		ctx2.strokeStyle = color;
		ctx2.stroke();

		// 画阴影
		ctx2.beginPath();
		ctx2.moveTo(coorArr[0][0],h);
		for(var i=0;i<coorArr.length;i++){
			ctx2.lineTo(coorArr[i][0],coorArr[i][1]);
		}
		ctx2.lineTo(coorArr[coorArr.length-1][0],h);
		ctx2.closePath();

		ctx2.fillStyle = 'rgba(255,0,0,.2)';
		ctx2.fill();
	}
	
	// draw(1);

	// 折线图生长动画，如果用 setTimeout 可以实现变速效果
	var timer = null;
	var per = 0;

	component.on('onload',function(){
		setTimeout(function(){
			clearInterval(timer);
			timer = setInterval(function(){
				per += 0.02;
				draw(per);
				if(per >= 1){
					clearInterval(timer);
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
				clearInterval(timer);
				ctx2.clearRect(0,0,w,h);	
			}
		},20);
	})

	return component;
}