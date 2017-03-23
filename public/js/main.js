$(function() {
	$('html').click(function(e) {
		if ($(e.target).closest('.dropdown-content, .dropdown').length === 0) {
			$('.dropdown-content').hide();
		}
	});
	$('#navbar .nav .dropdown').each(function() {
		var nav_link_width = $(this).outerWidth();
		var dropdown_content_width = $(this).find('.dropdown-content').outerWidth();
		var difference = dropdown_content_width - nav_link_width;

		var triangle_height = $(this).find('.arrow').outerHeight();

		$(this).find('.dropdown-content').css('margin-left', -difference/2);
		$(this).find('.arrow').css('bottom', (-triangle_height/2)+5);
	});
	$('#navbar .nav > li.dropdown > a').click(function(e) {
		e.preventDefault();
		$(this).parent().find('.dropdown-content').toggle();
	});
});