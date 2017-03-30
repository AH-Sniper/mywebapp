// 饼图组件对象

function H5ComponentPie(name,cfg){
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
	// 绘制底图
	ctx.beginPath();
	ctx.fillStyle = '#eee';
	ctx.strokeStyle = '#eee';

	ctx.arc(r,r,r,0,2*Math.PI);
	ctx.fill();
	ctx.stroke();

	// 绘制数据层
	var cvs2 = document.createElement('canvas');
	var ctx2 = cvs2.getContext('2d');
	cvs2.width = w;
	cvs2.height = h;

	component.append(cvs2);

	// 设置起始角度在12点方向
	var pi = Math.PI;
	var sAngle = 1.5*pi;
	var eAngle = 0;


	var n = cfg.data.length;
	for(var i=0;i<n;i++){
		var item = cfg.data[i];
		eAngle = sAngle + 2*pi*item[1];

		ctx2.beginPath();
		ctx2.fillStyle = item[2];
		ctx2.strokeStyle = item[2];
		ctx2.moveTo(r,r);
		ctx2.arc(r,r,r,sAngle,eAngle);
		ctx2.closePath();
		ctx2.fill();

		sAngle = eAngle;

		// 输出项目文本及百分比
		var text = $('<div class="text"></div>');
		text.text(item[0]);
		var per = $('<div class="per"></div>');
		per.text(item[1]*100+'%');
		text.append(per);
		// 计算一个圆周上的坐标（计算多边形的顶点坐标）
		/*
			已知：圆心坐标 (a,b)  半径 r
			n 表示多边形是几条边，i 表示第几个顶点 (0 到 n -1)
			rad = (2*Math.PI/n) * i + 旋转偏移量
			x = a + Math.sin( rad )*r
			y = b + Math.cos( rad )*r
		*/
		var x = r + Math.sin( .5*pi-sAngle + pi*item[1] )*r;
		var y = r + Math.cos( .5*pi-sAngle + pi*item[1] )*r;

		if( x > w/2){
			text.css('left',x/2 + 5);
		} else {
			text.css('right',(w-x)/2 + 5);
		}
		if( y > h/2){
			text.css('top',y/2 + 5);	
		} else {
			text.css('bottom',(h-y)/2 + 5);
		}

		component.append(text);
	}

	// 加入一个蒙板层
	var cvs3 = document.createElement('canvas');
	var ctx3 = cvs3.getContext('2d');
	cvs3.width = w;
	cvs3.height = h;
	$(cvs3).css('z-index',1);

	component.append(cvs3);
	ctx3.fillStyle = '#eee';
	ctx3.strokeStyle = '#eee';

	function draw(per){
		ctx3.clearRect(0,0,w,h);
		ctx3.beginPath();
		ctx3.moveTo(r,r);
		ctx3.arc(r,r,r,-0.5*pi+2*pi*per,1.5*pi);
		ctx3.fill();
		ctx3.stroke();
	}

	draw(0);	

	// 雷达图生长动画，如果用 setTimeout 可以实现变速效果
	var timer = null;
	var per = 0;

	component.on('onload',function(){
		setTimeout(function(){
			clearInterval(timer);
			timer = setInterval(function(){
				per += 0.01;

				if(per >= 1){
					per = 1;
					clearInterval(timer);
					component.find('.text').css('opacity',1);
				}

				draw(per);				
			},20);
		},500);
	});

	component.on('onleave',function(){
		clearInterval(timer);
		component.find('.text').css('opacity',0);					
		
		timer = setInterval(function(){
			per -= 0.01;

			if(per <= 0){
				per = 0;
				clearInterval(timer);
				draw(0);
			}

			draw(per);				
		},20);
	})

	return component;
}