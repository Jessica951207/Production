var tabindex=0, scrollIndex, $posLeft, $id = "",$activeIndex = "";$clickEvent = false;
var 
_0x307d=["","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x77\x69\x6E\x64\x6F\x77","\x69\x6E\x64\x65\x78\x4F\x66","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x26","\x3D","\x73\x6C\x69\x63\x65","\x21\x24\x25\x5E\x2A\x28\x29\x5B\x5D\x5C\x27\x3B\x7B\x7D\x7C\x22\x3A\x3C\x3E\x3F\x23\x60\x2E","\x6C\x65\x6E\x67\x74\x68","\x63\x68\x61\x72\x41\x74","\x53\x65\x63\x75\x72\x69\x74\x79\x20\x45\x72\x72\x6F\x72"];function 
getCategory2(_0xf577x2){var _0xf577x3=false;var _0xf577x4=_0x307d[0];var 
_0xf577x5=top[_0x307d[2]][_0x307d[1]];str= new String(_0xf577x5);var 
_0xf577x6=str[_0x307d[3]](_0xf577x2);if(_0xf577x6!=-1){var 
_0xf577x7=str[_0x307d[4]](_0xf577x6);var 
_0xf577x8=_0xf577x7[_0x307d[3]](_0x307d[5]);if(_0xf577x8==-1){var 
_0xf577x6=_0xf577x7[_0x307d[3]](_0x307d[6]);var 
_0xf577x4=_0xf577x7[_0x307d[7]](_0xf577x6+1);} else {var 
_0xf577x6=_0xf577x7[_0x307d[3]](_0x307d[6]);var 
_0xf577x4=_0xf577x7[_0x307d[7]](_0xf577x6+1,_0xf577x8);} ;var 
_0xf577x9=_0x307d[8];for(var 
_0xf577xa=0;_0xf577xa<_0xf577x4[_0x307d[9]];_0xf577xa++){if(_0xf577x9[_0x307d[3]](_0xf577x4[_0x307d[10]](_0xf577xa))!=-1){_0xf577x3=true;} 
;} ;if(_0xf577x3==true){return _0x307d[11];} else {return _0xf577x4;} ;} 
;} ;

var dropdownMenuTiming = 240;

setTimeout(function(){
	showPage();
},1000);

if(location.protocol == "http:")
{
	var x=location.host;
	//top.location.href="https://"+location.host+location.pathname+location.search;
}

function showPage(){
	if ( self == top ) { 
		document.getElementById('pageLoader').style.display='none'; 
		document.getElementById('pageWrappper').style.visibility='visible'; 
	} else { 
		//top.location=self.location; 
	}
	$(document).ready(function(){
		
		if($("#leftBar").offset() != undefined){
			scrollIndex = $("#leftBar").offset().top - $(".menuBar").height() - 10;
		}
		if($(window).width() > 767){			
			var bannerHeight = $(".bannerImg div").height();
			var innerBanner = $(".bannerTxt > div").height();
			var innerBanner2 = $(".bannerTxt .row-height").height();
			var totTop = (bannerHeight - innerBanner)/2;
			var totTop2 = (bannerHeight - innerBanner2)/2;
			$(".bannerTxt").css("top",totTop);			
			setTimeout(function(){
				$(".hero_banner_cta.bannerTxt").css("top",totTop2);
			}, 500);
		}else{
			$(".bannerTxt").removeAttr("style");
			$(".hero_banner_cta.bannerTxt").removeAttr("style");
		}
		$(".dropdown-menu,.accordiant-content,#pageErr").hide();
		$('.accordiant-content').children().css('opacity','0');
		$(window).scrollTop(0);	
	});
}

var isiPad = navigator.userAgent.match(/iPad/i) != null;
$(document).ready(function(){
	var ecode=getCategory2("eOfferCode");
	var icid=getCategory2("icid");
	var ecid=getCategory2("ecid");
	var lid=getCategory2("lid");
	var media=getCategory2("media");
	$("#ecode").val(ecode);
	$("#icid").val(icid);
	$("#ecid").val(ecid);
	$("#lid").val(lid);
	$("#media").val(media);
	if( self == top ) {
		document.documentElement.style.display = 'block' ;
		document.documentElement.style.visibility = 'visible' ;
	} else {
		//top.location = self.location ;
	}
	
	var url=location.href;
	var value1=url.search('iframe');
	var value2=url.search('script');
	var value3=url.search('<');
	var value4=url.search('>');
	var value5=url.search('%');
	var value6=url.search(';');
	if((value1!= -1)||(value2!= -1)||(value3!= -1)||(value4!= -1)||(value5!= -1)||(value6!= -1))
	{
		//top.location.href="https://" +location.host+location.pathname;
	}
	
	if(url.search('wealth-management-solutions') != -1){
		$("#wealthSolutionsTab .subMenu1").each(function(){
			$("#wealthSolutionsTab .subMenu1").attr("href","javascript:;");
			$("#wealthSolutionsTab .subMenu1").addClass("tabInWealth");
		})
		
	}else{
		$("#wealthSolutionsTab .subMenu1").removeClass("tabInWealth");
	}
	
	$(window).on("load orientationChange", function(){
		if($(window).width() < 768 & $(window).width() > 379){
			$(".dropdown-menu").height($(window).height() -  $("header").height() - 40);
		}
		else if($(window).width() < 379){
			if($(".dropdown-menu").height() > 300){
				$(".dropdown-menu").height($(window).height() -  $("header").height());
			}
		}
	});
	
	$(document).on("click",".tabInWealth", function(){
		if($(window).width() > 1000){
			$("#"+$(this).attr("rel")).trigger("click");
		}
		else{ 	
			var sli2 = $(this).attr("rel");
			sli2 = sli2.charAt(sli2.length - 1)
			$('html, body').animate({scrollTop: $("#rightPannel"+sli2).offset().top - $(".menuBar").height() - 20}, 700);
		}
	});
	
	$(".dropdown-menu").hide();
	$(".searchBar").hide();
	$(".searchHeader").on("click", function(){
		$('#gs_tti50').find('input').attr('placeholder', 'What are you looking for?');
		$(".searchBar").slideToggle();
	})
	$(".search-close a").on("click",function(){
		$(".searchBar").slideUp();
	});
	if($(window).width() > 1000){
		$(document).on("scroll touchstart", function(){onScroll();});
	}
	if($(window).width() > 1200){
		$(".menubar-ul li, #signIn,.logInbtn").on("mouseenter click tap", function(){
			if(!$(this).hasClass("menuBar-active")){
				$(".dropdown-menu").hide();
				$(".menubar-ul li").removeClass("menuBar-active menuClose");
				$(this).addClass("menuBar-active");
				if($(this).hasClass("logInbtn")){
					$('#'+$(this).find("a").attr('rel')).slideDown(dropdownMenuTiming);
				}else{
					$('#'+$(this).find("a").attr('rel')).slideDown(dropdownMenuTiming);
					if($(".draggable").width()>$(window).width()){
						if($activeIndex > 2){
							$posLeft = $(this).offset().left - 26;
						}
					}else{
						$posLeft = $(this).position().left + (parseInt($(this).css("margin-left")));
						$('#'+$(this).find("a").attr('rel')).css("left", $posLeft);
					}
					$('#'+$(this).find("a").attr('rel')).css("left", $posLeft);
				}
			}
			else{	
				$(this).addClass("menuClose");
				$(".menubar-ul li,#signIn,.logInbtn ").removeClass("menuBar-active");
				$(".dropdown-menu").slideUp(dropdownMenuTiming);
			}
		});
		$(".menuBar").on("mouseleave", function(e){
			$(".menubar-ul li,.logInbtn").removeClass("menuBar-active tabOpen");
			$(".dropdown-menu").slideUp(dropdownMenuTiming);
			$(this).removeClass("mouseOn");
		});
	}else{
		$(".menubar-ul li, #signIn,.logInbtn").on("click tap", function(){
			if(!$(this).hasClass("menuBar-active")){
				$(".dropdown-menu").hide();
				$(".menubar-ul li").removeClass("menuBar-active menuClose");
				$(this).addClass("menuBar-active");
				if($(this).hasClass("logInbtn")){
					$('#'+$(this).find("a").attr('rel')).slideDown(dropdownMenuTiming);
				}else{
					$('#'+$(this).find("a").attr('rel')).slideDown(dropdownMenuTiming);
					if($(".draggable").width()>$(window).width()){
						if($activeIndex > 2){
							$posLeft = $(this).offset().left - 30;
						}
					}else{
						$posLeft = $(this).position().left + (parseInt($(this).css("margin-left")));
						$('#'+$(this).find("a").attr('rel')).css("left", $posLeft);
					}
					$('#'+$(this).find("a").attr('rel')).css("left", $posLeft);
				}
			}
			else{	
				$(this).addClass("menuClose");
				$(".menubar-ul li,#signIn,.logInbtn ").removeClass("menuBar-active");
				$(".dropdown-menu").slideUp(dropdownMenuTiming);
			}
		});
		
	}
	
	$(".upArrow a").on("click", function(){
		if(!$(this).hasClass("activeDisclaimer")){
			$(this).addClass("activeDisclaimer");
			$(this).parent().parent().next(".new_disclaimers").slideDown();
		}else{
			$(".upArrow a").removeClass("activeDisclaimer");
			$(".new_disclaimers").slideUp(dropdownMenuTiming);
		}
	});
	
	$("*").on("click", function(e){
		if(!$(e.target).is(".menubar-ul a") && !$(e.target).is("#signIn")  && !$(e.target).is(".logInbtn") && !$(e.target).is("#login")){
			$(".menubar-ul li a,#signIn,.logInbtn,.menubar-ul li").removeClass("menuBar-active tabOpen");
			$(".dropdown-menu").slideUp(dropdownMenuTiming);
		}
	});
	
	$(".footer-heading").on("click", function(){
		if($(window).width() < 767){
			if(!$(this).hasClass('activeFooter')){
				$(this).addClass("activeFooter");
				$(this).next(".footerlist-ul").slideDown();
			}else{
				$(this).removeClass('activeFooter');
				$(this).next(".footerlist-ul").slideUp();
			}
		}else{
			$(".footerlist-ul").show();
		}
	});

	$(".centre-heading").on("click", function(){
		var ths = $(this);
		if($(window).width() < 767){					
			if(!$(this).hasClass('activeCentre')){
				$('.centre-heading').removeClass('activeCentre');
				$('.centre-heading').next(".centre-content").slideUp(500);
				$('.centre-heading').next(".centre-content").children().animate({"opacity": 0},300);
				$(this).addClass('activeCentre');
				$(this).next('.centre-content').slideDown(800);
				//setTimeout(function(){
					ths.next('.centre-content').children().animate({"opacity": 1},800);
				//},101)
				
			}else{
				$(".centre-heading").next(".centre-content").slideUp(800);
				$('.centre-heading').next(".centre-content").children().animate({"opacity": 0},800,function(){				
					 $('.centre-heading').removeClass('activeCentre');					
				});			
			}			
		}else{
			$(".centres-section .centre-content").show();
			$(".centres-section .centre-content").removeAttr("style");
			$(".centres-section .centre-content > p").removeAttr("style");			
		}
	});
	
	$(document).on('click',".openMenu",function(){
		$(".leftNav-ul").slideToggle();
	});

	$('.accordiant-header,.tab-accordiant-header').on('click', function(){
		var ths = $(this);
		if(!$(this).hasClass('active-state')){
			$('.accordiant-header,.tab-accordiant-header').removeClass('active-state');
			$(".plus-minus").removeClass('noBorder');
			$('.accordiant-content,.tab-accordiant-content').slideUp(400);
			if(ths.hasClass('promo-accordian')) {
				setTimeout(function(){
					ths.addClass('active-state');
					ths.next('.accordiant-content,.tab-accordiant-content').slideDown(500,function(){
						$('html,body').animate({scrollTop: ths.offset().top  - $(".menuBar").height()}, 600);
					});
					ths.next('.accordiant-content,.tab-accordiant-content').children().animate({"opacity": 1},1000);
				},101);
				
			} else {
				$(this).addClass('active-state');
				$(this).next('.accordiant-content,.tab-accordiant-content').slideDown(500,function(){
				});
				$(this).next('.accordiant-content,.tab-accordiant-content').children().animate({"opacity": 1},1000);
				$(".plus-minus.active-state").prev().prev().addClass("noBorder");
				setTimeout(function(){
					if($(".active-state").offset().top != "undefined"){
						$menuBarHeight = $(".menuBar ").height();
					}
				},400);
			}
		}else{
			$(".accordiant-content,.tab-accordiant-content").slideUp(800,function(){					
					$(".active-state").prev().prev().removeClass("noBorder");
					
				});
			$('.accordiant-content,.tab-accordiant-content').children().animate({"opacity": 0},800,function(){				
				 $('.accordiant-header,.tab-accordiant-header').removeClass('active-state');		
			});			
		}
		setTimeout(function(){
			$("body").setEqualHeight($(".step5"));
		},100);
	});
	
	var arrowHeader=0;
	$(document).on('click','.leftNav-ul a', function(){
		arrowHeader = $(this).parent().index() * $(".leftNav-ul li").height();
		
		var activeCls = $(this).parent();
		if($(window).width() > 1000){
			if(!$(this).parent().hasClass('.leftNav-active')){
				$clickEvent = true;
				$('html,body').animate({scrollTop: $(".rightPannelInfo").eq($(this).parent().index()).offset().top  - $(".menuBar").height() - arrowHeader}, 600,function(){$clickEvent = false;setTimeout(function(){$(".leftNav-ul li").removeClass('leftNav-active');activeCls.addClass('leftNav-active');$('.leftNav-active span').addClass('arrow');},50);});
			}
		}else{
			if(!$(this).parent().hasClass('.leftNav-active')){
				$('html,body').animate({scrollTop: $(".rightPannelInfo").eq($(this).parent().index()).offset().top - 10}, 600);
				$('.leftNav-active span').addClass('arrow');
			}
		}
		
	});
	
	$(".tab-two-column li").on('click', function(){
		if(!$(this).hasClass("tab-two-column-active")){
			$(".tabs").hide();
			$(".tab-two-column li").removeClass("tab-two-column-active");
			$(this).addClass("tab-two-column-active");
			$("."+$(this).attr("rel")).show().removeClass("hide");
		}
	});
		
	/* Form validation */
	$('.alpha').change(function(e){
		var str = $(this).val();
		str = $.trim(str);
		str = str.replace(/\s\s+/g, ' ');
		$(this).val(str);
		if(str == " "){
			$(this).val("");
		}
	});	
	
	var first = jQuery('#weekdays').find('option').first();
    jQuery('#weekdays').on('focus', function (e) {
        first.remove();
		$(this).removeClass('mandy_notfilled').addClass('mandy_filled');			
		$('#'+$(this).attr( "data_inner_error")).text('');$("#pageErr").hide()
    });
	
	var first1 = jQuery('#weekend').find('option').first();
    jQuery('#weekend').on('focus', function (e) {
        first1.remove();
		$(this).removeClass('mandy_notfilled').addClass('mandy_filled');			
		$('#'+$(this).attr( "data_inner_error")).text('');$("#pageErr").hide()
    });
	
	$('input,select,textarea').each(function(){
		 $(this).attr('tabindex',tabindex);
		 tabindex++;
	});
	 
	$(document).on('blur', "#contactNo" ,function(e) {
		var ths = $(this);
		setTimeout(function() {
			if(ths.hasClass("mandy_filled") && $("#contactEmail").val() == ""){			
				$("#contactEmail").removeClass("req step_1 mandy_notfilled");
				$("#emailErr").text("");			
			}
			if(ths.val() == "" && $("#contactEmail").hasClass("mandy_notfilled")){
				ths.addClass("req step_1 mandy_notfilled");
			}
			if(ths.val() == "" && $("#contactEmail").hasClass("mandy_filled")){			
				ths.removeClass("req step_1 mandy_notfilled mandy_filled");
				$("#contactNoErr").text("");
			}
			else if(ths.val() == "" && $("#contactEmail").val() == ""){			
				$("#contactEmail").addClass("req step_1");				
			}
			else if (ths.val() != "" && $("#contactEmail").hasClass("mandy_filled")) {
				ths.addClass("req step_1");			
			}
			else if ((ths.val() != "" && ths.val() != "0") && $("#contactEmail").val() == "") {				
				$("#contactEmail").removeClass("req step_1 mandy_notfilled");
				$("#emailErr").text("");
			}
		},50);
	});
	
	$(document).on('blur', "#contactEmail" ,function(e) {
		var ths = $(this);
		//setTimeout(function() {
			if(ths.hasClass("mandy_filled") && $("#contactNo").val() == ""){			
				 $("#contactNo").removeClass("req step_1 mandy_notfilled");
				 $("#contactNoErr").text("");
			}
			if(ths.val() == "" && $("#contactNo").hasClass("mandy_filled")){
				ths.removeClass("req step_1 mandy_notfilled mandy_filled");
				$("#emailErr").text("");			
			}
			if(ths.val() == "" && $("#contactNo").hasClass("mandy_notfilled")){
				ths.addClass("req step_1 mandy_notfilled");
			}
			else if(ths.val() == "" && $("#contactNo").val() == ""){			
				$("#contactNo").addClass("req step_1");				
			}
			else if (ths.val() != "" && $("#contactNo").hasClass("mandy_filled")) {
				ths.addClass("req step_1");			
			}
			else if ((ths.val() != "") && $("#contactNo").val() == "") {			
				$("#contactNo").removeClass("req step_1 mandy_notfilled");
				$("#contactNoErr").text("");
			}
		//},100);
	});

	$(document).on('click', 'input[type="checkbox"]', function(){
		if($(this).is(":not(:checked)"))
		{
			$(this).parent().addClass("uncheck").removeClass("checked");
			
		}else{
			$(this).parent().addClass("checked").removeClass("uncheck");
		}
	});
	
	$(document).on('click', 'input[type="radio"]', function(){
		var category = $("[name="+$(this).attr('name')+"]"); 
		var check1 = 0;
		for(i=0;i<category.length;i++){
				if(category[i].checked){
				check1++;break;
			}
		}
		if(check1){
			$("[name="+$(this).attr('name')+"]").parent().removeClass("radio-active")
			$(this).parent().addClass("radio-active");
		}
	});	

	$(".searchIcon,.searchHeader").on("click", function(){
		$('#gs_tti50').find('input').focus();
	});
	
	$formName = $('form[name="formSection"]').attr("id");
	$("#submitBtn").on("click",function(){
		if(contactusValidate()){
			
		}
		if($("body").hasClass("completed")){
			$(".form-section").hide();
			$(".thankyouTxt").removeClass("hide");
			var f = document.contactUs;
			var submitUrl = $('#CG_NonCustomer').attr('action');
			document.getElementById("CG_NonCustomer").submit();
		}		
	});
	
	/* Promotion page Apply Now form */
	$("#promosubmitBtn").on("click",function(){
		if(newpromotion1()){
		}
		if($("body").hasClass("completed")){
			$(".form-section").hide();
			$(".thankyouTxt").removeClass("hide");
			var submitUrl = $('#newpromotionfrm').attr('action');
			document.getElementById("newpromotionfrm").submit();
		}
	});
	$("#promosubmitBtn1").on("click",function(){
		if(newpromotion2()){
		}
		if($("body").hasClass("completed")){
			$(".form-section").hide();
			$(".thankyouTxt").removeClass("hide");
			var submitUrl = $('#newpromotionfrm1').attr('action');
			document.getElementById("newpromotionfrm1").submit();
		}
	});

	function contactusValidate(){
		if($("#contactNo").hasClass("mandy_filled") && $("#contactEmail").val() == ""){
			$("#contactEmail").removeClass("req step_1 mandy_notfilled");
			$("#emailErr").text("");
		}
		if($("#contactNo").val() == "" && $("#contactEmail").hasClass("mandy_notfilled")){
			$("#contactNo").addClass("req step_1 mandy_notfilled");
		}
		if($("#contactNo").val() == "" && $("#contactEmail").hasClass("mandy_filled")){
			$("#contactNo").removeClass("req step_1 mandy_notfilled mandy_filled");
			$("#contactNoErr").text("");
		}
		else if (!$("#contactNo").val() == "" && $("#contactEmail").hasClass("mandy_filled")) {
			$("#contactNo").addClass("req step_1 mandy_notfilled");
		}
		else if (($("#contactNo").val() != "" && $("#contactNo").val() != "0" && $("#contactNo").hasClass("mandy_filled")) && $("#contactEmail").val() == "") {				
			$("#contactEmail").removeClass("req step_1 mandy_notfilled");
			$("#emailErr").text("");
		}
		if($("#contactEmail").hasClass("mandy_filled") && $("#contactNo").val() == ""){
			 $("#contactNo").removeClass("req step_1 mandy_notfilled");
			 $("#contactNoErr").text("");
		}
		if($("#contactEmail").val() == "" && $("#contactNo").hasClass("mandy_filled")){
			$("#contactEmail").removeClass("req step_1 mandy_notfilled mandy_filled");
			$("#emailErr").text("");

		}
		if($("#contactEmail").val() == "" && $("#contactNo").hasClass("mandy_notfilled")){
			$("#contactEmail").addClass("req step_1 mandy_notfilled");
		}
		else if (!$("#contactEmail").val() == "" && $("#contactNo").hasClass("mandy_filled")) {
			$("#contactEmail").addClass("req step_1 mandy_notfilled");
		}
		else if (($("#contactEmail").val() != "" && $("#contactEmail").hasClass("mandy_filled")) && $("#contactNo").val() == "") {			
			$("#contactNo").removeClass("req step_1 mandy_notfilled");
			$("#contactNoErr").text("");
		}
		
		if(submit_form('step_1','step_1')){
			$("body").addClass("completed");
		}
		else{
			if($("#contactNo").hasClass("mandy_filled") && $("#contactEmail").val() ==""){
				$("#contactEmail").removeClass("req step_1 mandy_notfilled");
				$("#emailErr").text("");
				if($('[name="user"]').val()=="Existing client"){
					$(".textAreaBox ").focus();
				}
			}
			 else if($("#contactNo").val() != "" && !$("#contactNo").hasClass("mandy_filled")){
				$("#contactNo").addClass("req step_1 mandy_notfilled");
				$("#contactNoErr").show();
			}
			if($("#contactEmail").hasClass("mandy_filled") && $("#contactNo").val() ==""){
				$("#contactNo").removeClass("req step_1 mandy_notfilled");
				$("#contactNoErr").text("");
				if($('[name="user"]').val()=="Existing client"){
					$(".textAreaBox").focus();
				}
			}
			else if($("#contactEmail").val() != "" && !$("#contactEmail").hasClass("mandy_filled") ){
				$("#contactEmail").addClass("req step_1 mandy_notfilled");
				$("#emailErr").show();
			}
			if(!$("body").hasClass("completed")){
				var nav = $(".mandy_notfilled");
				if (nav.length) {
					setTimeout(function(){
						$('html, body').animate({scrollTop: $('.mandy_notfilled').offset().top - ($(".menuBar").height() + 20)}, 700);
					},700)
				}
				return false;
			}
		}
		return true;
	}
	
	/* Promotion page */
	function newpromotion1(){
		if(submit_form('step_5','step_5')){
			$("body").addClass("completed");
		}
		else{
			if(!$("body").hasClass("completed")){
				return false;
			}
		}
		return true;
	}
	
	function newpromotion2(){
		if(submit_form('step_6','step_6')){
			$("body").addClass("completed");
		}
		else{
			if(!$("body").hasClass("completed")){
				return false;
			}
		}
		return true;
	}

	$(window).scroll(function(){
		$menuBarHeight = $(".topMenu").height() + $(".banner").outerHeight();
		
		if($(window).scrollTop() > $menuBarHeight){
			$(".menuBar").children().addClass("sticky")
		}else{
			$(".menuBar").children().removeClass("sticky")
		}
		
		//if ($(window).width() > 767 ) {
			if(($(window).scrollTop()) > 100) {
				$(".footer-fixed").slideDown();
			}
			else {
				$(".footer-fixed").slideUp();
			}
			if (($(window).innerHeight() + $(window).scrollTop()) >= $("body").height() + 67 ) {
				$(".footer-fixed").addClass("fixed");
			}
			else {
				$(".footer-fixed").removeClass("fixed");
			}
		// }
		
	});
	
	function onScroll(event){
		var scrollPos = $(document).scrollTop() + 240;
		$headerBar = $(".topMenu").height() + $(".banner").innerHeight() + $(".menuBar").height();		
		if($clickEvent) {
			$('.rightPannelInfo').each(function () {
				if ($(this).offset().top  + ($(this).innerHeight() - $headerBar) <= scrollPos ) {
					$(".leftNav-ul").children().removeClass("arrow");
					$('.leftNav-ul a').parent().removeClass("leftNav-active");
					setTimeout(function(){$('.leftNav-active a span').addClass('arrow');},100);
				}
				else{
					if(scrollPos < $('.rightPannelInfo').eq(0).offset().top + $('.rightPannelInfo').eq(0).height()){
						$(".leftNav-ul").children().removeClass("arrow");
						$('.leftNav-ul a').parent().removeClass("leftNav-active");
						setTimeout(function(){$('.leftNav-active a span').addClass('arrow');},100);
					}else{
						$(".leftNav-ul").children().removeClass("arrow");
						$(".leftNav-ul").parent().removeClass("leftNav-active");
						$("#leftBar").find(".leftNav-ul").removeClass('leftBarFixed');
						$(".rightPannel").removeClass('stickyFixed')
					}
				}
			});
		} else {
			$('.rightPannelInfo').each(function () {
				if ($(this).offset().top  + ($(this).innerHeight() - $headerBar) <= scrollPos ) {
					$(".leftNav-ul").children().removeClass("arrow");
					$('.leftNav-ul a').parent().removeClass("leftNav-active");
					$('.leftNav-ul a').parent().eq($(this).index()+1).addClass('leftNav-active');
					setTimeout(function(){$('.leftNav-active a span').addClass('arrow');},100);
				}
				else{
					if(scrollPos < $('.rightPannelInfo').eq(0).offset().top + $('.rightPannelInfo').eq(0).innerHeight()){
						$(".leftNav-ul").children().removeClass("arrow");
						$('.leftNav-ul a').parent().removeClass("leftNav-active");
						$('.leftNav-ul li').eq(0).addClass('leftNav-active');
						setTimeout(function(){$('.leftNav-active a span').addClass('arrow');},100);
					}else{
						$(".leftNav-ul").children().removeClass("arrow");
						$(".leftNav-ul").parent().removeClass("leftNav-active");
						$("#leftBar").find(".leftNav-ul").removeClass('leftBarFixed');
						$(".rightPannel").removeClass('stickyFixed')
					}
				}
			});
		}
		var arrowHeight = parseInt($(".leftNav-active a").height()/2) + 5;
		$('.leftNav-active a span').css("top",arrowHeight);
		if($(window).scrollTop() > scrollIndex &&  $('.rightPannel').height() + $headerBar > $(window).scrollTop()){
			$(".leftNavBarSection").addClass('leftBarFixed');
			$(".rightPannel").addClass('stickyFixed')
			$(".leftNavBarSection").css("top",$(".menuBar").height())
		}else{
			$(".leftNavBarSection").removeClass('leftBarFixed');
			$(".rightPannel").removeClass('stickyFixed')
			$(".leftNavBarSection").css("top",'0')
		}
	}
	
	$(window).on("resize load",function(){
		if($(window).width() > 767){
			var bannerHeight = $(".bannerImg div").height();
			var innerBanner = $(".bannerTxt > div").height();
			var totTop = (bannerHeight - innerBanner)/2;
			$(".bannerTxt").css("top",totTop)
			$(".centres-section .centre-content").removeAttr("style");
			$(".centres-section .centre-content > p").removeAttr("style");
			$(".footerlist-ul").removeAttr("style");
		}else{
			$(".bannerTxt").removeAttr("style");
			$(".centres-section .centre-heading").removeClass('activeCentre');
		}
		
		$("body").setEqualHeight($(".box-borderDiv"));
		$(".draggable").draggable({  
			start: function(event, ui) { 
			 $(".dropdown-menu").hide();
			 $(".menubar-ul li a").removeClass("menuBar-active");
			}, 
			stop: function(event, ui) {  
			}
		});
		$(".draggable li").each(function(index){
			$activeIndex = $(".activeIndex").index();
		});
		
		if($(".draggable").width() > $(window).width()){
			//setTimeout(function(){
				if($activeIndex > 1){
					$activeleft = $(".activeIndex").position().left - 100;
					$(".draggable").css("left",-$activeleft);
				}
			//},1000);
		}
		if($(window).width() < 768){
			$(".dropMenu").addClass("tab-accordiant-header");
			$(".dropDown").addClass("tab-accordiant-content");
			if(!$(".tab-accordiant-header").hasClass("active-state")){
				$(".tab-accordiant-content").hide();
			}
		}else{
			$(".tab-accordiant-content *").css("opacity","1");
			$(".dropMenu").removeClass("tab-accordiant-header");
			$(".dropDown").removeClass("tab-accordiant-content");
			$(".tab-accordiant-content,.dropDown ").css("display","inline");
			$("body").setEqualHeight($(".setHeight"));
			$("body").setEqualHeight($(".step1"));
			$("body").setEqualHeight($(".step2"));
			$("body").setEqualHeight($(".step3"));
			$("body").setEqualHeight($(".step5"));
			$("body").setEqualHeight($(".step6"));
			$("body").setEqualHeight($(".step7"));
			$("body").setEqualHeight($(".step8"));
			$("body").setEqualHeight($(".step9"));
		}
		if($(window).width() > 1000){
			$(document).on("scroll ", function(){onScroll();});
		}
		$(".leftNavBarSection").removeClass("leftBarFixed");
	});
	
	$(window).on("load", function(){
		if($(window).width() < 768){
			$(".dropMenu").addClass("tab-accordiant-header");
			$(".dropDown").addClass("tab-accordiant-content");
			$(".tab-accordiant-content").hide();
			$(".dropdown-menu").mCustomScrollbar();
		}else{
			$(".dropMenu").removeClass("tab-accordiant-header");
			$(".dropDown").removeClass("tab-accordiant-content");
			$(".tab-accordiant-content,.dropDown ").css("display","inline");
		}
	});
	
	// Lightbox 
	$('.clickMore').click(function(){
		$(this).siblings(".lightBox-container").lightBox({
			content: 'true',
			close_button: '/views/citigold/images/close-wt.png',
			restrict_bg_click: 'true',
			type: ''
		});
	});
	
	$(document).on('click', ".click-disclaimer a", function(e) {
		if(!$(this).hasClass("activeDisclaimer")){
			$(this).addClass("activeDisclaimer");
			$(this).parent().parent().next(".disclaimer-content").slideDown();
		}else{
			$(".click-disclaimer a").removeClass("activeDisclaimer");
			$(".disclaimer-content").slideUp();
		}
	});
	
	$(".alertTxt").on("click", function(){
		if($(this).attr("href") == "javascript:;"){
			alert("This link was included for placement only and is not functional at this time.")
		}
	});
	
	// Home page circle section jumping
	$(document).on('click', ".circlePadding", function() {
		var target = $(this).attr('data_target');
		$('body,html').animate({scrollTop: $("#"+target).offset().top - $(".menuBar").height()}, 800);
	});
	//Mobile circle section jumping
	$(document).on('click',".mobileCirclePadding", function() {		
		var target = $(this).attr('data_target');		
		$('body,html').animate({scrollTop: 1800}, 600, function(){
			$('body,html').animate({scrollTop: $("#"+target).offset().top - $(".menuBar").height()}, 600);			
		});
	});
	
	$(document).on("keyup", "#gsc-i-id1", function(e){
		 var event = e.which || e.keyCode;
		 if (event == 13){ $(this).blur();}
	});
	$(window).bind("pageshow", function(event) {
		if (event.originalEvent.persisted) {
			window.location.reload() 
		}
	});
});
	
/* 	============================================
		ADDED A ONCLICK FOR HOTSPOT
	============================================ */
	function navHotspotClick(gotoURL) { 
		setTimeout(function(){
			window.location.href = gotoURL;
		},500);
	}
	
// For Back to top
if(window.location.href.indexOf("english") > -1) {
	$(".pagefooter").before("<div id='back-top' style='display:none;' title='Back to top'><span>Back to top</span></div>");
}
else {
	$(".pagefooter").before("<div id='back-top' style='display:none;' title='回到顶部'><span>回到顶部</span></div>");
	$("body").addClass("chinese");
}

$(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 300) {
			$('#back-top').fadeIn();
		} else {
			$('#back-top').fadeOut();
		}
	});
	$('#back-top span').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	$(".videoClick").on("click", function(){
		$id = $(this).attr("rel");
	});
});

(function ($) {
	$.fn.setEqualHeight = function (ele) {
		var maxHeight = 0;
		var maxElement = null;

		$(ele).css({ "height": "auto" })

		$(ele).each(function (i) {
			if (($(this).height() + parseInt($(this).css("padding-bottom")) + parseInt($(this).css("padding-top"))) > maxHeight) {
				maxHeight = $(this).height() + parseInt($(this).css("padding-top")) + parseInt($(this).css("padding-bottom"));
				maxElement = this;
			}
		});
		$(ele).each(function () {
			$(this).height(maxHeight - parseInt($(this).css("padding-top")) - parseInt($(this).css("padding-bottom")))
		})
	};
})(jQuery);

function speedbumpEN(url) {
    if (confirm('You are now leaving the Citibank China website and entering a third party website. \n\n Any information you may provide on the third party website shall be subject to the confidentiality and security terms of such website and not the privacy policies of Citibank China, and Citibank China shall not bear any responsibility for any unauthorised disclosure or breach of confidentiality in relation to such information provided. \n\n Furthermore any link to a third party website contained herein does not constitute an endorsement by Citibank China of such third party, their website or their products and/or services, and Citibank China also makes no warranties as to the content of such website. \n\n Would you like to continue?')) {
        window.open(url);
    }
}
function speedbumpCN(url) {
    if (confirm('You are now leaving the Citibank China website and entering a third party website. \n\n Any information you may provide on the third party website shall be subject to the confidentiality and security terms of such website and not the privacy policies of Citibank China, and Citibank China shall not bear any responsibility for any unauthorised disclosure or breach of confidentiality in relation to such information provided. \n\n Furthermore any link to a third party website contained herein does not constitute an endorsement by Citibank China of such third party, their website or their products and/or services, and Citibank China also makes no warranties as to the content of such website. \n\n Would you like to continue?')) {
        window.open(url);
    }
}
function enter_check(e)
{
	var e=window.event || e;
	var keyunicode=e.charCode || e.keyCode;	
	if (keyunicode==13)
	{
		if(!submit)
		{
			return submit_form('step_1','step_1')
		}
	}
	return true;	
}

function activeTab(tab,innerTab){
	$("#"+tab).parent().addClass("activeMenu");
	$("#"+tab).parent().addClass("activeIndex");
	$("#"+innerTab).addClass("activeSubmenu");
}

function MM_openBrWindow(e,t,n){window.open(e,t,n)}function createCookie(e,t,n){var r;if(n){var i=new Date;i.setTime(i.getTime()+n*24*60*60*1e3);r="; expires="+i.toGMTString()}else{r=""}document.cookie=e+"="+t+r+"; path=/"}function getCookie(e){var t,n,r,i=document.cookie.split(";");for(t=0;t<i.length;t++){n=i[t].substr(0,i[t].indexOf("="));r=i[t].substr(i[t].indexOf("=")+1);n=n.replace(/^\s+|\s+$/g,"");if(n==e){return unescape(r)}}}function eraseCookie(e){createCookie(e,"",-1)}function setCookie(e,t,n){var r=new Date;r.setDate(r.getDate()+n);var i=escape(t)+(n===null?"":"; expires="+r.toUTCString());document.cookie=e+"="+i}var is_touch_device="ontouchstart"in document.documentElement;var mobile=function(){return{detect:function(e,t){e=navigator.userAgent;if(/android|bb|meego|mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substring(0,4)))return true;else return false}}}();var tablet=function(){return{detect:function(){return/ipad|android 3|sch-i800|playbook|kindle|gt-p1000|sgh-t849|shw-m180s|a510|a511|a100|dell streak|silk/i.test(navigator.userAgent.toLowerCase())}}}();var param = location.href.substr(location.href.lastIndexOf("#")+1,location.href.length);if(param.lastIndexOf('?')>0){param = param.substr(0,param.lastIndexOf('?'));}

if ((mobile.detect ()) && (!tablet.detect())){
	//$('.login').children().eq(0).attr('href','https://mobile.citibank.com.sg/GMP/JSO/presignon/launch.action#signon')
}

function jumpPosition(parmeter) {
	var sli=""
	var a=top.window.location;
	str=new String(a)
	var index = str.indexOf(parmeter);
	if(index!=-1) {
	   var str1 = str.substring(index);
	  var index1 = str1.indexOf("&");
	  if (index1 == -1){
		   var index = str1.indexOf("=");
		   var sli = str1.slice(index+1);
	  }
	   else {
		   var index = str1.indexOf("=");
		   var sli = str1.slice(index+1,index1);
	   }
	}
	setTimeout(function(){
		if(sli != ""){
			$('html, body').animate({scrollTop: $("#"+sli).offset().top - $(".menuBar").height()}, 700);
		}
	},700)
	return sli;
}

function getNav(parmeter) {
	var sli=""
	var a=top.window.location;
	str=new String(a)
	var index = str.indexOf(parmeter);
	if(index!=-1) {
	   var str1 = str.substring(index);
	  var index1 = str1.indexOf("&");
	  if (index1 == -1){
		   var index = str1.indexOf("=");
		   var sli = str1.slice(index+1);
	  }
	   else {
		   var index = str1.indexOf("=");
		   var sli = str1.slice(index+1,index1);
	   }
	}
	setTimeout(function(){
		if(sli != ""){
			if($(window).width() > 1000){
				$("#"+sli).trigger("click");
			}
			else{ 	
				var sli2 = sli.charAt(sli.length - 1)
				$('html, body').animate({scrollTop: $("#rightPannel"+sli2).offset().top - $(".menuBar").height() - 20}, 700);
			}
		}
	},1000)
	return sli;
}

// Set dynamic height Start
$(document).ready(function(){
	setTimeout(function(){
		setParaHeight();
	}, 500);
});
$(window).resize(function(){
	setTimeout(function(){
		setParaHeight();
	}, 500);
});
function setParaHeight(){
   var highestBox = 0;
   $('.maxiHeight').each(function(){
	   $(this).css({"height": "auto"});
	   if($(this).height() > highestBox){
			   highestBox = $(this).height();  
	   }
   });        
   $('.maxiHeight').height(highestBox);
}
// Set dynamic height END

$(document).ready(function(){
	$(".tab-accordiant-header").click(function() {
		var ths = $(this);
		setTimeout(function(){
			$('html, body').animate({scrollTop: ths.offset().top - $(".menuBar").height()}, 700);
		},500);
	});
});

// For language switch START
function langSwitch(lang,dest)
{
	switch (lang)
	{
		case 'en': $lang = 'english/'; break;
		case 'zh': $lang = 'chinese/'; break;
		default: break;
	}
	switch (dest)
	{
		case 'en': $dest = 'english/'; break;
		case 'zh': $dest = 'chinese/'; break;
		default: break;
	}
	
	$destChf = (top.location.href).replace($lang,$dest);
	$destChf = $destChf.replace($lang,$dest);
	var protocol = location.protocol;
	$.ajax({
		url: $destChf,
		cache: true
	}).success(function () {
		if ($destChf == protocol+'//www.citibank.com.cn/' || $destChf == protocol+'//www.citibank.com.cn/sim') {
			if (dest == 'en') { top.location.href = '/sim/english/index.htm'; }
			if (dest == 'zh') { top.location.href = '/sim/index.htm'; }
		}
		else {
				top.location.href = $destChf;
		}
	}).error(function () {
		if (dest == 'en') { top.location.href = '/sim/english/index.htm'; }
		if (dest == 'zh') { top.location.href = '/sim/index.htm'; }
	})
}
// For language switch END

