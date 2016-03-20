$(document).ready(function(){
	$('#fade').dblclick(function(){
			$(this).fadeOut('fast');
		});
});

$(document).ready(function(){
	$('#drag').draggable();
});

//code for getting random color function returns '#' + random number, passed with string 16 decimals and sliced half?

// $(document).ready(function(){
//		function randomColor(){
//			return '#' + Math.random().toString(16).slice(2,8);
//		};

//	$('#button').click(function(){
//		$('body').css('background', randomColor());
//	});
//  });


//Try another version from StackOverflow ALSO WORKS!!!!!!

$(document).ready(function(){
	function getRandomColor() {
		var hex = Math.floor(Math.random() * 0xFFFFFF);
		return "#" + ("000000" + hex.toString(16)).substr(-6);
	};

	$('#button').click(function(){
		$('body').css('background', getRandomColor());
	});
});