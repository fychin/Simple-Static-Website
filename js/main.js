/* Top Navbar responsive */
function expandNavbar() {
	var x = document.getElementById("top-navbar");
	// Add class responsive when "responsive" is not in class
	if(x.className === "topnav")
		x.className += " responsive";
	else
		x.className = "topnav";
}

$(document).ready(function(){
	// Init Wow.js
	new WOW().init();

	// Navbar menu scroll to section.
	$('#nav-abt').click(function(){
		$('html, body').animate({
			scrollTop: $('#home').offset().top
		}, 800);
	});
	$('#nav-edu').click(function(){
		$('html, body').animate({
			scrollTop: $('#education').offset().top
		}, 800);
	});
	$('#nav-coursework').click(function(){
		$('html, body').animate({
			scrollTop: $('#coursework').offset().top
		}, 800);
	});
	$('#nav-exp').click(function(){
		$('html, body').animate({
			scrollTop: $('#experience').offset().top
		}, 800);
	});
	$('#nav-project').click(function(){
		$('html, body').animate({
			scrollTop: $('#project').offset().top
		}, 800);
	});
	$('#nav-skills').click(function(){
		$('html, body').animate({
			scrollTop: $('#skills').offset().top
		}, 800);
	});
	$('#nav-contact').click(function(){
		$('html, body').animate({
			scrollTop: $('#contact').offset().top
		}, 800);
	});


	$(window).scroll(function() {
		// Show scroll-top button if window is scrolled down.
		if ($(this).scrollTop() > 100) {
			$('#scroll-top').fadeIn();
		}
		else {
			$('#scroll-top').fadeOut();
		}
	});

	// Animated scroll to top.
	$('#scroll-top').click(function() {
		$('html, body').animate({scrollTop: 0}, 800);
		return false;
	});

	// Show coursework details.
	$('.details').click(function() {
		if ($('.course-desc').is(":hidden")) {
			$('.course-desc').show("slow");
			$('.details').html("less <i class='fa fa-chevron-up'></i>");
		}
		else {
			$('.course-desc').slideUp();
			$('.details').html("details <i class='fa fa-chevron-down'></i>");
		}
	});
});