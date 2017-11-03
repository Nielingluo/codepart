//orientationchange方向改变事件
(function(doc, win) {
    var docEl = doc.documentElement,//根元素html
    	//判断窗口有没有orientationchange这个方法，有就赋值给一个变量，没有就返回resize方法。
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        pW = 640,
        recalc = function()
        {
            var cW = docEl.clientWidth < 640 ? docEl.clientWidth : 640;
            if (!cW) {
                return;
            }
			//把document的fontSize大小设置成跟窗口成一定比例的大小，从而实现响应式效果。1rem=20px;
             docEl.style.cssText = 'font-size:'+20 * (cW / pW) + 'px !important';
            //docEl.style.fontSize = 20 * (cW / pW) + 'px';
        };
    recalc();
    win.addEventListener(resizeEvt, recalc, false);//addEventListener事件方法接受三个参数：第一个是事件名称比如点击事件onclick，第二个是要执行的函数，第三个是布尔值
    //doc.addEventListener('DOMContentLoaded', recalc, false) //绑定浏览器缩放与加载时间
})(document, window);






// 解释开始
// 如果用了逗号，一般后面还有别的定义，用分号，就是这条语句只定义这一个，已定义完；
// 可以是分号，如果是分号就是这样了
// var docEl = doc.documentElement;
// var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
//参考：http://www.imooc.com/qadetail/114521
// 解释结束


// (屏幕宽度/效果图宽度)*100+'px';
// 比如效果图是750，屏幕375,1rem=(375/750)*100+'px',就是1rem=50px
// 如果一张图片在效果图上宽为100px,高为50px;那个样式设置就是img{width:1rem; height:.5rem;}


