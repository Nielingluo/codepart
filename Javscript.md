##回调函数
什么是回调函数？
>你到一个商店买东西，刚好你要的东西没有货，于是你在店员那里留下了你的电话，过了几天店里有货了，店员就打了你的电话，然后你接到电话后就到店里去取了货。在这个例子里，你的电话号码就叫回调函数，你把电话留给店员就叫登记回调函数，店里后来有货了叫做触发了回调关联的事件，店员给你打电话叫做调用回调函数，你到店里去取货叫做响应回调事件。

##js定义函数

JavaScript中，定义函数一般有两种方式：一种是函数声明，另一种是函数表达式。

**1, 函数声明的一般语法为：**

	function functionName(arg0,arg1,arg2){
	    //函数体
	}

>用这种方式定义的函数，我们既可以在声明前调用函数，也可以在声明后调用该函数。由于在代码执行之前，解释器会先读取函数的声明，所以声明前调用函数并不会产生语法错误，这个特征叫做*函数声明提升*。


	AlertString();          //声明前调用  
	function AlertString(){ //声明函数  
	 alert("HelloWorld");  
	}  
	 AlertString();         //声明后调用  

**2, 函数表达式有很多种语法形式，下面是最常见的一种形式：**

	var functionName=function(arg0,agr1,agr2){
	    //函数体
	};

>我们可以把函数表达式理解成其他表达式一样，就是把创建的函数赋值给一个变量，这种情况创建的函数称为匿名函数。
在使用匿名函数之前，必须先进行赋值操作，否则将会引起错误。

	Alert(); //失效,应该先赋值在使用  
	var Alert=function(){  
	  alert("Hello world");    
	};  


##传递给函数的数据称为参数（argument）:比如a,b就是传递给函数的参数

	 function numadd(a, b) {
          sum = a + b;
           console.log(sum);
     }

     numadd(9, 90);

##理解参数——《Javascript高级程序设计（第三版）P64
* 小结1：ECMAscript中没有函数签名的概念，因为其函数参数是以一个包含零或多个值的数组的形式传递的。
* 小结2：可以向ECMAscript函数传递任意数量的参数，并且可以通过arguments对象来访问这些参数。
* 小结3：由于不存在函数签名的特性，ECMAscript函数不能重载。（也就是说不能定义两个名字相同的函数，，否则该名字只属于后定义的函数。就像css样式后者会覆盖前者一个意思。）

> ECMAscript函数不介意传递进来多少个参数，也不在乎传进来参数是什么数据类型。也就是说即便你定义的函数只接收两个参数，在调用这个函数时也未必一定要传递两个参数。可以传递一个、三个甚至不传参数，而解析器永远不会有什么怨言。原因：ECMAscript中的参数在内部是用一个数组来表示的。在函数体内可以通过argument对象来访问这个参数数组，从而获取传递给函数的每一个参数。第一个元素arguments[0]，第二个元素arguments[2]，以此类推。使用length属性来确定传递进来多少个参数。

    function sayHi(name, wh, eat) {
        console.log("hi~" + name + ',' + wh + eat + arguments[3]);
        console.log(arguments.length);
    }

    sayHi('lily', 'how are you today', ',have you lunch?', 'Nice to meet you~');


##数值转换 Number() 、parseInt()、parseFloat()
由于Number()函数在转换字符串时比较复杂而且不够合理，因此在处理整数的时候更常用的是parseInt()函数。

        //除第一个小数点有效外，parseInt()和parseFloat()的第二个区别在于它始终会忽略前导的零。
           var Oint = parseInt("009",10); //第二个参数10 表示按十进制解析
           var Oflot = parseFloat("099"); //parseFloat()只解析十进制，因此它没有用第二个参数指定基数的用法。
           console.log(Oint); //9
           console.log(Oflot); //99



##方法
**indexOf()**方法可返回某个指定的字符串值在字符串中首次出现的位置。
说明：
indexOf方法返回一个整数值,stringObject中的字符位置是从0开始的。如果没有找到子字符串，则返回-1。（所以只要判断不是-1，也就是>=0就是存在）
用处：判断域名中包含某个字符串那么在该网页下引入js或是css
代码：


            var Ostr = "Hello 世界!";
            if(Ostr.indexOf("Hello")!=-1){  //不是-1存在
                alert("包含Hello");
            }else{
                alert("不包含Hello");
            }

            var Odoamin = window.location.pathname;
                var str = 'baidu';
                if(Odoamin.indexOf(str)>=0){  //>=0就是存在
                    console.log("包含！");

                }else {
                    console.log("不包含");
            }

            //用处案例：如果放html页面测试，要给</script>加转义字符。
            var this_url = window.location.href;
            if (this_url.indexOf('/zt/') >= 0) {
                document.write('<script src="/static/js/iscroll.js" type="text/javascript"></script>');
                document.write('<script src="/static/js/diseaseMenuScroll.js" type="text/javascript"></script>');
            }



**substring()**方法用于提取字符串中介于两个指定下标之间的字符。

            var OK = "nijingmei";
			document.write(OK.substring(3,7));

##Tips
innerHTML在JS是双向功能：**获取对象的内容**或**向对象插入内容**；

Jquery没有innerHTML这个属性，应该这样写$("#div")[0].innerHTML=msg就可以获得这个Dom对象使用innerHTML[实例见：hzkh]。

$("#tabs").innerHTML是无意义的，innerHTML是DOM元素的属性。

document.getElementById("#tabs").innerHTML;这样是可以获得html代码的。


##生成随机数

	<script type="text/javascript">
		document.write(Math.floor(10+Math.random()*20));
	</script>

##document.write() 和document.writeln()区别

document.write()和document.writeln都是JavaScript向客户端写入的方法。唯一不同是，WriteIn 会增加一个换行。一般情况下用两种方法输出的效果在页面上是没有区别的，两种方法仅当在查看源代码时才看得出区别，

####如何命名变量和函数。

1，变量用下划线来分割各个单词。

2，函数采用驼峰命名。

这样就可以一眼看出哪些是变量，哪些是函数。

###js选择器 DOM拓展了querySelectorAll()、querySelector()和matchesSelector()

* querySelector()方法接收一个CSS选择符，返回与该模式匹配的第一个元素，如果没有找到匹配的元素，返回null。

	<body style="height: 100%;">

		<div class="box" id="box" style="height: 200px;">
		<ul class="list" style="height:100px">
		        <li class="in" style="height: 30px;">1</li>
		        <li class="in" style="height: 30px;" title="test">2</li>
		        <li class="in" style="height: 30px;">3</li>
		    </ul>    
		</div>
		<script>
		//因为没有.null类名，所以返回null
		var oNull = document.querySelector('.null');
		console.log(oNull);//null
		//通过<body>标签取得元素
		var body = document.querySelector("body");
		console.log(body.style.height);//100%
		body.style.fontSize="50px";  //设置字体大小
		//通过id属性取得元素
		var oBox = document.querySelector('#box');
		console.log(oBox.style.height);//200px
		//通过结合元素的类选择器取得元素
		var oList = document.querySelector('ul.list');
		console.log(oList.style.height);//100px
		//通过类名取得元素
		var oIn = document.querySelector('.in');
		console.log(oIn.innerHTML);//1
		//通过属性选择器取得元素
		var oTest = body.querySelector('[title="test"]');
		console.log(oTest.innerHTML);//2
		</script>

	</body> 

* querySelectorAll()接收一个CSS选择符，返回一个类数组对象NodeList的实例。没有匹配元素时，返回空的类数组对象，而不是null.
 
* matchesSelector()方法接收一个CSS选择符参数，如果调用元素与该选择符相匹配，返回true；否则返回false

**非实时**

　　与getElementById()和getElementsByTagName()方法不同，matchesSelector()和querySelectorAll()方法得到的类数组对象是非动态实时的。比如你在原结构中新增一个div，matchesSelector()和querySelectorAll()方法得到的类数组对象可能还是未加div之前的。

参考：[深入理解javascript选择器API系列第三篇——HTML5新增的3种selector方法](http://www.cnblogs.com/xiaohuochai/p/5798014.html)


###[注意](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/querySelector)

如果没有找到匹配元素，则返回 null，如果找到多个匹配元素，则返回第一个匹配到的元素。

如果选择器是一个 ID，并且这个 ID 在文档中错误地使用了多次，那么返回第一个匹配该 ID 的元素。

如果指定的选择器不合法，则抛出 SYNTAX_ERR 异常。

##Location对象：

        var Ohref = window.location.href; //返回完整url
        var Ohost = window.location.host;  //返回带端口号的服务器名称（域名）console.log(document.domain); 都是返回域名 www.baidu.com
        var Ohostname = window.location.hostname; //返回不带端口号的服务器名称（域名）
        var Opath = window.location.pathname;  //返回url中的目录或是文件名
        console.log(Ohref);
        console.log(Ohost);
        console.log(Ohostname);
        console.log(Opath);

		#window.location
		示例地址:http://www.home.com:8080/windows/location/page.html?ver=1.0&id=timlq#love
		
		###1，window.location.href：整个URl字符串(在浏览器中就是完整的地址栏)
		返回值：http://www.home.com:8080/windows/location/page.html?ver=1.0&id=timlq#love
		
		###2，window.location.host：URL 的主机部分，
		返回值：www.home.com
		
		###3，window.location.pathname:返回URL的路径部分(就是文件地址)
		
		返回值：/windows/location/page.html
		
		###4，window.location.search
		查询(参数)部分。除了给动态语言赋值以外，我们同样可以给静态页面,并使用javascript来获得相信应的参数值
		返回值：?ver=1.0&id=timlq
		
		###5，window.location.hash：锚点
		返回值：#love
		
		window.location参考：https://baike.baidu.com/item/window.location/501956?fr=aladdin


##[JavaScript获取浏览器高度和宽度值](http://www.cnblogs.com/lvdabao/articles/3651779.html)

>html,body的高度样式如果设置为100%，$(window).scroll方法将检测不到正确的滚出高度（0），导致滚动监听事件失效，设置html,body{height:auto}可以解决。这个问题坑了我一下午....
	
	网页可见区域宽： document.body.clientWidth
	网页可见区域高： document.body.clientHeight
	网页可见区域宽： document.body.offsetWidth (包括边线的宽)
	网页可见区域高： document.body.offsetHeight (包括边线的高)
	网页正文全文宽： document.body.scrollWidth
	网页正文全文高： document.body.scrollHeight
	网页被卷去的高： document.body.scrollTop
	网页被卷去的左： document.body.scrollLeft
	网页正文部分上： window.screenTop
	网页正文部分左： window.screenLeft
	屏幕分辨率的高： window.screen.height
	屏幕分辨率的宽： window.screen.width
	屏幕可用工作区高度： window.screen.availHeight
	屏幕可用工作区宽度： window.screen.availWidth


	scrollWidth ==> 获取对象的滚动宽度
	scrollHeight ==>  获取对象的滚动高度
	scrollLeft ==> 设置或获取位于对象左边界和窗口中目前可见内容的最左端之间的距离（被卷去的左）
	scrollTop ==> 设置或获取位于对象最顶端和窗口中可见内容的最顶端之间的距离（被卷去的高）
	offsetLeft ==> 获取对象相对于版面或由 offsetParent 属性指定的父坐标的计算左侧位置
	offsetTop ==> 获取对象相对于版面或由 offsetTop 属性指定的父坐标的计算顶端位置
	offsetHeight ==> 获取对象相对于版面或由父坐标 offsetParent 属性指定的父坐标的高度


	event.clientX ==> 相对文档的水平座标
	event.clientY ==> 相对文档的垂直座标	
	event.offsetX ==> 相对容器的水平坐标	
	event.offsetY ==> 相对容器的垂直坐标	
	document.documentElement.scrollTop ==> 垂直方向滚动的值	
	event.clientX+document.documentElement.scrollTop ==> 相对文档的水平座标+垂直方向滚动的量

屏幕宽度：

		//      var Scw= window.screen.width;
		//      console.log(Scw);


	$(function(){
	var navHs = $("#s1_time").offset().top; //定位元素距离浏览器顶部的距离
	//滚动条事件
	$(window).scroll(function(){
	//获取滚动条的滑动距离
	var scroH = $(this).scrollTop(); // 滚动条的滑动距离
	//滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定
	  if(scroH>=navHs){
	  $("#s1_time").css({"position":"fixed","top":0});
	  }else if(scroH<navHs){
	  $("#s1_time").css({"position":"absolute","top":0});
	  }
	});
	});
	$(function(){
		$('#s1_time').onePageNav();
	});

##清除定时器

    <input type="button" onclick="clearInterval(timer)" value="stop" class="openzz">
    <script>
        var timer=setInterval(function () {
            console.log(2);
        },1000);
    </script>



##js逻辑操作符

- 与运算（&&）——两个条件都为true时，表达式才是true。

- 或运算（||）——两个条件只要有一个为true，表达式便是true，否则为false。

- 非运算（！）——就是简单的将true变为false，或者将false变为true。

##函数返回值-return详解(return返回值)

//数字 字符串 布尔 函数 对象(元素\[]\{}\null) 未定义

	//函数名（）=return 后面的东西
	f1(); =>100   

	alert(f1());  //返回值是100
	function f1() {
		//return 100;
		//return "miaov";
	}
	
	实例应用见{1-函数返回值-return详解及应用.html}：
	//alert(getid("ff").innerHTML);
	//alert(getid("sub2").innerHTML);
	
	function getid(id) {
		return document.getElementById(id);
	}



##jquery同时设置多个div的click事件？

1，用逗号列出需要设置click的元素

	$('#test-1000,#test-1111').click(function(){ alert($(this).attr("id"));});

2，给要点击的div相同的class

	<div id="test-1000" class="foo"></div>
	<div id="test-1111" class="foo"></div>
	
	$('.foo').click(function(){
	    console.log('clicked div:', $(this).attr("id"));
	});

#javascript:;  javascript:void(0); 
		#list{}       var OUl =  document.getElementById('list');  静态方法
		li{}          document.getElementsByTagName('li');         动态方法
		#list li{}    var aLi =  OUl.getElementsByTagName('li');

		//第三种获取元素的方法
		//document.title=123;
		//document.body.innerHTML = 'abc';
#body中用js添加按钮
	// innerHTML = 替换
	// innerHTML += 添加
	// document.body.innerHTML = '<input type="button" value="3"/>'+document.body.innerHTML;

	/*
	for(var i=0; i<200;i++){
		document.body.innerHTML += '<input type="button" value="按钮"/>';
	}*/
	
	// 上述代码性能优化
		/*	var str='';
		for(var i=0; i<200;i++){
			str+='<input type="button" value="按钮"/>';
		}
		document.body.innerHTML =str;
		*/

##数组
声明数组有两种方式：

        var group = Array("张三","赵四","susans");  /*方式1：声明数组的同时对它进行填充*/

        var group2 = ["ni","ko","djjd"]; /*方式2：我们甚至不用明确表明我们是在创建数组。只需要用一对方括号把各个元素的初始值括起来就可以了。*/

        var group = [{name: "lily", age: 18}, {name: "sam", age: 20}]        /*创建包含两个对象的数组。*/


        function mgroup() {
            for( var i = 0; i<group.length;i++){
                console.log(group[i]);
            }
        }

        mgroup();


##for循环遍历二维数组
		arr=[[1,2,3], [4,5,6], [7,8,9] ]; 

		//arr[0][0] 查找数组第一个
		//arr[1][0] 查找数组第二个的第二个数
		for(var i=0;i<arr.length;i++){
			//arr[i];
			for(var j=0; j<arr[i].length;j++){  //嵌套时用j
				alert(arr[i][j]);
			}
		}







