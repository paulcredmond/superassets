// Below are the scripts that will be compiled into CodeKit and output as one file called custom.js.
// Delete unneccessary files to reduce file size and add new ones below.

// @codekit-prepend "libs/modernizr-2.6.2.js"; || Modernizr - Front end development
// @codekit-prepend "libs/jquery-ui.js"; || jQuery UI - UI elements (http://jqueryui.com/)
// @codekit-prepend "libs/less-1.3.3.min.js"; || LESS - LESS CSS
// @codekit-prepend "libs/jquery.cycle2.min.js"; || Cycle2 - Slideshows
// @codekit-prepend "libs/jquery.expander.min.js"; || jQuery Explander - For show/hiding text
// @codekit-prepend "libs/retina.js"; || Retina JS - Add retina images
// @codekit-prepend "libs/select2/select2.min.js"; || Select2 - Sexy dropdowns
// @codekit-prepend "libs/respond.min.js"; || Respond - Media queries
// @codekit-prepend "libs/fancybox/jquery.fancybox.js"; || Fancybox - Lightbox for images & Video
// @codekit-prepend "libs/idealforms/jquery.idealforms.min.js"; || Idealforms - Form validation + Tips
// @codekit-prepend "libs/noty/jquery.noty.js"; || Noty - User notifications

// Place once-off jQuery functions below

$(document).ready(function() {

	// Will smoothly animate hash links
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
			|| location.hostname == this.hostname) {

			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});

	// Fancybox
	$(".fancybox").fancybox();

	$(".various").fancybox({
		maxWidth	: 800,
		maxHeight	: 600,
		fitToView	: false,
		width		: '70%',
		height		: '70%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});

	// Remove Skype button
	window.setTimeout(function() {
		$('.skype_pnh_container').html('');
		$('.skype_pnh_print_container').removeClass('skype_pnh_print_container');
	}, 800);

});