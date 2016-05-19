$(document).ready(function(){
    $(window).scroll(function () {
	$('#bg').css({'top' : -($(this).scrollTop() / 5) + "px"});
    });

    var count;
    var interval;

    $(".sub").on('mouseover', function() {
	var div = $('#main');
	interval = setInterval(function(){
	    var pos = div.scrollTop();
	    div.scrollTop(pos + 2);
	}, 100);
    }).on('mouseout', function() {
	clearInterval(interval);
    });
});
