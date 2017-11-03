	 (function(win, doc) {
     if (!win.addEventListener) return;
     var html = document.documentElement;

     function setFont() {
         var cliWidth = html.clientWidth;
         //navigator.userAgent.indexOf来判断浏览器类型
         if (cliWidth > 1000||window.navigator.userAgent.indexOf("MapleStory") >= 0) {
             html.style.fontSize = 50 + 'px';
         } else {
              html.style.fontSize = 100 * (cliWidth / 750) + 'px';
         }
        
     }
     win.addEventListener('resize', setFont, false)
     doc.addEventListener('DOMContentLoaded', setFont, false)
 })(window, document);
/*  http://mxd2.qq.com/act/a20160809moments/layout.js*/




// 移动端页面代码
(function(doc, win)
{
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        pW = 640,
        recalc = function()
        {
            var cW = docEl.clientWidth < 640 ? docEl.clientWidth : 640;
            if (!cW)
            {
                return;
            }
            docEl.style.fontSize = 20 * (cW / pW) + 'px';
        };
    recalc();
    win.addEventListener(resizeEvt, recalc, false);
})(document, window);
//var is_rem=true;