
$(function(){
	var ppt = new H5();

	ppt.whenAddPage = function(){
		this.addComponent('slide_up',{
			bg : './imgs/footer.png',
			css : {
				opacity : 0,
				left : 0,
				bottom : -20,
				width : '100%',
				height : '20px',
				zIndex : 10
			},
			animateIn : {
				opacity : 1,
				bottom : '-1px'
			},
			animateOut : {
				opacity : 0,
				bottom : '-20px'
			},
			delay : 500
		})
	}

	ppt.addPage('face')
			.addComponent('logo',{
				center : true,
				width : 395,
				height : 130,
				bg : './imgs/face_logo.png',
				css : {	opacity : 0 },
				animateIn : { top : 100, opacity : 1 },
				animateOut : { top : 0, opacity : 0 }
			})
			.addComponent('slogan',{
				center : true,
				width : 365,
				height : 99,
				bg : './imgs/face_slogan.png',
				css : { top : 180, opacity : 0,},
				animateIn : { left : '50%', opacity : 1 },
				animateOut : { left : 0, opacity : 0 },
				delay : 800
			})
			.addComponent('face_img_left',{
				width : 370,
				height : 493,
				bg : './imgs/face_img_left.png',
				css : { opacity : 0, left : -70, bottom : -70 },
				animateIn : { left : 0, bottom : 0, opacity : 1 },
				animateOut : { opacity : 0, left : -70, bottom : -70 },
				delay : 1000
			})
			.addComponent('face_img_right',{
				width : 276,
				height : 449,
				bg : './imgs/face_img_right.png',
				css : { opacity : 0, right : -70, bottom : -70 },
				animateIn : { right : 0, bottom : 0, opacity : 1 },
				animateOut : { opacity : 0, right : -70, bottom : -70 },
				delay : 1000
			})
	  .addPage()
	  		.addComponent('caption',{ text : '核心理念' })
	  		.addComponent('text',{
				width : 500,
				height : 30,
				center : true,
				text : 'IT教育网=只学有用的',
				css : {
					opacity : 0,
					textAlign : 'center',
					color : 'red',
					fontSize : '26px',
					left : '-100%',
					top : 120
				},
				animateIn : { opacity : 1, left : '50%' },
				animateOut : { opacity : 0, left : '-100%' },
	  		})
	  		.addComponent('description',{
	  			center : true,
	  			width : 481,
	  			height : 295,
	  			bg : './imgs/description_bg.gif',
  				text : '2013年，IT教育网的诞生引领中国IT职业从教育进入新时代；高质量实战课程、全新教学模式、实时互动学习，以领先优势打造行业品牌；迄今为止，IT教育网已成为中国规模最大、互动性最高的IT技能学习平台。',
	  			css : {
	  				opacity : 0,
	  				padding : '15px 10px 10px 10px',
	  				color : '#fff',
	  				fontSize : '15px',
	  				lineHeight : '18px',
	  				textAlign : 'justify',
	  				top : 260
	  			},
	  			animateIn : { opacity : 1, top : 180},
	  			animateOut : { opacity : 0, top : 260},
	  			delay : 1000
	  		})
	  		.addComponent('people',{
	  			center : true,
	  			width : 515,
	  			height : 305,
	  			bg : './imgs/p1_people.png',
	  			css : { bottom : 0, opacity : 0 },
	  			animateIn : { opacity : 1, bottom : 40},
	  			animateOut : { opacity : 0, bottom : 0},
	  			delay : 500
	  		})
	  .addPage()
	  		.addComponent('caption',{ text : '课程方向分布' })
	  		.addComponent('polyline',{
	  			type : 'polyline',
	  			width : 530,
	  			height : 300,
	  			center : true,
	  			css : {
	  				top : 100,
	  				opacity : 0
	  			},
	  			data : [
	  				['JS', .4, '#ff7676'],
	  				['CSS', .1],
	  				['HTML5', .2],
	  				['PHP', .05],
	  				['jQuery', .35]
	  			],
	  			animateIn : {
	  				opacity : 1,
	  				top: 250
	  			},
	  			animateOut : {
	  				opacity : 0,
	  				top : 100
	  			}
	  		})
	  		.addComponent('msg',{
	  			text : '前端开发课程占到40%',
	  			css : {
	  				opacity : 0,
	  				top : 160,
	  				width : '100%',
	  				textAlign : 'center',
	  				color : '#ff7676'
	  			},
	  			animateIn : { opacity: 1},
	  			animateOut : { opacity: 0}
	  		})
	  .addPage()
	  		.addComponent('caption',{ text : '移动开发课程资源' })
	  		.addComponent('pie',{
	  			type : 'pie',
	  			width : 400,
	  			height : 400,
	  			center : true,
	  			css : {
	  				top : 100,
	  				opacity : 0
	  			},
	  			data : [
	  				['JS', .4, '#ff7676'],
	  				['CSS', .2, 'lightgreen'],
	  				['HTML5', .05, 'orange'],
	  				['PHP', .2, 'lightblue'],
	  				['jQuery', .15, 'yellow']
	  			],
	  			animateIn : {
	  				opacity : 1,
	  				top : 200
	  			},
	  			animateOut : {
	  				opacity : 0,
	  				top : 100
	  			}
	  		})
	  		.addComponent('msg',{
	  			text : '移动开发课程占到40%',
	  			css : {
	  				opacity : 0,
	  				bottom : 80,
	  				width : '100%',
	  				textAlign : 'center',
	  				color : '#ff7676'
	  			},
	  			animateIn : { opacity: 1},
	  			animateOut : { opacity: 0}
	  		})
	  .addPage()
	  		.addComponent('caption',{ text : '前端开发课程' })
	  		.addComponent('bar',{
	  			type : 'bar',
	  			width : 530,
	  			height : 600,
	  			data : [
	  				['JavaScript', .8, '#ff7676'],
	  				['HTML/CSS', .9],
	  				['CSS3', .7],
	  				['HTML5', .6],
	  				['jQuery', .5],
	  				['BootStrap', .4],
	  				['AngularJS', .2]
	  			],
	  			css : {
	  				top : 50,
	  				opacity : 0
	  			},
	  			center : true,
	  			animateIn : {
	  				opacity : 1,
	  				top : 200
	  			},
	  			animateOut : {
	  				opacity : 0,
	  				top : 50
	  			}
	  		})
	  		.addComponent('msg',{
	  			text : '移动开发课程占到40%',
	  			css : {
	  				opacity : 0,
	  				bottom : 80,
	  				width : '100%',
	  				textAlign : 'center',
	  				color : '#ff7676'
	  			},
	  			animateIn : { opacity: 1},
	  			animateOut : { opacity: 0}
	  		})
	  .addPage()
	  		.addComponent('caption',{ text : '前端开发课程' })
	  		.addComponent('bar_v',{
	  			type : 'bar_v',
	  			width : 530,
	  			height : 600,
	  			data : [
	  				['JavaScript', .8, '#ff7676'],
	  				['CSS3', .7],
	  				['HTML5', .6, '#ff7676'],
	  				['jQuery', .5],
	  				['BootStrap', .4, '#ff7676']
	  			],
	  			css : {
	  				top : 50,
	  				opacity : 0
	  			},
	  			center : true,
	  			animateIn : {
	  				opacity : 1,
	  				top : 100
	  			},
	  			animateOut : {
	  				opacity : 0,
	  				top : 50
	  			}
	  		})
	  		.addComponent('msg',{
	  			text : '移动开发课程占到40%',
	  			css : {
	  				opacity : 0,
	  				bottom : 80,
	  				width : '100%',
	  				textAlign : 'center',
	  				color : '#ff7676'
	  			},
	  			animateIn : { opacity: 1},
	  			animateOut : { opacity: 0}
	  		})
	  .addPage()
	  		.addComponent('caption',{ text : '后端开发课程' })
	  		.addComponent('radar',{
	  			type : 'radar',
	  			width : 400,
	  			height : 400,
	  			center : true,
	  			css : {
	  				top : 100,
	  				opacity : 0
	  			},
	  			data : [
	  				['JS', .9, '#ff7676'],
	  				['CSS', .8],
	  				['HTML5', .6],
	  				['PHP', .5],
	  				['jQuery', .8]
	  			],
	  			animateIn : {
	  				opacity : 1,
	  				top : 200
	  			},
	  			animateOut : {
	  				opacity : 0,
	  				top : 100
	  			}
	  		})
	  .addPage()
	  		.addComponent('caption',{ text : '报名人数过万' })
	  		.addComponent('ring-all',{
	  			type : 'ring',
	  			width : 300,
	  			height : 300,
	  			center : true,
	  			css : { top : 120, opacity : 0, fontSize: '18px' },
	  			data : [ ['总课程', .7, '#ff7676'] ],
	  			animateIn : { opacity : 1 },
	  			animateOut : { opacity : 0 }
	  		})
	  		.addComponent('msg',{
	  			text : '不同课程报名人数超过一万占比',
	  			css : {
	  				opacity : 0,
	  				top : 280,
	  				width : '100%',
	  				textAlign : 'center',
	  				color : '#ff7676'
	  			},
	  			animateIn : { opacity: 1},
	  			animateOut : { opacity: 0},
	  			delay : 1800
	  		})
	  		.addComponent('ring-1',{
	  			type : 'ring',
	  			width : 140, height : 140,
	  			css : { left: 30, bottom : 130, opacity : 0, fontSize: '12px' },
	  			data : [ ['前端开发', .4, 'darkorange'] ],
	  			animateIn : { opacity : 1 },
	  			animateOut : { opacity : 0 }
	  		})
	  		.addComponent('ring-2',{
	  			type : 'ring',center : true,
	  			width : 140, height : 140,
	  			css : { bottom : 130, opacity : 0, fontSize: '12px' },
	  			data : [ ['后端开发', .3, 'darkorange'] ],
	  			animateIn : { opacity : 1 },
	  			animateOut : { opacity : 0 }
	  		})
	  		.addComponent('ring-3',{
	  			type : 'ring',
	  			width : 140, height : 140,
	  			css : { right: 30, bottom : 130, opacity : 0, fontSize: '12px' },
	  			data : [ ['移动开发', .8, 'darkorange'] ],
	  			animateIn : { opacity : 1 },
	  			animateOut : { opacity : 0 }
	  		})
	  		.addComponent('ring-4',{
	  			type : 'ring',
	  			width : 130, height : 130,
	  			css : { left: 70, bottom : 50, opacity : 0, fontSize: '12px' },
	  			data : [ ['数据处理', .8, 'lightgreen'] ],
	  			animateIn : { opacity : 1 },
	  			animateOut : { opacity : 0 }
	  		})
	  		.addComponent('ring-5',{
	  			type : 'ring',
	  			width : 130, height : 130,
	  			css : { right: 70, bottom : 50, opacity : 0, fontSize: '12px' },
	  			data : [ ['图像处理', .8, 'lightgreen'] ],
	  			animateIn : { opacity : 1 },
	  			animateOut : { opacity : 0 }
	  		})
	  .addPage()
	  		.addComponent('caption',{ text : '课程难度分布' })
	  		.addComponent('point',{
	  			type : 'point',
	  			width : 300,
	  			height : 300,
	  			data : [
	  				['中级', .4, '#ff7676'],
	  				['初级', .2, '#ffa3a4', -50, -90],
	  				['高级', .35, '#99c1ff', 60, -150]
	  			],
	  			center : true,
	  			css : {
	  				opacity : 0,
	  				bottom : 0,
	  				fontSize : '14px',
	  				color : '#fff'
	  			},
	  			animateIn : {
	  				bottom : '20%',
	  				opacity : 1
	  			},
	  			animateOut : {
	  				bottom : '0',
	  				opacity : 0
	  			}
	  		})
	  .addPage('tail')
	  		.addComponent('logo',{
	  			center : true,
	  			width : 359,
	  			height : 129,
	  			bg : './imgs/tail_logo.png',
	  			css : { top : 240, opacity : 0},
	  			animateIn : { opacity : 1, top : 210},
	  			animateOut : { opacity : 0, top : 240},
	  		})
	  		.addComponent('slogan',{
	  			center : true,
	  			width : 314,
	  			height : 46,
	  			bg : './imgs/tail_slogan.png',
	  			css : { top : 280, opacity : 0},
	  			animateIn : { opacity : 1},
	  			animateOut : { opacity : 0},
	  			delay : 500
	  		})
	  		.addComponent('share',{
	  			width : 128,
	  			height : 120,
	  			bg : './imgs/tail_share.png',
	  			css : { top : 110, opacity : 0, right: 110},
	  			animateIn : { opacity : 1, top : 10, right: 10},
	  			animateOut : { opacity : 0, top : 110, right: 110},
	  			delay : 1000
	  		})
	  		.addComponent('back',{
	  			width : 52,
	  			height : 50,
	  			bg : './imgs/tail_back.png',
	  			center : true,	
	  			onclick : function(){
	  				$.fn.fullpage.moveTo( 1 );
	  			}
	  		})
	  .loader();
});