// JavaScript Document
//document.title="艺星医疗美容医院";
var this_url = window.location.href;
if (this_url.indexOf('/zt/') >= 0) {
    document.write('<script src="/static/js/iscroll.js" type="text/javascript"></script>');
    document.write('<script src="/static/js/diseaseMenuScroll.js" type="text/javascript"></script>');
}
//document.write('<script src="/static/js/weixin.js" type="text/javascript"></script>');
//document.write('<script src="/static/js/dialogue.js" type="text/javascript"></script>');

// 单项目弹窗（如：鼻部专题对应鼻部弹窗）
// 2017/11/01不同专题调用不同图片 源文件备份：swt20171101.js||style20171101.css       
var url = window.location.pathname;
var swtText = '<div class="mfhd clearfix"> <input type="tel" class="callbF_text" id="callbF_text" onclick="this.value = \'\'" onblur="if(value == \'\'){value=\'请输入您的电话号码\'}" value="请输入您的电话号码" name="callbF_text"/> <a id="callbF_sub" class="callbF_sub" href="javascript:void(0)">一键回电</a> </div> <div class="swt_lists absolute"> <a href="tel:4000601992" class="swt_list1"><i class="swtCallIcon"></i><em>拨打电话</em></a> <a href="javascript:void(0)" class="swt_list2" onclick="openZoosUrl();return false;"><i class="swtLinkCounter" id="swtLinkCounter"></i><i class="swtLinkIcon"></i><em>悄悄提问</em></a></div><style type="text/css"> .swtCenter {width:279px;height:260px; background: url(/static/js/image/swt.jpg);  position:fixed;  left:50%;top:50%;z-index:999999;margin-left:-139px;margin-top:-130px;-moz-border-radius:15px;-webkit-border-radius:15px;border-radius:15px;-moz-box-shadow:0 0 20px rgba(10,2,4,0.75);-webkit-box-shadow:0 0 20px rgba(10,2,4,0.75);box-shadow:0 0 20px rgba(10,2,4,0.75);} .swtCenter h3 {width:100%;font-size:27px;text-align:center; color:#2e3642;font-weight:500;margin-top:33px;} .swtCenter h4 {width:100%; font-size:16px; text-align:center; color:#2e3642; padding:4px 0;font-weight: bold;} .mfhd {width:227px;height:32px;border:1px solid #6a7380;/*border-color:#937343;*/ -moz-border-radius:17px;-webkit-border-radius:17px;border-radius:17px;margin:10px auto 5px;/*margin-top:135px;*/ margin-top: 118px;} .mfhd  input {width:156px;height:30px;line-height:30px; background-color:#FFF;font-size:14px;color:#6a7380;-moz-border-radius:15px 0 0 15px;-webkit-border-radius:15px 0 0 15px;border-radius:15px 0 0 15px;padding-left:13px;float:left;outline:none;} .mfhd a {width:69px;height:30px;line-height:30px;color:#fff; background-color:#6a7380;/*background-color:#937344;*/font-size:12px;text-align:center;text-decoration:none;-moz-border-radius:0 14px 14px 0;-webkit-border-radius:0 14px 14px 0;border-radius:0 14px 14px 0;float:left;} .swtCenter p {width:235px;font-size:12px;color:#6a7380;margin:0 auto;} </style>';
var swt_center;

if(url=="/zt/jtlbmon/" || url=="/zt/lbqc/" || url=="/zt/jn-yx-bibu/"  || url=="/zt/lblb/" || url=="/zt/bjzx_hf/" || url=="/zt/lbkb/" || url=="/zt/ctb/" || url=="/zt/abzx/" || url=="/zt/wbjz1/" || url=="/zt/lbtfb/" || url=="/zt/ygbzx/" || url=="/zt/lbstb/" || url=="/zt/bibu_zslb/" || url=="/zt/hf_lb/" || url=="/zt/lb_expert/" || url=="/zt/zhlbjg/" || url=="/zt/bzh/" || url=="/zt/bysxdsq/" || url=="/zt/bysx_new/" || url=="/zt/bysx_new_02/" || url=="/zt/bkslb/" || url=="/zt/lb_ys/" || url=="/zt/ztlbnjh/" || url=="/zt/sh_ztlb/" || url=="/zt/lbxf/" || url=="/zt/jn_bsk/" || url=="/zt/2016longbi_1/" || url=="/zt/2016longbi_2/" || url=="/zt/jtlb/" || url=="/zt/mbxf/" || url=="/zt/201706jtlb/" || url=="/zt/lb_hszhlb/" || url=="/zt/mxnose/" || url=="/zt/2017xdlb/"){
    swt_center = "swt_b.jpg";
}
else if(url=="/zt/tj/" || url=="/zt/sgzdsq/" || url=="/zt/fgz/" || url=="/zt/hftm/" || url=="/zt/tmjg/" || url=="/zt/tuomao_new/" || url=="/zt/bdtm/" || url=="/zt/dy/" || url=="/zt/pf_plm/" || url=="/zt/qb/" || url=="/zt/mbcz/" || url=="/zt/mkcd_new/" || url=="/zt/wmb/" || url=="/zt/mbyy/" || url=="/zt/qudou_new/" || url=="/zt/hfqd/" || url=="/zt/qbyy_new/" || url=="/zt/quban_new/" || url=="/zt/qbjg/" || url=="/zt/pmqb/" || url=="/zt/ytwds/" || url=="/zt/jyfhz/" || url=="/zt/massgz/"){
    swt_center = "swt_skin.jpg";
}
else if(url=="/zt/slznew/" || url=="/zt/jn-yx-wz/" || url=="/zt/sh_slz/" || url=="/zt/slzyy/" || url=="/zt/rds/" || url=="/zt/wz_qttw/" || url=="/zt/wz_qmjw/" || url=="/zt/wz_qyww/" || url=="/zt/wz_qflw/" || url=="/zt/qyc/" || url=="/zt/wz_zscz/" || url=="/zt/fxb/" || url=="/zt/zsflg/" || url=="/zt/wz_fmj/" || url=="/zt/mb_fpgj/" || url=="/zt/wz_zslb/" || url=="/zt/ywbns8/" || url=="/zt/sgzdsq/" || url=="/zt/sgzdsq/" || url=="/zt/sgzdsq/" || url=="/zt/sgzdsq/" || url=="/zt/sgzdsq/" || url=="/zt/sgzdsq/" || url=="/zt/sgzdsq/" || url=="/zt/ruilan/" || url=="/zt/bnsyy/" || url=="/zt/sh_bns/" || url=="/zt/stjs/" || url=="/zt/stz/" || url=="/zt/fc_new/" || url=="/zt/fc/" || url=="/zt/fcjg/" || url=="/zt/hffc/" || url=="/zt/wz_ftyx/" || url=="/zt/money_ftyx/" || url=="/zt/ftyx/" || url=="/zt/ftyxyy-sh/" || url=="/zt/zsfet/" || url=="/zt/wz_fet/" || url=="/zt/wz_qjw/" || url=="/zt/rl_bns/" || url=="/zt/qiaomei/" || url=="/zt/hf_bnszs/" || url=="/zt/jnbns/" || url=="/zt/jn-bns-pp/" || url=="/zt/zsslz/" || url=="/zt/jsslz/" || url=="/zt/wz_zsst2/"){
    swt_center = "swt_weizx.jpg";
}
else if(url=="/zt/ztlx/" || url=="/zt/amd-lxxf/" || url=="/zt/rfzz/" || url=="/zt/rysx/" || url=="/zt/rtsx/" || url=="/zt/ryph/" || url=="/zt/fr/" || url=="/zt/rtnx/" || url=="/zt/rfxc/" || url=="/zt/jtlx/" || url=="/zt/jt-lxxf/" || url=="/zt/jn-yx-xb/"){
    swt_center = "sw_xiongbu.jpg";
}
else if(url=="/zt/sypjs/" || url=="/zt/syp_new/" || url=="/zt/yb/" || url=="/zt/ybxm/" || url=="/zt/yb-syp/" || url=="/zt/sypxin/" || url=="/zt/qjmy/" || url=="/zt/qjmy-new/" || url=="/zt/mxsyp/" || url=="/zt/mdsmy/" || url=="/zt/sypprice/" || url=="/zt/sypxf/" || url=="/zt/hyqn/" || url=="/zt/zhxybxf/" || url=="/zt/ybcz/" || url=="/zt/yb_lgtc/" || url=="/zt/sjax/" || url=="/zt/sjxc/" || url=="/zt/kyjpricesh/" || url=="/zt/kyjjs/" || url=="/zt/kyj_new/" || url=="/zt/hskyj/" || url=="/zt/kyjxf/" || url=="/zt/jgqyd/" || url=="/zt/qydyy/" || url=="/zt/fxqhyq/" || url=="/zt/qydnew/" || url=="/zt/mds_June/" || url=="/zt/qyd-dsq/"){
    swt_center = "swt_yanbu.jpg";
}

if (swt_center != undefined) {
    swt_background = "background:/static/img/"+swt_center+" no-repeat;";
    swt_content = '<div class="mfhd clearfix"> <input type="tel" class="callbF_text" id="callbF_text" onclick="this.value = \'\'" onblur="if(value == \'\'){value=\'请输入您的电话号码\'}" value="请输入您的电话号码" name="callbF_text"/> <a id="callbF_sub" class="callbF_sub" href="javascript:void(0)">一键回电</a> </div> <div class="swt_lists absolute"> <a href="tel:4000601992" class="swt_list1"><i class="swtCallIcon"></i><em>拨打电话</em></a> <a href="javascript:void(0)" class="swt_list2" onclick="openZoosUrl();return false;"><i class="swtLinkCounter" id="swtLinkCounter"></i><i class="swtLinkIcon"></i><em>悄悄提问</em></a></div>';
    swt_content = swt_content+"<style> .swtCenter {width:279px;height:260px; background:url('/static/js/image/"+swt_center+"');position:fixed; left:50%;top:50%;z-index:999999;margin-left:-139px;margin-top:-130px;-moz-border-radius:15px;-webkit-border-radius:15px;border-radius:15px;-moz-box-shadow:0 0 20px rgba(10,2,4,0.75);-webkit-box-shadow:0 0 20px rgba(10,2,4,0.75);box-shadow:0 0 20px rgba(10,2,4,0.75);} .swtCenter h3 {width:100%;font-size:27px;text-align:center; color:#2e3642;font-weight:500;margin-top:33px;} .swtCenter h4 {width:100%; font-size:16px; text-align:center; color:#2e3642; padding:4px 0;font-weight: bold;} .mfhd {width:227px;height:32px;border:1px solid #6a7380;/*border-color:#937343;*/ -moz-border-radius:17px;-webkit-border-radius:17px;border-radius:17px;margin:10px auto 5px;/*margin-top:135px;*/ margin-top: 118px;} .mfhd  input {width:156px;height:30px;line-height:30px; background-color:#FFF;font-size:14px;color:#6a7380;-moz-border-radius:15px 0 0 15px;-webkit-border-radius:15px 0 0 15px;border-radius:15px 0 0 15px;padding-left:13px;float:left;outline:none;} .mfhd a {width:69px;height:30px;line-height:30px;color:#fff; background-color:#6a7380;/*background-color:#937344;*/font-size:12px;text-align:center;text-decoration:none;-moz-border-radius:0 14px 14px 0;-webkit-border-radius:0 14px 14px 0;border-radius:0 14px 14px 0;float:left;} .swtCenter p {width:235px;font-size:12px;color:#6a7380;margin:0 auto;} </style>";
}else{
    swt_content = swtText;
}

document.writeln("<link href=\"/swt/css/style.css\" type=\"text/css\" rel=\"stylesheet\"/>");
document.writeln("<div class=\"swtCenter relative\">");
document.writeln("    	<span class=\"closeBtn_swt absolute\" onclick=\"closeSwt();\"></span>");
document.writeln(swt_content);
document.writeln("    </div>");

// 2017/11/01不同专题调用不同图片 END

document.writeln('<style>#LRfloater1_if,#LRdiv1,#LRfloater0,#LRdiv0,#LRfloater1{display:none;} </style>');

function ClickPhone() {
    window.location.href = 'tel:4000601992';
}
document.writeln("    <script language=\"javascript\" src=\"https://kf7.kuaishang.cn/bs/ks.j?cI=597950&fI=67094&ism=1\"></script>");

function openZoosUrl() {
    //swt();
    onKST();
}
var onKST = function(text) {
    //请替换成"生成代码 - 链接地址" 中的链接地址,不要去其他地方复制
    ksChatLink = 'http://kf7.kuaishang.cn/bs/im.htm?cas=56695___597950&fi=67094&ism=1';
    /**
     * 若强行打开新窗口,则放开设置,不设置则手机不打开新窗口,pc打开新窗口,此设置只对当前自定义事件有效
     * 若想全局生效,包括快商通默认的打开聊天窗口事件,则将此变量ksUserDefinedOpenNewChatWin定义在ks.j前即可
     */
    //var ksUserDefinedOpenNewChatWin=true;	
    //验证参数是否存在
    function checkQueryString(params, name) {
        if (!params) return false;
        return new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i").test(params);
    }
    //获取URL参数值
    function getQueryString(url, name) {
        var index = url.indexOf('?');
        if (index == -1) return '';
        url = url.substr(index + 1, url.length);
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = url.match(reg);
        if (r != null) return unescape(r[2]);
        return '';
    }
    var openNewChatWin;
    var localArr = ksChatLink.split("?");
    localArr.push("");
    if (typeof ksUserDefinedOpenNewChatWin != 'undefined' && ksUserDefinedOpenNewChatWin == true) {
        openNewChatWin = true;
    } else if (checkQueryString(localArr[1], 'ism')) {
        openNewChatWin = false;
    } else {
        openNewChatWin = true;
    }
    //打开快商通聊天窗口链接
    function ksOpenLink() {
        var appendTailUrl = '';
        try {
            var cas = getQueryString(ksChatLink, 'cas');
            if (cas) {
                var vi = '';
                var dc = document.cookie.match(new RegExp('(^| )' + cas + '_KS_' + cas + '=([^;]*)(;|$)'));
                if (dc != null) {
                    vi = unescape(dc[2]);
                }
                if (vi) {
                    appendTailUrl += '&vi=' + vi;
                }
            }
        } catch (e) {}
        var ref = "";
        try { if (opener.document.referrer.length > 0) { ref = opener.document.referrer; } } catch (e) { ref = document.referrer; }
        if (!ref || ref.length == 0) { ref = document.referrer; }
        //对话网址
        appendTailUrl += '&dp=' + encodeURIComponent(window.location.href);
        //访客来源
        if (ref) appendTailUrl += '&ref=' + encodeURIComponent(ref);
        //对话标识
        if (text) appendTailUrl += '&sText=' + encodeURIComponent(text);
        if (ksChatLink.indexOf('?') == -1) { appendTailUrl = appendTailUrl.substring(1) + '?'; }
        ksChatLink += appendTailUrl;
        //根据openNewChatWin设置打开聊天窗口
        if (!openNewChatWin) {
            window.location.href = ksChatLink;
        } else {
            var ksWin = window.open(ksChatLink, '_blank');
            if (ksWin) {
                try { ksWin.focus(); } catch (e) {} //将焦点定位到聊天窗口
            }
        }
    }
    //如果快商通代码有加载完成,则使用快商通默认的打开聊天窗口事件,否则使用自定义的打开事件
    if (typeof KS != 'undefined') {
        var p = {};
        if (text) p['sText'] = text;
        if (openNewChatWin) p['oTarget'] = '_blank';
        try {
            if (typeof KS.openChatWin == 'function') {
                KS.openChatWin(p);
            } else if (typeof KS.openChatLink == 'function') {
                KS.openChatLink(p);
            } else {
                ksOpenLink();
            }
        } catch (e) {
            ksOpenLink();
        }
    } else {
        ksOpenLink();
    }
};
//function swt()
//	{
//		var bcl="http://kf7.kuaishang.cn/bs/im.htm?cas=56695___597950&fi=67094&ism=1&r"+document.referrer+"&p="+window.location.href+'?tanchuang2';
//		window.open(bcl);
//	} 
/*随机数*/
function GetRandomNum(Min, Max) {
    var Range = Max - Min;
    var Rand = Math.random();
    return (Min + Math.round(Rand * Range));
}
var num = GetRandomNum(4, 10);
//中间弹窗
var t = setTimeout(openMswt, 5000);
var footerHeight = $(".footer");
var bTrue = false;

function _footerHeight() {
    return footerHeight.height();
};
$(window).resize(function() {
    _footerHeight();
    if (bTrue) {
        footerHeight.css({ bottom: -_footerHeight() + 'px' })
    } else {
        footerHeight.css({ bottom: 0 + 'px' })
    }
});

function openMswt() {
    $(".swtCenter").fadeIn(600, function() {
        footerHeight.stop().animate({ bottom: -_footerHeight() + 'px' }, 400, function() {
            $(this).show();
            bTrue = true;
        });
    })
}

function closeSwt() {
    $(".swtCenter").fadeOut(600, function() {
        footerHeight.show().stop().animate({ bottom: 0 + 'px' }, 400, function() {
            bTrue = false;
        });
    }).delay(20000).fadeIn(function() { openMswt(); })
    //setTimeout(openMswt(),5000);
}
$(function() {
    //document.getElementById("swtIcon_Counter").innerHTML=num;
    document.getElementById("swtLinkCounter").innerHTML = num;
    footerHeight.show();
    /*$(".closeBtn_swt").on("click",function(){
    		closeSwt();
    	})*/
});

// 20171101
var url = window.location.pathname;
var swt_center = "swt.jpg";
if(url=="/zt/sh_ztlb/" || url=="/zt/lbxf/"){
    swt_center = "swt_b.jpg";
   // alert("b");
    $(".swtCenter").css("background-image","url(/static/js/image/swt_b.jpg)");
}else if(url=="/pfmr/shuigzs/#" || url=="/pfmr/quban/#"){
    swt_center = "swt_skin.jpg";
    //alert("p");
}

