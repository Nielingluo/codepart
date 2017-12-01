$(function () {
    // img_hover 海贼
    $(".hz_bs li").mouseover(function () {
        $(".hz_bs li").eq($(this).index()).addClass("cur").siblings().removeClass('cur');
        $(".hz_intro").hide().eq($(this).index()).show();
    });
    $('.hz_intro').mouseover(function (event) {
        $(".hz_bs li").eq($(this).index() - 1).addClass("cur");
        $(this).show();
    });
    $('.hz_intro').mouseout(function (event) {
        $(".hz_bs li").eq($(this).index() - 1).addClass("cur");
        $(this).hide();
    });

    //vedio视频播放
    /*var video = document.getElementById('videoId');
     video.onclick=function(){
     this.play();
     }*/

    var video = document.getElementById('videoId');
    video.onclick = function () {
        if (this.paused) {
            this.play();
        } else {
            this.pause();
        }
    };


    //star 20170409 根据上下滑动控制顶部导航的出现与隐藏
    var windowTop = 0;//初始话可视区域距离页面顶端的距离
    $(window).scroll(function () {
        var scrolls = $(this).scrollTop();//获取当前可视区域距离页面顶端的距离
        if (scrolls >= windowTop) {//当B>A时，表示页面在向下滑动
            //console.log("向下滑动");
            $("#header_menu").css("position", "fixed");
            windowTop = scrolls;
        } else {
            //console.log("向上滑动");
            $("#header_menu").css("position", "relative");
            $("#header_menu").css("position", "static");
            windowTop = scrolls;
        }
    });
    //-----end:http://blog.sina.com.cn/s/blog_6970cb0c0102waj8.html-----


    // jquery zoom  star
    $(".box_zoom").find('li:eq(0)').css("zoom", '80%'); //选取box_zoom下第一个li元素缩小20%
    $(".box_zoom").find('li:eq(2)').css("zoom", '120%'); //选取box_zoom下第三个li元素放大20%
    //$(".box_zoom li:eq(0)").css("zoom","220%");       //选择元素简写
    //$(".box_zoom li").last().after("<li>NANAN之后</li>");   //last()选取最后一个li,然后在这之后[after()]插入一个新的li标签
    //$(".box_zoom li").first().before("<li>HHHAHHA之前</li>") //first()选取第一个li,然后在这之前[before()]插入一个新的li标签
    $(".change_class").attr("class", "cg_aft_class");     //改变class值
    // jquery zoom  END

    //选择h1下个元素添加红色并在前面追加TTT $("h1").nextUntil("p").css("color","red").prepend("<p>TTT</p>");

    // <!--css实现背景透明文字不透明 star-->
    $(".hy_opc li").hover(function () {
        $(this).stop(true).animate({width: "651px"}, 500).addClass("zs_on").siblings().stop(true).animate({width: "300px"}, 500).removeClass("zs_on");
    });
    // <!--css实现背景透明文字不透明 star END-->

    //each:循环每一个jquery选择到的对象
    $(".text-dec p").each(function (i) { //这样写它就是循环三次，其中function中的i就是指索引
        var a = $(this).text();
        console.log("第" + i + "个" + "p值：" + a);
    });


});


// JavaScript代码 star============
//时间
// 方式1：
setInterval("document.getElementById('now_time').innerHTML='完整日期显示：' + new Date().toLocaleString()+' 星期'+'日一二三四五六'.charAt(new Date().getDay());", 1000);

// 方式2：
function local_time() {
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

    function getDateWeek(obj) {
        if (obj < 10) return "0" + obj; else return obj;
    }

    document.getElementById('time').innerHTML = '当前时间显示：' + getDateWeek(h) + ':' + getDateWeek(m) + ':' + getDateWeek(s);
}

setInterval(local_time, 1000);

// Date对象
setInterval("document.getElementById('date1').innerHTML='toLocaleDateString() 方法可根据本地时间把 Date 对象的日期部分转换为字符串，并返回结果：' + new Date().toLocaleDateString()", 1000);

setInterval("document.getElementById('date2').innerHTML='toLocaleTimeString() 方法可根据本地时间把 Date 对象的时间部分转换为字符串，并返回结果：' + new Date().toLocaleTimeString()", 1000);

setInterval("document.getElementById('date3').innerHTML='toLocaleString() 方法可根据本地时间把 Date 对象转换为字符串，并返回结果：' + new Date().toLocaleString()", 1000);

// 倒计时 Star
function GetRTime() {
    var NowTime = Date.now();
    var EndTime = new Date('2017/12/31 00:00:00');
    var t = EndTime.getTime() - NowTime;
    var d = 0;
    var h = 0;
    var m = 0;
    var s = 0;
    if (t >= 0) {
        d = Math.floor(t / 1000 / 60 / 60 / 24);
        h = Math.floor(t / 1000 / 60 / 60 % 24);
        m = Math.floor(t / 1000 / 60 % 60);
        s = Math.floor(t / 1000 % 60);
    }

    function gDate(i) {
        if (i < 10) {
            return "0" + i;
        } else {
            return i;
        }
    }

    document.getElementById("date4").innerHTML = "当前时间：" + new Date().toLocaleString() + "=======" + "距离2017年结束还有：" + d + "天" + gDate(h) + "小时" + gDate(m) + "分钟" + gDate(s) + "秒";

}
setInterval(GetRTime, 1000);
// 倒计时 End

//    随机值函数
function selectFrom(lowerValue, upperValue) {
    var choices = upperValue - lowerValue + 1;
    return Math.floor(Math.random() * choices + lowerValue);
}

var num = selectFrom(2, 10);
//console.log("随机值：" + num); //返回介于2-10之间的随机数值

var colorGroup = ["red", "yellow", "blue", "black", "pink", "green"];
var scolor = colorGroup[selectFrom(0, colorGroup.length - 1)];
//console.log("随机颜色值：" + scolor); //随机显示颜色值或者名人名言


/*不停歇向上移动小方块特效*/
var k = 1;
setInterval(function () {
    $(".fk_block li").removeClass('ns_up');
    $(".o" + k).addClass('ns_up');
    k == 6 ? k = 1 : k++;
}, 2000);



