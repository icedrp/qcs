$(document).ready(function() {
    $('.qcs-input, .qcs-textarea').on('keyup', function(){
        var text = $(this).val();
        var r_error = $(this).attr('id');
        if(text.length > 0){
            $(this).removeClass('has-error');
            $('#'+r_error+'_req').removeClass('active');
        }
    });
    $('#contact_phone').keyup(function(e){
        var ph = this.value.replace(/\D/g,'').substring(0,10);
        this.value = ph;
    });
});

function check_data(argument) {
	var name = $('#contact_name').val();
	var email = $('#contact_email').val();
	var phone = $('#contact_phone').val();
	var msg = $('#contact_message').val();

	if(name == '') {
		$('#contact_name').addClass('has-error');
        $('#contact_name_req').addClass('active');
        $('#contact_name').focus();
        return false;
	} else if(email == '' || !validateEmail(email)) {
		$('#contact_email').addClass('has-error');
        $('#contact_email_req').addClass('active');
        $('#contact_email').focus();
        return false;
	} else if(phone == '') {
		$('#contact_phone').addClass('has-error');
        $('#contact_phone_req').addClass('active');
        $('#contact_phone').focus();
        return false;
	} else if(msg == '') {
		$('#contact_message').addClass('has-error');
        $('#contact_message_req').addClass('active');
        $('#contact_message').focus();
        return false;
	}
}

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

