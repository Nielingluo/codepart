##在CSS中，html中的**标签元素**大体被分为三种不同的类型：

- 块状元素、
- 内联元素(又叫行内元素)
- 内联块状元素。[display:inline-block]

常用的块状元素有：

	<div>、<p>、<h1>...<h6>、<ol>、<ul>、<li>、<dl>、<table>、<address>、<blockquote> 、<form>

常用的内联元素有：

	<a>、<span>、<br>、<i>、<em>、<strong>、<label>、<q>、<var>、<cite>、<code>

常用的内联块状元素有：

	<img>、<input>

##清除浮动
	//<div class="clear"></div>标签会引起IE和FF高度变化，通过如下方法解决：
   	.clear{clear:both; height: 0; height: 0; overflow:hidden; }
	//伪类  :after 方法 
	.clear { zoom:1; }
	.clear:after { content:''; display:block; clear:both; }
##rem em
rem-相对于根元素
em -相对于父元素
			<style type="text/css">
				body{ margin: 0px; padding: 0px; font-size: 16px;}
				div{ font-size: 1.2em; } /*改变font-size em为rem查看字体大小变化 */
			</style>
			<div class="oop">
				Sdfjk 电视剧福克斯
				<div>Sdfjk 电视剧福克斯<div>Sdfjk 电视剧福克斯<div>Sdfjk 电视剧福克斯</div></div></div>
			</div>
#行高 %
谷歌浏览器字体的默认大小是：16px，字体的最小值为：12px，默认行高为：18px；

如果line-height单位设置为%，那么将来在计算的时候，基数是当前标签中的文本的字体的大小。

如果是%,%之前的数据一定是整数 ：150% ，200%
#行高计算的基数
如果行高的单位不是px，那么将来行高要进行计算：这个计算需要一个基数，这个基数是当前标签的字体大小，而不是浏览器默认字体大小。以上面的例子为例，我们并没有设置任何字体大小，此时我们把line-height设置为150%，那么文字行高将变为24px（16px*1.5=24）。

	div{line-height: 150%; }

此时我们在给div设置一个font-size等于20px：

	div {line-height: 150%; font-size:20px; }
那么文字行高将会变成30px，20px*1.5=30px;
#body{font-size: 62.5%;}
当设置了body{font-size: 62.5%;}时，1em则=16px*62.5%=10px,1.2em则=12px
#vh和vw
CSS宽度是相对于包含它的最近的父元素的宽度的。如果你想使用的是视口的高度或宽度，而不是父元素的，那要肿么办呢？vh和vw就能满足这个需求了。

1vh等于1%的视口高度。例如，浏览器高度是900px，那么1vh = 900*1%=9px

	.oop{ width: 100vw; height: 300vh;} //同屏幕等宽高的框
> 参考链接：http://www.ido321.com/1301.html
##CSS选择器-img
		#header > img:first-of-type{ border: 3px solid #ff0000; } //第一张图片
		#header > img:last-of-type{ border: 3px solid #ff0000; } //最后一张图片

##CSS选择器-li
	#Ulist li:nth-of-type(odd){ margin-left: 20px;}奇数行   
	#Ulist li:nth-of-type(even){margin-left: 10px;}偶数行 
##使用jQuery将页面上的所有元素边框设置为2px宽的虚线？
	$("*").css("border", "2px dotted red"); 
##禁用滚动条
水平滚动条隐藏： html{overflow-x:hidden}
竖直滚动条隐藏： html{overflow-y:hidden}

竖直滚动条显示：html {overflow-y:scroll;}
##在页面没有内容的情况下让背景自适应屏幕大小。
		//css样式
		html,body{ height: 100%; }
		.container{ height: 100%;}
		.bg{ width: 100%; height: 100%; background: url(http://images.naldzgraphics.net/2015/05/3-parallax-scrolling-website.jpg) no-repeat center center; background-size: 100%;}
		//结构层
		<div class="container">
			Hello world!
			<div class="bg"></div>
		</div>

+ background-size 用来调整背景图像的尺寸大小。
 - HTML5新增属性 让背景图片随div大小变化、background-size: 100%;

##背景图全屏css代码
		html,body{ height: 100%; }
		body{ width: 100%; height: 100%; background: url(http://images.naldzgraphics.net/2015/05/19-beast-parallax-web.jpg) no-repeat center center fixed; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover;}  //background-size: 100%;也可以。

##box-shadow: h-shadow v-shadow blur spread color inset; 
|水平阴影|垂直阴影|模糊距离|阴影的尺寸|阴影的颜色|inset	可选。将外部阴影 (outset) 改为内部阴影。
	box-shadow:5px 5px 5px #b9b7b5  //box-shadow 向框添加一个或多个阴影。


##CSS包含3种基本的布局模型：
1, 流动模型（Flow）

2, 浮动模型 (Float) 

3, 层模型（Layer）[relative、absolute、static]


##CSS3中transform:scale()用法

		.oop:hover{
					 -webkit-transform:scale(1.05);
					 -transform:scale(1.05);
					 -ms-transform:scale(1.05);
					 -o-transform:scale(1.05);
					 transform:scale(1.05); 
				}

##scal用法
		.oop{ width: 500px; height: 500px; border: 2px dashed #ff0000; position: absolute; top: 20px; left: 30px; }
		.oop:hover{-webkit-transform:scale(1.05); -transform:scale(1.05); -ms-transform:scale(1.05); -o-transform:scale(1.05);transform:scale(1.05); } 
##scal用法2-缓慢放大
		.sec_scimg a{-webkit-transition:all ease-in-out .5s; -moz-transition:all ease-in-out .5s; -ms-transition:all ease-in-out .5s; -o-transition:all ease-in-out .5s;transition:all ease-in-out .5s;}
		.sec_scimg a:hover{-webkit-transform:scale(1.05); -transform:scale(1.05); -ms-transform:scale(1.05); -o-transform:scale(1.05);transform:scale(1.05); }

##水平居中设置

**1，行内元素：**
	如果被设置元素为文本、图片等行内元素时，水平居中是通过给父元素设置 text-align:center 来实现的。

**2，块状元素分以下两种 ：**

 - **定宽**块状元素
 - **不定宽**块状元素。

>当被设置元素为 块状元素 时用 text-align：center 就不起作用了，这时也分两种情况：定宽块状元素和不定宽块状元素

 - **定宽**块状元素：
	满足定宽和块状两个条件的元素是可以通过设置“左右margin”值为“auto”来实现居中的。

 - **不定宽**块状元素。

	1,  加入 table 标签.

	2， 设置 display: inline 方法：与第一种类似，显示类型设为 行内元素，进行不定宽元素的属性设置

	3， 设置 position:relative 和 left:50%：利用 相对定位 的方式，将元素向左偏移 50% ，即达到居中的目的

http://www.imooc.com/learn/9


#垂直居中设置
**1，父元素高度确定的单行文本：**

父元素高度确定的单行文本的竖直居中的方法是通过设置父元素的 height 和 line-height 高度一致来实现的。


**2，父元素高度确定的多行文本 ：**

   1， 方法一：使用插入 table  (包括tbody、tr、td)标签，同时设置 vertical-align：middle。css 中有一个用于竖直居中的属性 vertical-align，在父元素设置此样式时，会对inline-block类型的子元素都有用
eg：http://www.imooc.com/code/6370

  2，在 chrome、firefox 及 IE8 以上的浏览器下可以设置块级元素的 display 为 table-cell（设置为表格单元显示），激活 vertical-align 属性，但注意 IE6、7 并不支持这个样式, 兼容性比较差。 

##设置浮动和相对定位来实现。

方法三：通过给父元素设置 float，然后给父元素设置 position:relative 和 left:50%，子元素设置 position:relative 和 left: -50% 来实现水平居中。
http://www.imooc.com/code/6365

首先，咱们只看container与ul，先不管其他。

1.container浮动到left；

2.相对定位，是相对于container原来的位置进行移动，参照物为页面，右移50%，也就是说，现在container的左边界就在页面正中间。

3.ul是container中的一个子元素，规定了padding为0和margin为0，也就是说，ul包含在container中，但是它们的边界是重合的（因为边界距离为0），也就是说，从盒子的角度来看，ul这个盒子和container这个盒子是一样的，简单来说，ul这个盒子就是container那个盒子。

4.现在，ul这个盒子要向左边移动50%，此时的参照物为container，也就是说ul这个盒子向左移动container的50%，然而ul本来就是container，也就相当于container自己向左移动了它自己的50%。

5.此时，container的中间与页面的中间重合，即container水平居中，由于ul与container本来就是一样的，ul也就水平居中了。

然而ul始终是一个列表，即使水平居中了，1 2 3 也是垂直排列的（当然它们整体是水平居中的），另外加入一些css让它们成水平排列，依然不影响ul这个整体的水平居中。


##li中插入img图片间有空隙（http://www.jb51.net/article/50190.htm）
- 直接加样式img{vertical-align:bottom; display:block}
- 设置容器font-size:0

##JS判断移动设备最佳方法 并实现跳转至手机版网页
	<script type=”text/javascript”>
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			window.location = “mobile.html”; //可以换成http地址
		}
	</script>

http://www.shejidaren.com/the-best-way-to-detect-a-mobile-device.html

-moz代表firefox浏览器私有属性
-ms代表IE浏览器私有属性
-webkit代表chrome、safari私有属性

##CSS3之Transition（变换过渡）

	transition: property duration timing-function delay;
	/*
	property：执行过渡的属性
	duration：执行过渡的持续时间
	timing-function：执行过渡的速率模式
	delay：延时多久执行
	*/

> Transition允许CSS的属性值在一定的时间区间内平滑地过渡。这种效果可以在鼠标单击、获得焦点、被点击或对元素任何改变中触发，并圆滑地以动画效果改变CSS的属性值.参考:http://www.jianshu.com/p/5354a9042a2a

	ease：（逐渐变慢）默认值，ease函数等同于贝塞尔曲线(0.25, 0.1, 0.25, 1.0).
	linear：（匀速），linear 函数等同于贝塞尔曲线(0.0, 0.0, 1.0, 1.0).
	ease-in：(加速)，ease-in 函数等同于贝塞尔曲线(0.42, 0, 1.0, 1.0).
	ease-out：（减速），ease-out 函数等同于贝塞尔曲线(0, 0, 0.58, 1.0).
	ease-in-out：（加速然后减速），ease-in-out 函数等同于贝塞尔曲线(0.42, 0, 0.58, 1.0)

		
		.p3_desc{width:100%;height:100px; background: url(http://www.dlyestar.com/zhuanti/misko/images/part3_desc.jpg) no-repeat center top;margin-top:39px;position: relative;top:0; transition: all 0.5s ease-in-out;}
		.p3_desc:hover{top:-10px;}

##CSS3：transform
transform的属性包括：rotate() / skew() / scale() / translate(,) ，分别还有x、y之分，比如：rotatex() 和 rotatey() ，以此类推。

transform 属性向元素应用 2D 或 3D 转换。该属性允许我们对元素进行旋转、缩放、移动或倾斜。http://www.daqianduan.com/2959.html

一个CSS值转REM的Sublime Text插件
https://github.com/flashlizi/cssrem

##HTML5
 -视频

	<video width="100%" controls autobuffer>
	    <source src="images/principle1.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'></source>
	</video>
-音频


	<audio id="audio" src="音乐地址" loop preload="auto" autoplay="true" class="hide"></audio>

>这里有个问题，IOS是不能自动播放音乐的，一定要触发一个用户交互事件，例如点击。
>
>但是有一种hack的方法可以让IOS微信侧页面自动播放（SAFARI依旧无效）：
>
>通过new一张图片，监听一张图片的onload事件，结束后回调执行音频播放audio.play()即可，原理估计是动了dom结构，相当于执行了一次交互。（有人也用过createEvent模拟，原理也是动了dom。）

