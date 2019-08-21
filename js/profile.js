$(document).ready(function(){
	checkProfile();
	$('.form-control').on('keyup', function(){
        var text = $(this).val();
        var r_error = $(this).attr('id');
        if(text.length > 0){
            $(this).removeClass('has-error');
            $('#'+r_error+'_req').removeClass('active');
        }
    });

	// Personal
	$('#btn_personal_edit').on('click', function(){
		$('.personal-form-input').removeClass('disabled');
		$('.custom-selectize').removeAttr('disabled');
		$('.form-personal-save').addClass('active');
		$('#btn_personal_edit').hide();
		$('#sub_district, #district, #province').selectize();
	});
	$('#btn_personal_cancel').on('click', function(){
		$('.personal-form-input').addClass('disabled');
		$('.custom-selectize').attr('disabled', true);
		$('.form-personal-save').removeClass('active');
		$('#btn_personal_edit').show();

		$('select').each(function() {
			var val = $('#'+this.id).val();
		    if (this.selectize) {
		        this.selectize.destroy();
		        setSelectValue(this.id, val);
		    }
		});
	});
	// Setting password
	$('#btn_setting_edit').on('click', function(){
		var current_password = $('#current_password');
		var new_password = $('#new_password');
		var confirm_password = $('#confirm_password');

		$('.setting-form-input').removeClass('disabled');
		$('.form-setting-edit').removeClass('active');
		$('.form-setting-save, .img-icon-eye-inactive').addClass('active');
		$('.img-icon-eye-active').removeClass('active');
		$('').removeClass('active');
		if(current_password.val() == 'xxxxxxxx') {
			current_password.removeAttr('value');
		} 
		if(new_password.val() == 'xxxxxxxx') {
			new_password.removeAttr('value');
		}
		if(confirm_password.val() == 'xxxxxxxx') {
			confirm_password.removeAttr('value');
		}
	});
	$('#btn_setting_cancel').on('click', function(){
		var current_password = $('#current_password');
		var new_password = $('#new_password');
		var confirm_password = $('#confirm_password');

		$('.setting-form-input').addClass('disabled');
		$('.form-setting-edit').addClass('active');
		$('.form-setting-save, .img-icon-eye-active, .img-icon-eye-inactive').removeClass('active');

		if(current_password.val() == '') {
			current_password.attr('value', 'xxxxxxxx');
		} 
		if(new_password.val() == '') {
			new_password.attr('value', 'xxxxxxxx');
		}
		if(confirm_password.val() == '') {
			confirm_password.attr('value', 'xxxxxxxx');
		}
	});
	$('.setting-form-input').keyup(function () {
	    var id = this.id;
	    var val = $('#'+id).val();
	    if(val.length > 0) {
	    	if($('#'+id+'_active.active').length > 0) {
				$('#'+id).removeClass('keyup');
	    	} else {
	    		$('#'+id).addClass('keyup');
	    	}
	    } else {
	    	$('#'+id).removeClass('keyup');
	    }
	});

	$('.list-group-item').on('click', function(){
		var page = this.id;
		setProfile(page);
	});
});
function setSelectValue (id, val) {
    document.getElementById(id).value = val;
}
function checkProfile(){
    var name = window.localStorage.getItem('profile');
    if(name == 'menu_setting'){
        $('#menu_setting').trigger("click");
    } else if(name == 'menu_history'){
        $('#menu_history').trigger("click");
    }  else{
        $('#menu_personal').trigger("click");
    }
}

// Setting password
function viewPassword(id){
	var x = document.getElementById(id);
    x.type = "text";
    $('#'+id+'_inactive').removeClass('active');
    $('#'+id+'_active').addClass('active');
    $('#'+id).removeClass('keyup');
}
function hidePassword(id){
	var x = document.getElementById(id);
	var val = $('#'+id).val();
    x.type = "password";
    $('#'+id+'_active').removeClass('active');
    $('#'+id+'_inactive').addClass('active');
    if(val.length > 1) {
    	$('#'+id).addClass('keyup');
    } else {
    	$('#'+id).removeClass('keyup');
    }
}

// History
function getHistoryList(id){
	historyGallery(id);
}
function historyList(id, list_id){
	$('#history_'+id+' .history-list-service').removeClass('active');
	$('#history_list_'+id+'_'+list_id).addClass('active');
	historyGallery(id, list_id);
}
function historyGallery(id, list_id){
	$('#history_'+id+' .history-gallery').empty();
	$('#history_'+id+' .history-gallery').removeClass('slick-initialized slick-slider slick-dotted');
	var image = [
					{
						id: 1,
						image: './img/profile/history-slide.png'
					},
					{
						id: 2,
						image: './img/profile/history-slide.png'
					},
					{
						id: 3,
						image: './img/profile/history-slide.png'
					},
					{
						id: 4,
						image: './img/profile/history-slide.png'
					}
				];
	if (!window.matchMedia('(max-width: 767px)').matches) {
		$.each(image, function(i, v){
			$('#history_'+id+' .history-gallery').append('<img src="'+v.image+'" />');
		});
		$('#history_'+id+' .history-gallery').slick({
			slidesToShow: 1,
		    slidesToScroll: 1,
		    dots: true,
		    arrows: true,
		    infinite: true,
		    nextArrow: $(".btn-history-next-gallery"),
		});
	}
}
function openHistoryM(id, list_id){
	$('html, body').addClass('noScroll');
  	$('header, section, footer').addClass('blur-filter');
  	$('#history_view').show();
  	$('.qcs-popup-body-img').empty();
	$('.qcs-popup-body-img').removeClass('slick-initialized slick-slider slick-dotted');
	var image = [
					{
						id: 1,
						image: './img/profile/history-slide.png'
					},
					{
						id: 2,
						image: './img/profile/history-slide.png'
					},
					{
						id: 3,
						image: './img/profile/history-slide.png'
					},
					{
						id: 4,
						image: './img/profile/history-slide.png'
					}
				];
	
	$.each(image, function(i, v){
		$('.qcs-popup-body-img').append('<img src="'+v.image+'" />');
	});
	$('.qcs-popup-body-img').slick({
		slidesToShow: 1,
	    slidesToScroll: 1,
	    dots: true,
	    arrows: false,
	    infinite: true,
	});
}
function closeHistoryM(){
	$('html, body').removeClass('noScroll');
  	$('header, section, footer').removeClass('blur-filter');
  	$('#history_view').hide();
}

// CHAT
function closeChat(){
	$('html, body').removeClass('noScroll');
	$('header, section, footer').removeClass('blur-filter');
  	$('#history_chat').hide();
}
function openChat(id){
	$('html, body').addClass('noScroll');
	if (window.matchMedia('(max-width: 768px)').matches) {
		$('header, section, footer').addClass('blur-filter');
	}
  	$('#history_chat').show();
  	document.getElementById('qcs_box_chat').scrollTop =  document.getElementById('qcs_box_chat').scrollHeight;
}
