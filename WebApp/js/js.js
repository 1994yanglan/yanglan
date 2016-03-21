$(function() {
	//swiper插件水平滑动----------------------动画功能     
	var $list = $(".list li");
	var mySwiper = new Swiper('.swiper-container', {
		direction: 'horizontal',
		loop: false,
		//			// 如果需要分页器
		//			pagination: '.swiper-pagination',
		//			// 如果需要前进后退按钮
		//			nextButton: '.swiper-button-next',
		//			prevButton: '.swiper-button-prev',
		// 如果需要滚动条
		scrollbar: '.swiper-scrollbar',
		onInit: function(swiper) { //Swiper2.x的初始化是onFirstInit
			swiperAnimateCache(swiper); //隐藏动画元素 
			swiperAnimate(swiper); //初始化完成开始动画
		},
		onSlideChangeEnd: function(swiper) {
			var index = swiper.activeIndex;
			$list.eq(index).addClass("active").siblings().removeClass("active");
			
			
			//第二页------------------------------
			var oIscoll=document.getElementsByClassName("t")[index];
			oIscoll.innerHTML="";
			$.ajax({
			url: "http://localhost:8080/Proxy/FootBall/tweet/json/query/hotspot.do",
			data: {
				"category":index+1
			},
			success: function(d) {
				
				console.log(d);
				var data = JSON.parse(d);
				console.log(data.data.tweetlist[0].defaultFileName);
				var L = data.data.tweetlist;
				var oUl = document.createElement("ul");
				oIscoll.appendChild(oUl);
				for (var i = 0; i < L.length; i++) {
					var oList = document.createElement("li");
					oUl.appendChild(oList);
					var oA = document.createElement("a");
					oList.appendChild(oA);
					var oImg = document.createElement("img");
					oA.appendChild(oImg);
					oImg.onload = function() {
						scroll2.refresh();
						scroll3.refresh();
					}
					oImg.src = "http://101.200.173.217:8080/FootBall/upload/files/20150715/" + L[i].thumbnailname;
					var oP = document.createElement("p");
					oA.appendChild(oP);
					oP.innerHTML = L[i].content;
				}
				scroll2.refresh();
				scroll3.refresh();
			}
		});		
	swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
			
		}
	})
//iscroll插件--------------------------上下滑动
	$(function() {
		var wHeight = $(window).height();
		hHeight = $(".header").height(),
			fHeight = $(".footer").height(),
			lHeight = $(".list").height(),
			scroll1 = new iScroll("wrapper1", {
				hScrollbar: false,
				vScrollbar: false
			});
		scroll2 = new iScroll("wrapper2", {
			hScrollbar: false,
			vScrollbar: false
		});
		scroll3 = new iScroll("wrapper3", {
			hScrollbar: false,
			vScrollbar: false
		});
		$("#wrapper1").height(wHeight - hHeight - fHeight - lHeight - 20);
		$("#wrapper2").height(wHeight - hHeight - fHeight - lHeight - 20);
		$("#wrapper3").height(wHeight - hHeight - fHeight - lHeight - 20);
		



//ajax动态加载图片------------------------------------------
		//第一页------------------------------
		$.ajax({
			url: "http://localhost:8080/Proxy/FootBall/tweet/json/query/hotspot.do",
			data: {
				"category": 1
			},
			success: function(d) {
				var oIscoll = document.getElementById("scroller1");
				console.log(d);
				//console.log(JSON.parse(d).data.tweetlist);
				var data = JSON.parse(d);
				var L = data.data.tweetlist;
				var oUl = document.createElement("ul");
				oIscoll.appendChild(oUl);
				for (var i = 0; i < L.length; i++) {
					var oList = document.createElement("li");
					oUl.appendChild(oList);
					var oA = document.createElement("a");
					oList.appendChild(oA);
					var oImg = document.createElement("img");
					oA.appendChild(oImg);
					oImg.onload = function() {
						scroll1.refresh();
					}
					oImg.src = "http://101.200.173.217:8080/FootBall/upload/files/20150715/" + L[i].thumbnailname;
					var oP = document.createElement("p");
					oA.appendChild(oP);
					oP.innerHTML = L[i].content;
				}
				scroll1.refresh();
			}
		});
	});
	
	});	
