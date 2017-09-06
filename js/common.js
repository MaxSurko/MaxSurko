$(document).ready(function() {

	$("body").niceScroll({
		horizrailenabled : false,
		"verge" : "500"
	});

$("#callback","#callback2").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Thanks for application");
			setTimeout(function() {
				
			}, 1000);
		});
		return false;
	});


});	

function show(){
	$('#loadMore').hide();
	$('.hidden').css("display","block");
	}

$(window).on('load', function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
        

