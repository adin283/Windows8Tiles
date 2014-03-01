$(function(){
	// 鼠标移入的时候设置一个flag
	// 下面根据flag来判断是否移动磁贴
	$(".wrapInner").mouseover(function(){
		$(this).attr("notMoveFlag", 1);
	});
	$(".wrapInner").mouseout(function(){
		$(this).attr("notMoveFlag", 0);
	});
	
	// 设置每一秒随机移动某个磁贴
	setInterval(function(){
		// 随机获取某个class=wrap的div
		var wrap = $(".wrap");
		var wrapLen = $(".wrap").length;
		var index = Math.floor(Math.random() * wrapLen);
		var randomWrap = wrap.eq(index);
		// 调用移动事件
		tileMove(randomWrap);
	}, 1000);
	
});

function tileMove(wrap)
{
	var wrapInner = wrap.find(".wrapInner");
	// 获取wrapInner的高度
	var wrapInnerHeight = wrapInner.height();
	// 不移动磁贴标签不为1的时候才移动
	if (wrapInner.attr("notMoveFlag") != 1) {
		// 如果top为auto，则设置移动一个磁贴的高度
		if (wrapInner.css("top") == 'auto') {
			var top = "-150px";
		} else {
			// 如果移到了最后一个磁贴，移动到第一个磁贴
			if (wrapInnerHeight == -parseInt(wrapInner.css("top")) + 150) {
				var top = "0px";
			// 移动一个磁贴
			} else {
				var top = (parseInt(wrapInner.css("top")) - 150) + "px";
			}
		}
		//使用animate事件使得磁贴向上移动
		wrapInner.animate({
			top : top
		}, 500);
	}
}