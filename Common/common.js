
$(function(){
    // img_hover 海贼
    $(".hz_bs li").mouseover(function(){
        $(".hz_bs li").eq($(this).index()).addClass("cur").siblings().removeClass('cur');
        $(".hz_intro").hide().eq($(this).index()).show();
    });
    $('.hz_intro').mouseover(function(event){
        $(".hz_bs li").eq($(this).index()-1).addClass("cur");
        $(this).show();
    });
    $('.hz_intro').mouseout(function(event){
        $(".hz_bs li").eq($(this).index()-1).addClass("cur");
        $(this).hide();
    });

    //vedio视频播放
    var video=document.getElementById('videoId');
   /* video.onclick=function(){
        this.play();
    }*/

    var video=document.getElementById('videoId');
        video.onclick=function(){
            if(this.paused){
                this.play();
            }else{
                this.pause();
            }
        }


    //star 20170409 根据上下滑动控制顶部导航的出现与隐藏
    var windowTop=0;//初始话可视区域距离页面顶端的距离
    $(window).scroll(function() {
        var scrolls = $(this).scrollTop();//获取当前可视区域距离页面顶端的距离
        if(scrolls>=windowTop){//当B>A时，表示页面在向下滑动
            //console.log("向下滑动");
            $("#header_memu").css("position","fixed");
            windowTop=scrolls;
        }else{
            //console.log("向上滑动");
            $("#header_memu").css("position","relative");
            $("#header_memu").css("position","static");
        windowTop=scrolls;
        }
    });
    //-----end:http://blog.sina.com.cn/s/blog_6970cb0c0102waj8.html-----


    // jquery zoom  star
    $(".box_zoom").find('li:eq(0)').css("zoom",'80%'); //选取box_zoom下第一个li元素缩小20%
    $(".box_zoom").find('li:eq(2)').css("zoom",'120%'); //选取box_zoom下第三个li元素放大20%
    //$(".box_zoom li:eq(0)").css("zoom","220%");       //选择元素简写
    //$(".box_zoom li").last().after("<li>NANAN之后</li>");   //last()选取最后一个li,然后在这之后[after()]插入一个新的li标签
    //$(".box_zoom li").first().before("<li>HHHAHHA之前</li>") //first()选取第一个li,然后在这之前[before()]插入一个新的li标签
    $(".change_class").attr("class","cg_aft_class");     //改变class值
    // jquery zoom  END


   //选择h1下个元素添加红色并在前面追加TTT $("h1").nextUntil("p").css("color","red").prepend("<p>TTT</p>");

    // <!--css实现背景透明文字不透明 star-->
    $(".hy_opc li").hover(function(){
        $(this).stop(true).animate({width:"651px"},500).addClass("zs_on").siblings().stop(true).animate({width:"300px"},500).removeClass("zs_on");
    });
    // <!--css实现背景透明文字不透明 star END-->

});



// JavaScript代码 star============
//时间
// 方式1：
setInterval("document.getElementById('now_time').innerHTML='完整日期显示：' + new Date().toLocaleString()",1000);

// 方式2：
function local_time(){
    var time = new Date();
    // var t=time.getHours()+ ":"+ time.getMinutes() + ":" +time.getSeconds();
    var h = time.getHours();
    var m = time.getMinutes();
    var s = time.getSeconds();

    // h=checkTime(h);
    // m=checkTime(m);
    // s=checkTime(s);
    // function checkTime(i){
    //     if(i<10){
    //         i = "0" + i;
    //     }
    //     return i;
    // }
    // document.getElementById('time').innerHTML= '当前时间显示：' + h + ':' + m + ':' +s;

    function getDateWeek(obj) {if (obj < 10) return "0" + obj; else return obj;}
    document.getElementById('time').innerHTML= '当前时间显示：' + getDateWeek(h) + ':' + getDateWeek(m) + ':' + getDateWeek(s);
}
setInterval(local_time,1000);



// 一会来看下三目运算