function set_size() {
	var contentWidth = $('#layout').width();
	$('html,body').css({'font-size': contentWidth / 750 * 26+'px'});
}

$(window).resize(set_size);
$(function(){
    set_size();

    $('.tab_area').click(function(){
    	if(!$(this).next('.sh_info').is(':visible')){
    		$(this).find('.tab_txt').addClass('hide');
    		$(this).next('.sh_info').show();
    		$(this).find('.button_down').hide();
    		$(this).find('.button_up').show();
		}else{
            $(this).find('.tab_txt').removeClass('hide');
            $(this).next('.sh_info').hide();
            $(this).find('.button_down').show();
            $(this).find('.button_up').hide();
		}
	});
});
