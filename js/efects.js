$(document).ready(function(){
	// logotipo efects
	$("#logotipo").on("mouseover", function(){

		$("#banner h1").addClass("efect");

	}).on("mouseout", function(){

		$("#banner h1").removeClass("efect");

	});
	// search button expansion settings
	$("#input-search").on("focus", function(){

		$("#menu").addClass("active");

	}).on("blur", function(){

		$("#menu").removeClass("active");

	});
	//owl-caroucel settings	
	$(".owl-carousel").owlCarousel({
			loop: true,
			nav: true,
			navText: ["<button id='button-prev'><i class='fa fa-angle-left'></i></button>", "<button id='button-next'><i class='fa fa-angle-right'></i></button>"],
			responsive:{
				0:{
				 items:1
				},
				480:{
				 items:2
				},
				768:{
				 items:3
				},
				1200:{
				 items:4
				}
			}
	});

	//page up effects, but it dont work, I inspected and found out it's becouse of the jQuery error.
	$("#page-up").on("click", function(event){
		$('html, body').animate({scrollTop:0}, 'slow');
	});
	event.preventDefault();
	
	$("#btn-bars, #menu-mobile .bar-close button").on("click", function(){

		$("header").toggleClass("open-menu");

	});

	$("#btn-search").on("click", function(){

		$("header").toggleClass("open-search");

	});
});