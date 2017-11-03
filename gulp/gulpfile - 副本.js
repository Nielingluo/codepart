//引入gulp
var gulp = require('gulp');
//引入gulp-uglify模块，用于压缩JS
var uglify = require('gulp-uglify');
//引入gulp-contact模块，用于合并js
var concat = require('gulp-concat');
//1,图片压缩
var imagemin = require('gulp-imagemin');
//2,使用熊猫压图
var tinypng = require('gulp-tinypng');
//3,图片不限次数压缩nokey
var tiny = require('gulp-tinypng-nokey');
// 引入gulp-clean-css模块,用于压缩CSS    已废弃：minify-css
var cleanCSS = require('gulp-clean-css');
// 引入gulp-less模块，用于将less文件转换成css文件
var less = require('gulp-less');
//gulp-less可以与gulp-sourcemaps一起使用来为您的文件生成源地图
var sourcemaps = require('gulp-sourcemaps');
//引入gulp-watch-path
var watchPath = require('gulp-watch-path');
//引入gulp-rename
var rename = require('gulp-rename');
//生成雪碧图
var spritesmith = require('gulp.spritesmith');
//'firstScript'为我们自定义的任务名，匿名函数为'firstScript'具体任务
gulp.task('firstScript', function(){
	// 'script/*.js'是即将压缩的js文件
	gulp.src('script/*.js')
	//uglify()是调用的压缩方法，去压缩js
		.pipe(uglify())
		//给压缩后的文件，添加min后缀名
		.pipe(rename({suffix: '.min'}))
		//gulp.dest是将压缩后的文件另存为哪的方法，如存到newScript文件夹中
		.pipe(gulp.dest('newScript'));
});
//新增一个auto任务
gulp.task('auto', function(){
	//利用watch方法监听script下的js文件，如果变动，则执行firstScript任务
	//gulp.watch('script/*.js', ['firstScript']);
	//event为gulp.watch回调函数中的event

	//-------------------------压缩js---------------------------
	gulp.watch('script/*.js', function(event){
		var paths = watchPath(event, 'script', 'newScript');
		gulp.src(paths.srcPath)
			.pipe(uglify())
			//给压缩后的文件，添加min后缀名
			.pipe(rename({suffix: '.min'}))
			//paths.distDir为目录文件，如果换成paths.distPath，会报错：file already exists
			.pipe(gulp.dest(paths.distDir));
	});

    //-------------------------压缩合并js---------------------------
	//gulp.watch('script/*.js', ['minifyjs']);
	gulp.watch('script/*.js', function(){
		gulp.src('script/*.js')
			.pipe(concat('main.js'))    //合并所有js到main.js
			.pipe(gulp.dest('newScript'))       //输出到文件夹
			.pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
			.pipe(uglify())    //压缩
			.pipe(gulp.dest('newScript'));  //输出
	});


	//-------------------------压缩图片-------------------------
	gulp.watch('images/*.{jpg,png,jpeg}', function(event){
		var pathsImages = watchPath(event, 'images', 'newImages');
		gulp.src(pathsImages.srcPath)
			.pipe(tiny())
			.pipe(rename({suffix: '.min'}))
			.pipe(gulp.dest(pathsImages.distDir));
	});


	//-------------------------压缩css-------------------------
	gulp.watch('css/*.css',function (event) {
		var pathsCss = watchPath(event,'css','newCss');
		gulp.src(pathsCss.srcPath)
			.pipe(cleanCSS({compatibility: 'ie8'}))
			.pipe(rename({suffix:'.mini'}))
			.pipe(gulp.dest(pathsCss.distDir));
	});

});


//压缩，合并 js  https://segmentfault.com/a/1190000004226466
gulp.task('minifyjs', function() {
	return gulp.src('script/*.js')      //需要操作的文件
		.pipe(concat('main.js'))    //合并所有js到main.js
		.pipe(gulp.dest('Js'))       //输出到文件夹
		.pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
		.pipe(uglify())    //压缩
		.pipe(gulp.dest('Js'));  //输出
});


//压缩css文件: https://github.com/scniro/gulp-clean-css
gulp.task('minicss',function () {
	// 1. 找到文件
	gulp.src('css/*.css')
	// 2. 压缩文件
		.pipe(cleanCSS({compatibility: 'ie8'}))
		// 3. 重命名压缩文件
		.pipe(rename({suffix: '.min'}))
		// 3. 另存为压缩文件
		.pipe(gulp.dest('MiniCSS'));
});

// 编译less
gulp.task('less', function () {
	gulp.src('less/*.less')
		.pipe(less())
		.pipe(gulp.dest('dist'));
});

//gulp-less可以与gulp-sourcemaps一起使用来为您的文件生成源地图
gulp.task('sourcemaps', function () {
	gulp.src('less/*.less')
		//初始化gulp-sourcemaps
		.pipe(sourcemaps.init())
		.pipe(less())
		//默认情况下，gulp-sourcemaps将源映射内联在编译的CSS文件中。要将它们写入单独的文件，请在sourcemaps.write()函数中指定相对文件路径
		.pipe(sourcemaps.write('./maps'))
		.pipe(gulp.dest('./public/css'));
});


//images/**/* images目录下的所有子目录和所有东西(包含东西最多)
//images/*/*  images目录下的东西和子目录下的东西
//images/*.{png,jpg} images目录下的所有以png和jpg为后缀名的图片

//图片压缩方式1：
gulp.task('minImages',function() {
	gulp.src('images/*.jpg')
		.pipe(imagemin({
		optimizationLevel:7
		}))
		.pipe(rename({suffix:'.mini'}))
		.pipe(gulp.dest('newImages'));
});

//图片压缩方式2：使用熊猫压图(需要有KEY,并且每个月只有500张)
gulp.task('tinypng', function () {
	gulp.src('images/*.png')
		.pipe(tinypng('DrnyIjlygw6KqfExVG-GOW0nC74frl5C'))
		.pipe(gulp.dest('newImages/compressed_images'));
});

//图片压缩方式3：模拟用户上传和下载的行为，来得到压缩图片，突破使用官网api每月500张限制(免费 常用)
gulp.task('nokey', function(cb) {
	gulp.src('images/*')
		.pipe(tiny())
		.pipe(gulp.dest('newImages/nokey'));
});


//生成雪碧图
gulp.task('sprite', function () {
	var spriteData = gulp.src('images/icon/*.png').pipe(spritesmith({
		imgName: 'sprite.png',
		cssName: 'sprite.css',
		//algorithm:'diagonal', //设置图片合并形式
		//padding:23           //设置图片间距
		//cssFormat: 'scss'
	}));
	return spriteData.pipe(gulp.dest('output'));
});



//将需要默认执行的任务名，添加到default任务中，如，添加上面的‘auto’任务
gulp.task('default',['auto']);

