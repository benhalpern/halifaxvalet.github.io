$(document).ready(function(){
	launchAnimation()

	$("nav a").click(function() {
			var go = $(this).attr("href");
	    $('html, body').animate({
	        scrollTop: $(go).offset().top
	    }, 500);
		return false
	});

})










function launchAnimation(){
	$(".call-to-action").animate({"top":"200px","opacity":"1"},1300)
	$(".main-wrapper").animate({"margin-top":"20px","opacity":"1"},800)
	
}