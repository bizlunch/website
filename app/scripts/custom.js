(function($) {
	'use strict';
	new WOW().init();
	
	/*
	Dropdown
	=========================== */
	$('ul.navbar-nav li.dropdown').hover(function () {
			$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
		}, function () {
			$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();
	});

	/*
	Counters
	=========================== */
	jQuery('.appear').appear();
	var runOnce = true;
	jQuery(".stats").on("appear", function(data) {
		var counters = {};
		var i = 0;
		if (runOnce){
			jQuery('.counter-number').each(function(){
				counters[this.id] = $(this).html();
				i++;
			});
			jQuery.each( counters, function( i, val ) {
			//console.log(i + ' - ' +val);
				jQuery({countNum: 0}).animate({countNum: val}, {
					duration: 3000,
					easing:'linear',
					step: function() {
						jQuery('#'+i).text(Math.floor(this.countNum));
					}
				});
			});
			runOnce = false;
		}
	});

	/*
	Hover image
	=========================== */		
	$(".img-caption").css({'left':'-100%'});
	$('.img-wrapper').hover(
		function() {
			$(".img-caption", this).stop().animate({left:'0'},{queue:false,duration:300});
		},
		function() {
		$(".img-caption", this).stop().animate({left:'100%'},{queue:false,duration:300});
		}
	)
	
	/* Client logo hover
	=========================== */	
	$(".logo-hover").css({'opacity':'0','filter':'alpha(opacity=0)'});	
	$('.client-link').hover(function(){
				$(this).find('.logo-hover').stop().fadeTo(900, 1);
				$(this).find('.client-logo').stop().fadeTo(900, 0);
	}, function() {
				$(this).find('.logo-hover').stop().fadeTo(900, 0);
				$(this).find('.client-logo').stop().fadeTo(900, 1);
	});	

	/*
	Team
	=========================== */	
	$(".team-caption").css({'opacity':'0','filter':'alpha(opacity=0)'});
	$('.team-wrapper').hover(function(){
		$(this).find('.team-caption').stop().fadeTo(900, 1);
		$(".team",this).stop().css({'z-index':'20'});
	}, function() {
		$(this).find('.team-caption').stop().fadeTo(900, 0);
		$(".team",this).stop().css({'z-index':'20'});
	});		
	
	$("#formNewsletter").submit(function()
	{
		var email = $("#inputNewsletterEmail").val();
		
		if (email.length === 0)
		{
			alert("Veuillez saisir un email valide !");
		}
		else
		{		
			alert("Merci !");
		
			$.post("//api.bizlunch.fr/misc/contact", {email: email});
		}
		
		return false;
	});
	
})(jQuery);