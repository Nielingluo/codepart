##理解 !function(){}()  

	// 匿名函数立即执行（当一个匿名函数被括起来，然后再在后面加一个括号，这个匿名函数就能立即运行起来！）
	(function() {
	    console.log(0);
	})();
	
	//这种写法大家应该很熟悉但有时候也会遇到下面这种写法
	
	! function() {
	    console.log(0);
	}();
	//这是什么意思呢 其实效果跟上面一样 也是立即执行一个匿名函数
	//！的目的是告诉解释器它后面是个表达式
	//前面也可以是+，—,~ 
	(function() {})() == ! function() {}();

	//让解释器去知道我们希望进行匿名函数的直接调用以下方法都是可行的
	a = function(){}()
	~function(){}()//个人喜好的方式
	!function(){}()
	+function(){}()


参考：[一些html,css,javascript代码片段](http://www.cnblogs.com/leinov/p/usefulHtmlCssJavascriptCode.html)、[对JAVASCRIPT匿名函数的理解](http://www.cnblogs.com/chenxianbin89/archive/2010/01/28/1658392.html)、搜索：匿名函数.jpg

##为什么在function括号写个event?括号中的event可以省略吗？

   	$(function (event) {
        //code
    })
>**考虑到IE, firefox的兼容性。window.event，在IE下确实没问题。但在Firefox下没有window.event这个对象，event只会通过参数传递进来。**

>
>event代表事件的状态，例如触发event对象的元素、鼠标的位置及状态、按下的键等等。
>
>event对象只在事件发生的过程中才有效。至于event这个参数传不传，是为了兼容浏览器。
>
>**在IE下，window.event是有效的，所以可以不用传event参数，Firefox下没有window.event这个对象，event只会通过参数传递进来。**


##jquery下如何理解 $.each(data, function (index, value) {}

- 遍历处理data，可以是数组、DOM、json等，取决于直接给定或者ajax返回的类型。
- function (index, value)中index是当前元素的位置，value是值。

实例1：

		  // each处理一维数组
		  var arr1 = [ "aaa", "bbb", "ccc" ];  
		  $.each(arr1, function(i,val){  
		  alert(i);   
		  alert(val);
		  });

		  // 处理json数据，例如ajax的返回值 
		  var obj = { one:1, two:2, three:3};  
		　$.each(obj, function(key, val) {  
		  alert(key); 
		  alert(val); 
		  });


实例2：

		$.each([2,3,4],function(index,value){alert('第'+ index+ '数是'+value);});
		$.each({a:3,b:'g'},function(index,value){alert('属性'+ index+ '的值是'+value);});
		//each就是遍历一个对象

实例3,类似应用[实例见：hzkh]：

	//html：
    <p>p1</p>
    <p>p2</p>
    <p>p3</p>

	//js:
    $("p").each(function(i){ //循环每一个jquery选择到的对象。这样写它就是循环三次，其中function中的i就是指索引
        var a = $(this).text();
        alert(a);
    })

##jQuery判断元素是否存在方法总结:

**传统javascript方法:**

	if(document.getElementById('div')) {    } else {          }

>在传统的Javascript里，当我们对某个页面元素进行某种操作前，最好先判断这个元素是否存在。原因是对一个不存在的元素进行操作是不允许的。

	//如果ID为"someID"的元素不存在，我们将得到Javascript运行错误：document.getElementById("someID") is null
	obj = document.getElementById("someID");
	if (obj){
	  obj.innerText("hi");
	}

**Jquery方法：**使用jQuery则比较简单，只需判断此元素的长度是否为0，如果为0则此元素不存在。

	if ($("#div").length > 0){     // 找到对应id=div的元素，然后执行此块代码 }
>判断某个页面元素存在与否在jQuery实际上是没有必要的，jQuery本身会忽略对一个不存在的元素进行操作，并且不会报错。

	if ( $("#someID").length > 0 ) {
		$("#someID").text("hi");
	}

##Javascript CSS控制网页内容缩放

**方法一：**

	$("#content").css("zoom","120%"); //将ID为content的DIV里的内容放大20%
	$("body").css("zoom","80%");  //将整个网页内容缩小20%

>本方法的特点：使用CSS的zoom属性，操作简便；被操作的各种元素缩放比例控制的比较好，而且我们不需要单独去考虑文字放大了多少，图片放大了多少。

>缺点：并不是所有浏览器都支持，在我测试的浏览器中，IE6+、WebKit系浏览器均支持此特性，Firefox不支持。

**方法二：**灵活使用JQuery的Selector动态调整要缩放的元素尺寸。



	$("#content * ").css("font-size", "20px"); //改变文本的字体大小

	//如果文本原始字体大小为15px，新的大小为20px，那么相当于放大了30%，所以我们的图片需要进行同比例的缩放，放大30%

	$("#content img").each(function(){  //对图片进行缩放
	
	$(this).css("height","auto");
	
	$(this).css("width", ($(this).height()*1.3)+"px");
	
	});

这样我们就对content中的所有图片进行了缩放。如果要对网页中所有的内容进行缩放，只需将Selector中的#content换成body即可。

>本方法的特点：细心的朋友可能已经看出，我在对文本进行缩放时，是将其统一设成了相同的大小，这样就忽视了文本内部文字大小的比例问题，这样从需求的角度当然不好，但如果不这样，我们就需要像此方法中缩放图片时那样，对content中所有文本型元素进行比例换算，操作并不复杂，但最大的问题是可能性能开销会很大，而且即便如此，缩放的比例也不会太理想。

实例参考：http://4g.hzyestar.com/zt/slzx/|| http://4g.hzyestar.com/zt/hmslz/

------------------------------

##jquery内部不能再写function 方法名，因为这是javascript写法

参考：https://zhidao.baidu.com/question/528017134.html


##$(function(){})和$(document).ready(function(){})区别
没什么区别。一个是简写，一个是完整写法。

作用：在jQuery中监听document 是否 ready的操作

##document.ready和onload的区别——JavaScript文档加载完成事件

- **页面加载完成有两种事件：**

  + 一是ready，表示文档结构已经加载完成（不包含图片等非文字媒体文件）

  + 二是onload，指示页面包含图片等文件在内的所有元素都加载完成。
  + 
##jquery获取第一个元素和最后一个元素
	$(".oop").find("ul li").first().css("color","#ff0000");
	$(".oop").find("ul li").last().css("color","#ff0000");


##使用jQuery将页面上的所有元素边框设置为2px宽的虚线？
	$("*").css("border", "2px dotted red"); 

#jquery遍历  eq()方法
$(":eq(index)")[index必需。规定元素的 index 值。]==>>$("p:eq(1)")

	<script type="text/javascript">
		$(function(){
			$("#oop").find("li").eq(1).addClass('bor');
			$("#oop").find("p").eq(1).css("color","#ff0000");
			$("#oop").find("p").eq(-2).css("color","#ff0000");  //如果提供负数，则指示从集合结尾开始的位置，而不是从开头开始
		})
	</script>

##jQuery 事件 - toggle() 方法
>用于绑定两个或多个事件处理器函数，以响应被选元素的轮流的 
> 事件。

>如果元素是可见的，切换为隐藏的；如果元素是隐藏的，切换为可见的。

>1.9版本 .toggle(function, function, … ) 方法删除,jQuery Migrate（迁移）插件可以恢复此功能。

	$(function(){
		$(".btn").toggle(function(){
			$(".oop").css("background-color","red");
		},function(){
			$(".oop").css("background-color","green");
		},function(){
			$(".oop").css("background-color","blue");
		})
	})

##多个.css()
		$("p:eq(1)").css({"color" : "#ff0000","background":"blue","font-size":'30px'});
##jQuery 事件 - toggle() 点击文字却换文字颜色。
	
	.chco{ color: #ff0000; }
	.chco2{ color: blue; }
	//css end
	<div id="list">
		<ul>
			<li>1111111</li>
			<li>222222222</li>
			<li>333333</li>
			<li>444444444</li>
			<li>55555</li>
			<li>666666</li>
		</ul>
		<p title="you facae">lllllllllllll</p>
	</div>
	<script type="text/javascript">
		$(function(){
			$("ul li").toggle(function(){
				$("ul li").removeClass("chco2").addClass("chco");
			},function(){
				$("ul li").removeClass("chco").addClass("chco2");
			})
		})
	</script>

>jQuery选择器是行为与文档内容之间连接的纽带，选择器的最终目的就是能够轻松地找到文档中的元素。p74
http://www.w3school.com.cn/jquery/jquery_ref_selectors.asp
#jQuery 拥有可操作 HTML 元素和属性的强大方法。
##jQuery DOM 操作=获得内容 - text()、html() 以及 val()
+ 三个简单实用的用于 DOM 操作的 jQuery 方法：
 - text() - 设置或返回所选元素的文本内容
 - html() - 设置或返回所选元素的内容（包括 HTML 标记）
 - val() - 设置或返回表单字段的值

			$(function(){
			$("span").bind("click",function(event){
				var txt = $("#msg").html() + '<p>span标签被点击</p>';
				$("#msg").html(txt);
				event.stopPropagation();
			})

			$("#content").bind("click",function(event){
				var txt = $("#msg").html() + '<p>外层div标签被点击</p>';
				$("#msg").html(txt);
				event.stopPropagation();
			})


			$("body").bind("click",function(){
				var txt = $("#msg").html() + '<p>body被点击</p>';
				$("#msg").html(txt);
			})

			$("#sub").click(function(){
			var username= $("#username").val();          //表单提交，判断用户名是否填写，并提示。
			if(username==""){
				$("#bt").html("请填写姓名");
				//event.preventDefault();
				return false;
			}
		})

	$(".oop").removeClass("oop").addClass("p8");  //删除、添加类


- addClass()向匹配的元素添加指定的类名。
- attr()	设置或返回匹配元素的属性和值。
- hasClass()	检查匹配的元素是否拥有指定的类。
- html()	设置或返回匹配的元素集合中的 HTML 内容。
- removeAttr()	**从所有匹配的元素中移除指定的属性。**
- removeClass()	从所有匹配的元素中删除全部或者指定的类。
- toggleClass()	从匹配的元素中添加或删除一个类。
- val()	设置或返回匹配元素的值。

##鼠标点击显示隐藏div
		$("#header").click(function(){
			var $divs = $(this).next("div#oop"); //找出header元素的下一个元素
			if($divs.is(":visible")){           //判断当前状态
				$divs.hide();
			}else{
				$divs.show();
			}
		})

		})

>#jQuery小技能

+ **Jquery获取和修改img的src值的方法**
 - 获取：$("#imgId")[0].src; 
 - 修改：$("#imgId").attr('src',path); 

+ **Jquery显示和隐藏div的方法**
 - $("#txt").show()   OR     $("#txt").css('display','block');
 - $("#txt").hide()   OR     $("#txt").css('display','none');
		
#jquery之animate
		$(".cirle").stop().animate({left:'320px',opacity:'0.2',fontSize:'30em'},"slow");
		$(".jop ul li:eq(2)").addClass("ff");
	
- 鼠标滑过元素位置变化1

		$(".cir").hover(function(){
			$(this).stop().animate({ left:'200px',height:'400px'},3000).html("200*400");
				},function(){
			$(this).stop().animate({ right:'200px',height:'100px'},3000).html("200*100");
		})

- 鼠标滑过元素位置变化2

		$(".cir").hover(function(){
				//$(".cir").fadeOut("slow"); //鼠标滑过元素缓慢消失1
				//$(".cir").fadeOut(6000);    //鼠标滑过元素6秒内消失2
				//$(".cir").css("opacity","0.5")  //鼠标滑过元素元素透明度变化
				$(".cir").animate({left:'200px',height:'300px'}).animate({opacity:'1'}).animate({top:"200px", width:"300px"},3000).fadeOut("slow");
		})


##jQuery实现鼠标滑过更换图片
			$(document).ready(function(){
				$('#ulist li').hover(function(){
				$(this).find('.pic1').attr('src','http://demo.htmleaf.com/1411/201411061531/images/3.jpg');
			},function(){ 
				$(this).find('.pic1').attr('src','http://demo.htmleaf.com/1411/201411061531/images/2.jpg');
			})
			});

			//html code
			<ul id="ulist">
				<li>
					<img src="http://demo.htmleaf.com/1411/201411061531/images/2.jpg" alt="" class="pic1">
					<div id="txt">我是檀树</div>
				</li>
				<li>
					<img src="http://demo.htmleaf.com/1411/201411061531/images/3.jpg" alt="">
					<div id="txt">我是样式树</div>
				</li>
				<li>
					<img src="http://demo.htmleaf.com/1411/201411061531/images/5.jpg" alt="">
					<div id="txt">我是感悟树</div>
				</li>
			</ul>


##js实现鼠标滑过更换图片
		    <script type="text/javascript">
		            function mouseOver(){
		                 document.b1.src="http://hbimg.b0.upaiyun.com/a9adb8b7d90c1f0618a67875641d46d9ac761e081c7a8-hbx5Qh_sq320"
		            }
		            function mouseOut(){
		                document.b1.src="http://hbimg.b0.upaiyun.com/57576941bed4143eb2643ee9f23c597b7f6b1b69180cc-Ct89Yv_sq320"
		           }
		    </script>

			//html code
			<img src="http://hbimg.b0.upaiyun.com/57576941bed4143eb2643ee9f23c597b7f6b1b69180cc-Ct89Yv_sq320" id="imgs" />


##jQuery实现鼠标滑过更换背景

		.oop{ width: 800px; height: 60px; background: #ff0000; }  // css样式
		<div class="oop">
			<p>dffsdf</p>
		</div>
		<script type="text/javascript">
			$(function(){
					$(".oop").find("p").mouseenter(function(){
						$("p").css("background","#000");
					})
					$(".oop").find("p").mouseout(function(){
						$("p").css("background","#ff0000");
					})
			})
		</script>


#jQuery选项卡代码
		$(function(){
			$(".right li").mouseover(function(){
				$(this).addClass("bp").siblings().removeClass("bp");
				$(".left div").hide();
				$(".left div").eq($(this).index()).show();
			})
		})


##jquery
jquery的demo代码实例
http://www.zuidaima.com/share/kjquery%E5%AE%9E%E4%BE%8B-p2-s1.htm

##锋利的jQuery
#复制拷贝删除节点p72
	<div id="list">
		<ul>
			<li>1111111</li>
			<li>222222222</li>
			<li>333333</li>
			<li>444444444</li>
			<li>55555</li>
			<li>666666</li>
		</ul>
		<p title="you facae">lllllllllllll</p>
	</div>
	<script type="text/javascript">
		//购物网站购物车
		$(function(){
			 $("#list li").click(function(){
			 	//$(this).remove().clone().appendTo("ul").css("color","#ff0000");  //点击li删除 并复制一份到下面。
			 	$(this).clone(true).appendTo("ul").css("color","#ff0000");			//clone（true）复制元素的同时复制元素中所绑定的事件
			 })
		})
	</script>

#jQuery bind事件p122
	<script type="text/javascript" src="js/jquery-1.7.2.min.js"></script>
	<style type="text/css">
		*{ margin: 0; padding: 0; }
		ul li{ list-style: none; }
		.head{ width: 60px; height: 20px; background: #ddd;  cursor: pointer;}
		.contents{ width: 500px; height: 200px; border: 2px solid #ff0000;  display: none;}
		.hight{ color: blue;}
	</style>

	<div id="panel">
		<h5 class="head">CKIS</h5>
		<div class="contents">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum iure eos, perferendis iste totam cupiditate iusto, est laudantium repellendus expedita! Repudiandae ducimus voluptatum explicabo necessitatibus a similique amet earum quae.</div>
	</div>
	<script type="text/javascript">
		$(function(){
			//bind鼠标点击事件
			/*$("#panel h5.head").bind("click",function(){
				var $contents=$(this).next("div.contents");
				if($contents.is(":visible")){
					$contents.hide();
				}else{
					$contents.show();
				}
			})*/

			//鼠标滑过事件
			/*$("#panel h5.head").bind("mouseover",function(){
				$(this).next("div.contents").show();
			})
			$("#panel h5.head").bind("mouseout",function(){
				$(this).next("div.contents").hide();
			})*/

			//鼠标滑过事件上述bind简写
			/*$("#panel h5.head").mouseover(function(){
				$(this).next("div.contents").show();
			})
			$("#panel h5.head").mouseout(function(){
				$(this).next("div.contents").hide();
			})*/

			//toggle方法
			/*$("#panel h5.head").toggle(function(){
				$(this).next("div.contents").show();
			},function(){
				$(this).next("div.contents").hide();
			})*/

			$("#panel h5.head").toggle(function(){
				//$(this).addClass("hight");
				$(this).text("隐藏");  //改变标题文字
				$(this).next("div.contents").toggle();
			},function(){
				//$(this).removeClass("hight");
				$(this).text("显示");
				$(this).next("div.contents").toggle();
			})

		})
	</script>

##jQuery动画 stop()
		.cir{ width: 600px; height: 300px; background: yellow; position: relative; }
		<div class="cir"></div>

		$(".cir").hover(function(){
			$(this).stop().animate({ left:'200px',height:'400px'},3000);
		},function(){
			$(this).stop().animate({ right:'200px',height:'100px'},3000);
		})


##jquery 表单
			input:focus,textarea:focus{
			border: 1px solid #ff0;
			background: #fcc;
>IE6不支持除超链接元素之外的：hover伪类选择符，此时可以用jQuery来弥补IE6对css支持的不足。

		   <script type="text/javascript">
		   		$(function(){
		   			$(":input").click(function(){
		   				$(this).addClass("focus");
		   			}).blur(function(){
		   				$(this).removeClass("focus");
		   			})
		   		})
		   </script>


####超链接图片文字提示 特效p97   轮播图p153
Uncaught TypeError: $(...).live is not a functionjQuery版本不同引起。