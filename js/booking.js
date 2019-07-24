$(document).ready(function(){
	$('#service, #brand, #model').selectize();

	$('#telephone').keyup(function(e){
        var ph = this.value.replace(/\D/g,'').substring(0,15);
        this.value = ph;
    });
});

function gotoDetailBooking(){
	$('#booking').hide();
	$('#choosing').show();
}
function backToBooking(){
	$('#choosing').hide();
	$('#booking').show();
}
function confirmBooking(){
	$('#confirm_booking').show();
}
