$(document).ready(function() {
	$('body').append('<div class="upbtn" id="upbtn"><div class="upbtnarr" id="upbtnarr"></div></div>');
	var lastpos = 0;
	if ($(window).scrollTop() > 100) {
		$('#upbtn').addClass('norm');
	}
	$(window).scroll(function() {
		if ($(window).scrollTop() > 0) {
			$("#upbtnarr").removeClass('down');
			if ($(window).scrollTop() > 100) {
				$('#upbtn').addClass('norm');
			} else {
				if (lastpos == 0) {
					$("#upbtn").removeClass('norm');
				}
			}
		} else if ($(window).scrollTop() < 100 && lastpos >= 100 && !$('#upbtnarr').hasClass('down')) {
			$("#upbtnarr").addClass('down');
		}
	});
	$("#upbtn").click(function() {
		if ($(window).scrollTop() > 5) {
			lastpos = $(window).scrollTop();
			$('body,html').animate({'scrollTop': 0}, 300);
		} else {
			$('body,html').animate({'scrollTop': lastpos}, 300);
		}
	});
});

