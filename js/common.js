$(document).ready(function() {

	$("body").niceScroll({
		horizrailenabled : false,
		"verge" : "500"
	});

function show(){
	$('#loadMore').hide();
	$('.hidden').css("display","block");
	}

$("#callback","#callback2").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Thanks for ");
			setTimeout(function() {
				
			}, 1000);
		});
		return false;
	});


});	

$(window).on('load', function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
        

