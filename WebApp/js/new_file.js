//$(function(){
//			var wHeight=$(window).height();
//			hHeight=$(".header").height(),
//			fHeight=$(".footer").height(),
//			scroll=new iScroll("scroll",{
//				hScrollbar:false,
//				vScrollbar:false
//			})
//			$("#scroll").height(wHeight-hHeight-fHeight-20);
//			scroll.refresh();
//			
			var wHeight=$(window).height();
			hHeight=$(".header").height(),
			fHeight=$(".footer").height(),
			scroll=new iScroll("scroll2",{
				hScrollbar:false,
				vScrollbar:false
			})
			$("#scroll2").height(wHeight-hHeight-fHeight-20);
			scroll.refresh();
			
			var wHeight=$(window).height();
			hHeight=$(".header").height(),
			fHeight=$(".footer").height(),
			scroll=new iScroll("scroll3",{
				hScrollbar:false,
				vScrollbar:false
			})
			$("#scroll3").height(wHeight-hHeight-fHeight-20);
			scroll.refresh();
////			
////			 var mySwiper = new Swiper ('.swiper-container', {
////  direction: 'horizontal',
////  loop: false,
////  onInit: function(swiper){
////   	$nav.index(swiper.activeIndex)
////  },
//// onSlideChangeEnd: function(swiper){
////   var index = swiper.activeIndex//提示Swiper的当前索引
////   $nav.eq(index).addClass('on').siblings().removeClass('on')
////  }
////});
//})
////
////     