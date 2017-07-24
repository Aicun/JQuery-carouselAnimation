$(document).ready(function() {
	
	var slide = $("#image_list");
	var leftProperty, newLeftProperty;

	$("#left_button").click(function(){
		leftProperty = parseInt(slide.css("left"));
		if(leftProperty < 0) {
			newLeftProperty = leftProperty + 100;
		}else {
			newLeftProperty = -800;
		}
		slide.animate({left:newLeftProperty},1000);
	});

	$("#right_button").click(function(){
		leftProperty = parseInt(slide.css("left"));
		if(leftProperty - 100 <= -900) {
			newLeftProperty = 0;
		}else {
			newLeftProperty = leftProperty - 100;
		}
		slide.animate({left:newLeftProperty},1000);
	})
			
}); // end ready