/*top weixin*/
document.writeln("<style>");
document.writeln(".top_tips{position:fixed;top:-40px;z-index:99999999999999;width:100%;margin:0px auto;height:50px!important;line-height:50px!important;background:#000;color:#fff;box-shadow:0 0 10px rgba(10,2,4,.75);}");
document.writeln(".top_tips img { float: left; border-radius: 5px; }");
document.writeln(".top_tips ul { float: left; }");
document.writeln(".top_tips ul li { height: 20px; line-height: 20px; font-size: 12px !important;}");
document.writeln(".top_tips ul li:nth-child(1) { margin-top: 5px; }");
document.writeln("@media screen and (max-width:414px){");
document.writeln("	.top_tips{ font-size:16px; }");
document.writeln("}");
document.writeln("@media screen and (max-width:375px){");
document.writeln("	.top_tips{ font-size:14px; }");
document.writeln("}");
document.writeln("@media screen and (max-width:320px){");
document.writeln("	.top_tips{ font-size:12px; }");
document.writeln("}");
document.writeln("</style>");
$("body").append("<a href=\"javascript:void(0);\" onClick=\"openZoosUrl('chatwin','&e=top-weixin');\"><div class='top_tips'><img src='../images/tips.gif' style='width:40px!important;margin:5px 5px 0 15px' /><ul><li>您好:</li><li>你收到了一条微信消息</li></ul></div></a>");
function mp() {
        $(".top_tips").animate({
            top: "-60px"
        }, 1000, function() {
            setTimeout(mb, 4000);
        });
    }

    function mb() {
        $(".top_tips").animate({
            top: "0px"
        }, 1000, function() {
            setTimeout(mp, 5000);
        });
    }

    mb();


// $(selector).animate({styles},speed,easing,callback)

