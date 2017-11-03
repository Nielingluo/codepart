js
Web前端开发最佳实践
angular.js

基础算法，编程语言，设计模式，工程管理，网络知识等都是通用的,甚至这些基础底蕴掌握的好坏会直接决定你后续的发展空间

前端开发者天生就需要具备各种积极主动和开放包容的学习精神，多与业内的同行交流，多去关注下github上的一些火热的项目，多去尝试些新技术理念和调试一切的耐心。

诚然很多人都会说我只是想写个页面为何要弄的这么复杂，但是大家为何不反思下我们的页面开发的工作模式和技术选型上是不是真的一直以来被我们低估了才会有如此大的偏见，

angularjs2，react，vue




Web前端开发最佳实践.pdf
https://segmentfault.com/a/1190000003999308

A项目的CSS组织：兼容层 + 抽象UI层 + 组件层 ＋ 业务层:
https://kejun.github.io/share2013_11/?20

《现代前端技术解析》-技术图解：现代前端技术解析_V2@高清.jpg
https://github.com/ouvens/frontend-system-map


##《Web前端开发最佳实践 》笔记书摘：

###7.3  减少CSS的代码量

font简写属性： 可设置的属性是（按顺序）： "font-style font-variant font-weight font-size/line-height font-family"

			font:italic[斜体] bold 12px/30px Georgia, serif; 

避免class名重复 取父元素的class名为前缀 类名称连接符用中划线（-）

###form

	<div class="form">
        <form>
            <fieldset>
                <legend align="center">基本信息</legend>
				<label for="num">手机号:</label>
                <input class="user_sr num" placeholder="手机号"/>
                <label for="city">手机号:</label>
                <input class="user_sr city" placeholder="城市"/>
                <input type="button" class="user_submit" value="提交">
            </fieldset>
        </form>
    </div>

###<base> 标签的 target 属性：为页面上所有链接规定默认目标。

	<head>
	<base target="_blank" />
	</head>
	
	<body>
	<a href="http://www.w3school.com.cn">W3School</a>
	</body>