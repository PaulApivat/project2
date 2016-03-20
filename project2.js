//$(document).ready(function(){
//	$('div').dblclick(function(){
//			$(this).fadeOut('fast');
//		});
//});

$(document).ready(function(){
	$('#drag').draggable();
});

$(document).ready(function(){
		function randomColor(){
			return '#' + Math.random().toString(16).slice(2,8);
		};

	$('#button').click(function(){
		$('body').css('background', randomColor());
	});
});