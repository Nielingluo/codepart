####sublime设置插件px-rem转换文件：搜索文件cssrem.sublime-settings

##带 BOM 的 UTF-8 就是赤裸裸的流氓！！

它产生的BUG包含但不仅限于：

 HTML空白行

 div之间莫明的间隔

 乱码！


##[移动端尺寸基础知识](https://colachan.com/post/3435)

>我们平时所说的480x800、320x480、640x960都是指的手机的分辨率，都是手机屏幕的实际像素尺寸。而我们平时调试iPhone6下看到的375x667则是手机屏幕的物理尺寸也就是逻辑像素尺寸。 真正决定显示效果的，是逻辑像素尺寸。单位决定了我们的思考方式。所以在设计和开发过程中，应该尽量使用逻辑像素尺寸来思考界面。（讲psd宽度进行倍数放大）

* 要知道，屏幕是由很多像素点组成的。之前提到那么多种分辨率，都是手机屏幕的实际像素尺寸。

	**比如480x800的屏幕，就是由800行、480列的像素点组成的。**每个点发出不同颜色的光，构成我们所看到的画面。


* **而手机屏幕的物理尺寸，和像素尺寸是不成比例的。**

	最典型的例子，iPhone 3gs的屏幕像素是320x480，iPhone 4s的屏幕像素是640x960。刚好两倍，然而两款手机都是3.5英寸的。


相关介绍截图：移动端尺寸基础知识.png

---

我们的设计稿是以iphone6为基准来做的，而iphone6的屏幕像素宽是750px，逻辑像素是375px，那么为什么我们的设计稿是750px宽的呢？就是因为切图时获取到的图片是页面上的两倍大，在retina屏幕上实际上是相当于把图片缩小了一倍的，这样可以看到更清晰的图片。

相关介绍截图：倍率与逻辑像素.png

-----------

###固定背景（background－attachment）

该属性只用于页面背景，即<BODY>标签内设定的背景图象。

其参数有两种选择：
 
scroll指背景图象随文字内容一起滚动，即通常所见的方式。 background-attachment:scroll;

fixed指文字滚动时，背景图象保持固定。 background-attachment:fixed;

		BODY { background-attachment: fixed; background-image: 
		url(te.gif) }

------------------
###box-shadow:
	//box-shadow: h-shadow[水平距离] v-shadow[垂直距离] blur[模糊距离];
	box-shadow:0px 0px 5px #000;  
其他参数：https://www.w3cschool.cn/cssref/pr-box-shadow.html

-----------------------

###<base> 标签的 target 属性：为页面上所有链接规定默认目标。

	<head>
	<base target="_blank" />
	</head>
	
	<body>
	<a href="http://www.w3school.com.cn">W3School</a>
	</body>


###CSS3 动画

 1, @keyframes规则用于创建动画。在@keyframes中至少规定动画的名称及时长，就能创建由当前样式逐渐改为新样式的动画效果。

 2, 将动画绑定到选择器:

		animation: name duration timing-function delay iteration-count direction;
		[animation-name                规定需要绑定到选择器的 keyframe 名称。]
		[animation-duration            规定完成动画所花费的时间，以秒或毫秒计。]
		animation-timing-function     对应的值为"linear",动画从头到尾的速度是相同的。    
		animation-delay               规定在动画开始之前的延迟,此处 .4s 为0.4秒
		animation-iteration-count     对应的值为"infinite",动画无限次播放。
		animation-direction           对应的值为"alternate",轮流反向播放动画。
		如果 animation-direction 值是 "alternate"，
		则动画会在奇数次数（1、3、5 等等）正常播放，而在偶数次数（2、4、6 等等）向后播放。

--------------------

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

>块状元素可以包含其他元素 行内元素只能包含行内元素。


##css input
css input 如何去掉点击后出现的边框 input {outline:none;}
input 如何去掉边框border:none; 

	.card_wrap input{font-size: 1.2rem; line-height: 2.625rem; border:none; outline: none; border-bottom: 2px solid #bc9e63; background: #000; color: #fff; padding-left: 0.625rem; }

##css3为了区分伪类和伪元素，伪元素采用双冒号写法。

常见伪类——:hover,:link,:active,:target,:not(),:focus。

常见伪元素——::first-letter,::first-line,::before,::after,::selection。

::before和::after下特有的content，用于在css渲染中向元素逻辑上的头部或尾部添加内容。

这些添加不会出现在DOM中，不会改变文档内容，不可复制，仅仅是在css渲染层加入。

> ::before和::after必须配合content属性来使用，content用来定义插入的内容，content必须有值，至少是空。默认情况下，伪类元素的display是默认值inline，可以通过设置display:block来改变其显示。http://www.cnblogs.com/starof/p/4459991.html

另外一篇关于伪类伪元素的讲解；http://blog.csdn.net/sadfishsc/article/details/7047595
##清除浮动
	//<div class="clear"></div>标签会引起IE和FF高度变化，通过如下方法解决：
   	.clear{clear:both; height: 0; height: 0; overflow:hidden; }
##伪元素  :after 方法 
给浮动元素的容器添加一个clear的class，然后给这个class添加一个:after伪元素实现元素末尾添加一个看不见的块元素（Block element）清理浮动。为了IE6和IE7浏览器，要给clearfix这个class添加一条zoom:1;触发haslayout。 

	.clear { zoom:1; }    /* 触发 hasLayout */ 
	.clear:after { content:''; display:block; clear:both; }

	<div class="news clear">
	    <img src="news-pic.jpg" />
	    <p>some text</p>
	</div>
###使用CSS的overflow属性
给浮动元素的容器添加overflow:hidden;或overflow:auto;可以清除浮动，另外在 IE6 中还需要触发 hasLayout ，例如为父元素设置容器宽高或设置 zoom:1。
在添加overflow属性后，浮动元素又回到了容器层，把容器高度撑起，达到了清理浮动的效果。
	.news {
	    background-color: gray;
	    border: solid 1px black;
	    overflow: hidden;
	    *zoom: 1;
	}
	 
	.news img {
	    float: left;
	}
	 
	.news p {
	    float: right;
	}
	 
	<div class="news">
	    <img src="news-pic.jpg" />
	    <p>some text</p>
	</div>

###使用邻接元素处理
什么都不做，给浮动元素后面的元素添加clear属性。
#总结：
> 在网页主要布局时使用:after伪元素方法并作为主要清理浮动方式；在小模块如ul里使用overflow:hidden;（留意可能产生的隐藏溢出元素问题）；如果本身就是浮动元素则可自动清除内部浮动，无需格外处理；正文中使用邻接元素清理之前的浮动。
最后可以使用相对完美的:after伪元素方法清理浮动，文档结构更加清晰。
参考;http://helloweb.wang/qianduankaifa/Html5Css3/2015-12-09/419.html
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

++++++++++++++++++++++++++++++

##现代手机浏览器默认字体大小是16px,而设置1.4rem在所有手机上的大小都为：1.4 * 10px =14px，在所有手机上并没有变化。
来源：https://segmentfault.com/q/1010000008178295
rem」是指根元素（root element，html）的字体大小，即rem永远是基于根元素设置字体的大小来改变元素的字体大小。现代手机浏览器默认字体大小是16px，所以网上很多答案说给根元素设定字体大小为62.5%，即10/16=0.625，即根元素的字体大小为10px。这样给div设定字体大小即可以设定
{font-size : 1.4rem}，但是会发现字体大小在屏幕上并没有动态的发生变化。因为在所有手机屏幕上字体默认大小都是16px，而设置1.4rem在所有手机上的大小都为：1.4 * 10px =14px，在所有手机上并没有变化。这个大概就是你的疑惑也是我之前的疑惑。

之后，看了很多资料，我们少了一个最重要的一个步骤，即我们需要根据屏幕宽度动态设定根元素的字体大小，这样在字体才会根据屏幕的大小变大和变小。

假设以iPhone6屏幕为主，屏幕宽度为375，首先我们需要用js获取屏幕的宽度，然后以屏幕宽度除以375，这个值代表1px在不同屏幕上所占的比例，再乘以10，用这个值设置html的字体大小，这样这个值在6的屏幕是10px，而在5的屏幕为8.53px，在6p上为11.04px，这样你设置

	div{font-size : 1.4rem} //在5上字体大小：1.4*8.53 = 11.94px,在6上：1.4 * 10 = 14px,
	//在6p上：1.4 * 11.04 = 15.456px
这样即可以完美使适应不同屏幕的不同字体大小，这才是rem的正确用法。
ps : 由于在chrome上面不能识别12px以下的字体，所以你设置根元素为10px在chrome并不能完美识别，会发现1rem最小高度是12px，所以建议可以以20px或者10px为基准，我们现在项目以100px为基准。
ps:楼上有另一种实现rem，没试过，可以去尝试下。
附设置rem字体大小的js:

	function setRemFontSize() {
        let doc = document.documentElement
        doc.style.fontSize=doc.clientWidth/375 * 100 +'px';
++++++++++++++++++++++++++++++
   

#letter-spacing来设置字与字间距_字符间距离
	span{ font-size: 20px; color: #000; letter-spacing: 10px; } /*字间距*/


#行高 %
谷歌浏览器字体的默认大小是：16px，字体的最小值为：12px，默认行高为：18px；

如果line-height单位设置为%，那么将来在计算的时候，基数是当前标签中的文本的字体的大小。

如果是%,%之前的数据一定是整数 ：150% ，200%

###line-height 百分比和数值设置行高：

	line-height:26px;      /*表示行高为26个像素*/
	line-heigth:120%;     /*表示行高为当前字体大小的120%*/
	line-height:2.6em;    /*表示行高为当前字体大小的2.6倍*/


1. line-height的值为百分比 ：子集元素继承父级元素的距离

	//设置：
	body{font-size:14px;line-height:150%;}
	p{font-size:26px;}

	//说明:
	body{line-height:21px;}//14*150%=21
	p{line-heigt:21px;}//继承父元素 

2. line-height的值为数值 :子元素计算各自的行距离

	//设置：
	body{font-size:14px;line-height:1.5;}
	p{font-size:26px;}

	//说明:
	body{line-height:21px;}//14*1.5=21
	p{line-heigt:39px;}//26*1.5=39 


#body{font-size: 62.5%;}
当设置了body{font-size: 62.5%;}时，1em则=16px*62.5%=10px,1.2em则=12px,1em=10px,1.4em=14px;
###设置：body{font-size: 62.5%;}和body{font-size: 625%;}区别：
当设置为62.5%时，1rem应该等于10px，然而在chrome下1rem=12px(Chrome的最小字体是12px)
当设置为625%时, 1rem=100px;即可以避免上述情况。参考：https://my.oschina.net/mayxu/blog/856367














#vh和vw
CSS宽度是相对于包含它的最近的父元素的宽度的。如果你想使用的是视口的高度或宽度，而不是父元素的，那要肿么办呢？vh和vw就能满足这个需求了。

1vh等于1%的视口高度。例如，浏览器高度是900px，那么1vh = 900*1%=9px

	.oop{ width: 100vw; height: 300vh;} //同屏幕等宽高的框
> 参考链接：http://www.ido321.com/1301.html

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

height:100%讲解：http://www.webhek.com/css-100-percent-height
背景图自适应：http://huilang.me/perfect-full-page-background-image/
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

##绝对定位居中
	.Absolute-Center{position: absolute; left: 0px; right: 0px; margin: 0 auto;}
	.Absolute-Center {margin: auto; position: absolute; top: 0; left: 0; bottom: 0; right: 0; }//同上



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

#transform: translateY属性 
让元素居中http://www.webhek.com/translatey-vertical-align

		.element {//这种技术很类似绝对定位，但这里父元素无需设置高度或无需设置父元素的position属性。它能在所有情况下使用，甚至IE9！
		  position: relative;
		  top: 50%;
		  transform: translateY(-50%);
		}




		.v_align p{position: relative; top: 50%; -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%); transform: translateY(-50%);}


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

##css3改变选中文本的颜色
		::selection {
		    background:#ff0000;   //红底
		    color:#fff;           //白字
		}

		::-moz-selection {
		    background:#ff0000; 
		    color:#fff;
		}

		::-webkit-selection {
		    background:#ff0000; 
		    color:#fff;
		}

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
#视频插件 搜索文件夹：jQuery-video5.10.8
		 poster="images/zc_1.jpg"   <!-- poster="**"播放初始图。 -->
> http://www.jq22.com/jquery-info404

-音频


	<audio id="audio" src="音乐地址" loop preload="auto" autoplay="true" class="hide"></audio>

>这里有个问题，IOS是不能自动播放音乐的，一定要触发一个用户交互事件，例如点击。
>
>但是有一种hack的方法可以让IOS微信侧页面自动播放（SAFARI依旧无效）：
>
>通过new一张图片，监听一张图片的onload事件，结束后回调执行音频播放audio.play()即可，原理估计是动了dom结构，相当于执行了一次交互。（有人也用过createEvent模拟，原理也是动了dom。）

#给文字加上下划线
http://www.tuicool.com/articles/BJ3Ivm7

#CSS 面包屑导航栏
http://www.jianshu.com/p/030a375934bf#

文字溢出相关处理。
http://jingyan.baidu.com/article/e75aca855b1500142edac6d0.html


兼容性：
		<!-- IE6不支持除超链接元素之外的：hover伪类选择符，此时可以用jQuery来弥补IE6对css支持的不足。 -->
		.focus{border: 1px solid #ff0;background: #fcc;}
        /* input:focus,textarea:focus{
            border: 1px solid #ff0;
            background: #fcc;
        	} */
		   <script type="text/javascript">
		        $(function(){
		            $(":input").click(function(){
		                $(this).addClass("focus");
		            }).blur(function(){
		                $(this).removeClass("focus");
		            })
		        })
		   </script>