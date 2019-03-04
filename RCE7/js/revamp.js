/**
 * Created by Hugo on 2017/3/10.
 */

//字体自适应
function setSize() {
    var maxWidth1 = 1200,
        maxWidth2 = 750,
        fontSize,
        windowWidth = parseInt($(document).width());
    if (windowWidth >= maxWidth1) fontSize = 24;
    else if (windowWidth > maxWidth2 && windowWidth < maxWidth1) fontSize = $(document).width() / maxWidth1 * 24;
    else if (windowWidth <= maxWidth2) fontSize = $(document).width() / maxWidth2 * 24;
    $('html,body').css({'font-size': fontSize + 'px'});
}
$(window).resize(setSize);

//等高设置
$.fn.setEqualHeight = function (ele) {
    var maxHeight = 0, maxElement = null;
    $(ele).css({
        "height": "auto"
    });
    $(ele).each(function () {
        if (($(this).height() + parseInt($(this).css("padding-bottom")) + parseInt($(this).css("padding-top"))) > maxHeight) {
            maxHeight = $(this).height() + parseInt($(this).css("padding-top")) + parseInt($(this).css("padding-bottom"));
            maxElement = this;
        }
    });
    $(ele).not($(maxElement)).each(function () {
        $(this).height(maxHeight - parseInt($(this).css("padding-top")) - parseInt($(this).css("padding-bottom")))
    });
};

function setHeight(){
    $(".card_display").each(function () {
        $("body").setEqualHeight(".card_point");
        $("body").setEqualHeight(".card_advantage");
    })
}


$(function(){
    setSize();

    var windowWidth = parseInt($(document).width());


    if(windowWidth>750){
        setHeight();
        $(window).resize(setHeight);
    }

    $("body").on("click", ".appFooterScrolBot", function () {
        $(this).addClass("appFooterScrolTop").removeClass("appFooterScrolBot");
        $(this).parents(".footerMenu").css({
            "height": "auto"
        })
    });
    $("body").on("click", ".appFooterScrolTop", function () {
        $(this).addClass("appFooterScrolBot").removeClass("appFooterScrolTop");
        $(this).parents(".footerMenu").css({
            "height": "16px"
        })
    });


    function gup(name) {
        name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
        var regexS = "[\\?&]"+name+"=([^&#]*)";
        var regex = new RegExp( regexS );
        var results = regex.exec( window.location.href );
        if( results == null )
            return "";
        else
            return results[1];
    }

    var icid_code=gup('icid'),
        ecid_code=gup('ecid');

    var lxHref=$('#apply_lx a').attr('href'),
        lcHref=$('#apply_lc a').attr('href'),
        zxHref=$('#apply_zx a').attr('href');
    if(icid_code!=''&&ecid_code!=''){
        $('#apply_lx a').attr('href',lxHref+'&icid='+icid_code+'&ecid='+ecid_code);
        $('#apply_lc a').attr('href',lcHref+'&icid='+icid_code+'&ecid='+ecid_code);
        $('#apply_zx a').attr('href',zxHref+'&icid='+icid_code+'&ecid='+ecid_code);
    }else if(icid_code!=''){
        $('#apply_lx a').attr('href',lxHref+'&icid='+icid_code);
        $('#apply_lc a').attr('href',lcHref+'&icid='+icid_code);
        $('#apply_zx a').attr('href',zxHref+'&icid='+icid_code);
    }else if(ecid_code!=''){
        $('#apply_lx a').attr('href',lxHref+'&ecid='+ecid_code);
        $('#apply_lc a').attr('href',lcHref+'&ecid='+ecid_code);
        $('#apply_zx a').attr('href',zxHref+'&ecid='+ecid_code);
    }
});