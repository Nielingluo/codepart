Gulp，简而言之，就是前端自动化开发工具，利用它，我们可以提高开发效率。

比如：压缩js、压缩css、压缩less 、压缩图片等等… 
我们完全可以利用Gulp来自动化地完成这些重复性很强的工作。

##[最好的总结](http://www.cnblogs.com/rion1234567/p/5556891.html):　

gulp是基于Nodejs的自动任务运行器，基本流程就是先安装nodejs，通过nodejs的npm全局安装和项目安装gulp，其次在项目里安装所需要的gulp插件，然后新建gulp的配置文件gulpfile.js并写好配置信息（定义gulp任务），最后通过命令提示符运行gulp（webstorm神器更简单）。

##node：可以运行在后端的JavaScript。

V8引擎（V8是Google Chrome浏览器的JavaScript引擎），通过对高性能V8引擎的封装，并通过一系列优化的API类库，使其就能够在后端运行了。

非常好的教程开端：
http://www.cnblogs.com/giggle/p/5357269.html


-----------------------

#[Gulp上手压缩Javascript操作流程](http://www.cnblogs.com/giggle/p/5389188.html)

###第一步：安装node.js

1，[官网下载](https://nodejs.org/en/)安装最新node.js。

2，在下载完安装包后，在windows下按照默认程序走就可以了。

3，检验是否安装成功。

	node – v  
	npm –v

###第二步：全局安装gulp：

1，按【官方文档】（http://www.gulpjs.com.cn/docs/getting-started/）走：

	命令行执行：npm install --global gulp

	//ps：尝试npm install gulp –g安装出错。所以乖乖照官方走。

2，检验是否安装成功。 

	gulp –v

3，[小试牛刀之压缩Javascript](http://www.cnblogs.com/giggle/p/5389188.html)实例按步骤走{注意事项4.5}。


注意事项:

4，请在命令中输入npm install gulp和npm install gulp-uglify安装它们。安装好后，会发现在相应目录下会多出个node_modules的文件夹，里面就涵盖了我们安装的模块。

5，引入什么模块，就要安装一下。

	//引入gulp-rename这个模块，用于重命名压缩后的文件。
	//引入gulp-watch-path这个模块，就可以做到修改了什么，就实时压缩对应文件，而不是盲目地全压缩。
	//比如：后面还要安装:
	npm install gulp-watch-path
	npm install gulp-rename

成功：路径E:\gulp

-----
出错修改记录：

>出错：20170924安装图片精灵模块出错error-gulp-shasum.jpg：

>解决：使用cnpm安装后，成功

>参考：[解决npm 的 shasum check failed for错误](https://segmentfault.com/a/1190000008073872)

###[安装cnmp](https://npm.taobao.org/)

	$ npm install -g cnpm --registry=https://registry.npm.taobao.org

注意：安装完后最好查看其版本号cnpm -v或关闭命令提示符重新打开，安装完直接使用有可能会出现错误；


>#####解决国内NPM安装依赖速度慢问题

>如果你没有安装cnmp 而你又想从镜像服务器获取资源那么下面这个方法可以帮到你：

>在安装时可以手动指定从哪个镜像服务器获取资源，我们可以使用阿里巴巴在国内的镜像服务器，命令如下：
>
	npm install less -g --registry=http://registry.npm.taobao.org  //–registry参数指定镜像服务器地址


-------
##webstorm运行gulp任务

>使用webstorm可视化运行gulp任务；

将项目导入webstorm，右键gulpfile.js 选择”Show Gulp Tasks”打开Gulp窗口，若出现”No task found”，选择右键”Reload tasks”，双击运行即可。[图示](http://static.ydcss.com/uploads/2015/03/webstorm.png)

-------------------------

npm（node package manager）nodejs的包管理器，用于node插件管理（包括安装、卸载、管理依赖等）；

###全局安装与非全局安装

-g：全局安装。将会安装在C:\Users\Administrator\AppData\Roaming\npm，并且写入系统环境变量；

非全局安装：将会安装在当前定位目录；

>全局安装可以通过命令行在任何地方调用它，本地安装将安装在定位目录的node_modules文件夹下，通过require()调用；



[webpack为”模块化管理”和”打包工具”](http://www.imooc.com/article/20086)，它可以将许多松散的模块按照依赖和规则打包成符合生产环境部署的前端资源。


##DOS命令：

cd定位到目录，用法：cd + 路径 ；

dir列出文件列表；

cls清空命令提示符窗口内容。

--------
20170915

[Gulp：任务自动管理工具](http://javascript.ruanyifeng.com/tool/gulp.html)

>gulp有四个基本的API：gulp.task()，gulp.src()，gulp.dest()，gulp.watch()
>
详细介绍这些API之前，我们先简单了解一下gulp中任务的常见执行过程：通过gulp.src()方法获取到我们想要处理的文件流（html、css、js和图片等待） 通过管道（pipe）方法把流依次传递给各种插件（编译、合并、压缩、重命名等等）进行操作 把经过插件处理后的流再通过pipe方法导入到gulp.dest()中 gulp.dest()方法把流中的内容写入到文件中。


[Unregistered Vcs root detected](https://stackoverflow.com/questions/27690431/configure-intellij-idea-such-that-source-detected-in-git-but-unregistered-vcs-ro)

[emmet技能](http://www.cnblogs.com/jikey/p/3607133.html)

[webstorm入门1-主题和配色](http://frontenddev.org/article/webstorm-portal-1-subject-and-match-colors.html)


20170921
glup更多模块使用
http://yaohuitao.com/?p=239
http://www.imooc.com/article/16592


-------
##[use-gulp](https://github.com/Platform-CUF/use-gulp)
[gulp慕课视频](http://www.imooc.com/video/5692)发现以下东西：

Yeoman--Web 应用开发流程与工具

[前端项目可以更简单—Yeoman入门指南（1）](http://ju.outofmemory.cn/entry/36120)

-------------
安装模块出错截图error-gulp-package.jpg
###[NPM 包管理中package.json文件的使用](https://itbilu.com/nodejs/npm/Nkq9GPy1Z.html)

###创建package.json文件
######方法一：
创建一个package.json文件，可以使用npm init命令：

	npm init 问答方式创建

输入命令后，npm会通过命令行问答的方式来初始化并创建package.json文件。

######方法二：
如果觉得命令行模式复杂，可以添加--yes或-y参数，这样npm就会使用一些默认值进行初始化。

	npm init --yes

这样，你不用回答任何问题就可以创建一个包含以下初始值的package.json文件：


###管理依赖项

有以下两种管理依赖包的方式：

* dependencies：在生产环境所使用的包
* devDependencies：在开发环境所使用的包


###使用--save和--save-dev安装参数

npm提供了更简单的安装和保存包的方式，在安装命令中添加--save和--save-dev参数，指定的包就会被安装且依赖信息会被保存在dependencies或devDependencies节点中。

将包信息写入package.json文件的dependencies节点下：

	npm install <package_name> --save

将包信息写入package.json文件的devDependencies节点下：

	npm install <package_name> --save-dev

有关package.json文件的更多信息，请参阅其【[official documentation](https://docs.npmjs.com/getting-started/using-a-package.json) 】    【[阮一峰的介绍](http://javascript.ruanyifeng.com/nodejs/packagejson.html)】

---------------
##gulp模块：
###图片精灵合并：gulp-css-spritesmith

使用教程：【[链接中文](http://y.dobit.top/Detail/280.html)】 【[模块官方教程英文版](https://github.com/twolfson/gulp.spritesmith)】

###三种图片压缩优化详解及对比：[链接](http://blog.csdn.net/x550392236/article/details/78017346)
* **图片压缩1:gulp-imagemin**

	参考链接：[压缩图片教程](https://zhaomenghuan.github.io/2017/04/01/Angular%E7%B3%BB%E5%88%97%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0%EF%BC%88%E4%BA%8C%EF%BC%89%E2%80%94%E5%9F%BA%E4%BA%8Egulp%E6%9E%84%E5%BB%BAAngular%E5%8D%95%E9%A1%B5%E9%9D%A2%E5%BA%94%E7%94%A8)

* **图片压缩2:gulp-tinypng(每个月只能压缩500张))**


	1， 需要配置API Key;去tinypng开发者[https://tinypng.com/developers](https://tinypng.com/developers),获得一个合法的API Key。否则运行会出现如下错误：

	gulp-tinypng - Credentials are invalid

	2，  [我的API key](https://tinypng.com/dashboard/developers)=>>使用API:[链接](https://github.com/creativeaura/gulp-tinypng)


	>实力坑：

	>该[API](https://www.npmjs.com/package/gulp-tinypng)写错个单词导致一直报错.报错截图：error-gulp-tinypng.jpg

	>	ReferenceError: tingpng is not defined

	>折腾好久，才发现 .pipe(tingpng('API_KEY'))中应该是tinypng!!!!

* **图片压缩3:gulp-tinypng-nokey（无限使用）**

	模拟用户上传和下载的行为，来得到压缩图片，突破使用官网api每月500张限制

	使用API:[链接](https://www.npmjs.com/package/gulp-tinypng-nokey)

	>尽量放到任务的最后一步，因为这个过程是要上传图片，再下载图片的，和网络稳定有关
	
###压缩css文件:gulp-clean-cs

官方教程：[链接](https://github.com/scniro/gulp-clean-css)

###less 文件转换成css文件 —— gulp-less
官方教程：[less转换css+结合Source Maps使用链接](https://github.com/stevelacy/gulp-less)

----------------------------------------------LESS------------------------------------------

##[koala](http://koala-app.com/index-zh.html)-前端预处理器语言图形编译工具

安装Less：

	npm install less -g

less英文版：[链接](http://less.bootcss.com/usage/)

less中文版：[链接](http://www.lesscss.net/)

http://lesscss.cn/features/   http://www.bootcss.com/p/lesscss/



####20170921修改webstorm内存

运行老是卡顿，搜索说是由于 webstorm 内置的 git 插件会自动检查文件变化，所以项目下的 node_modules 目录可能会导致编辑器卡死[链接](https://zengqi.me/webstorm-vmoptions/)。

打开webstorm.exe.vmoptions-->>修改最大值：-Xmx512m 改为-Xmx1024m。

为什么我改完后启动不了了。。。。。


###[什么是Source map:](http://www.cnblogs.com/w-wanglei/p/5701356.html)

由于css和js都是经过了压缩转换，当报错时我们很难定位到源代码具体位置。为了解决这个问题，Source map由此诞生。

Source map相当于一个映射文件，它提供了转换后的代码，所对应源代码的位置。也就是说，在调试js过程中，我们可以清楚的看到当前执行代码对应于源代码的具体位置。

###实例演示:

* 文件夹：SourceMap

* 效果演示图片：SourceMap使用展示.gif

参考资料：[Source Map入门教程](https://blog.fundebug.com/2017/03/13/sourcemap-tutorial/) 图片截图：Source Map使用.png



---------------------------------------wait--------------------------------------------------------



[提高你的前端开发效率啊，切图仔](https://www.w3ctrain.com/2017/07/01/effective-work/)