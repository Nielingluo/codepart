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













 Ctrl+Shift+L
 Ctrl+Shift+J---选中一段
 Ctrl+J----多行合并

