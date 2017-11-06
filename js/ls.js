$(function(){
	//input框获取焦点特效
	$(":input").click(function(){
		$(this).addClass("focus");
	}).blur(function(){
		$(this).removeClass("focus");
	});


	//文本框放大缩小
	var $height = $("#txt");
	$(".bigger").click(function(){
		if(!$height.is(":animated")){
			if($height.height()<500){
			//$height.height($height.height()+50);
			$height.animate({ height:'+=50px'},400);  
		}
		}
	});

	$(".summer").click(function(){
		if(!$height.is(":animated")){
			if($height.height()>50){
			//$height.height($height.height()-50);
			$height.animate({height:"-=50px"},400);
		}
		}
	});



	//复选框
	$("#selectAll").click(function(){
		$('[name=items]:checkbox').attr('checked',true);  //全选
	});
	$("#selectNo").click(function(){
		$('[name=items]:checkbox').attr('checked',false);  //不全选
	});
	/*$("#selectrev").click(function(){
		$('[name=items]:checkbox').each(function(){
			$(this).attr("checked",!$(this).attr("checked"));  //反选 each循环
		})
	})*/
	$("#selectrev").click(function(){
		$('[name=items]:checkbox').each(function(){
			this.checked=!this.checked;          //反选 js方式实现
		})
	});
	$("#submit").click(function(){
		var str="你选择的是:\r\n";
		$('[name=items]:checkbox:checked').each(function(){
			str += $(this).val() + "\r\n";
		});
		alert(str);
	});


	/*//全选/不全选1
	$("#select").click(function(){
		if(this.checked){
			$("[name=items]:checkbox").attr("checked",true);
		}else{
			$("[name=items]:checkbox").attr("checked",false);
		}
	})*/

	//全选/不全选2
	$("#select").click(function(){
		$("[name=items]:checkbox").attr("checked",this.checked); //P150
	});

/*==================================================================================================================================================*/

	//div隐藏显示
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

	//togg;Se方法
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



});




