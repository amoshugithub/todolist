
$(document).ready(function(){

	// alert("Noticed:Click to check item's done , 
	//double click to delete item.")

	// $("li").click(function(){
	// 	$(this).toggleClass("checked");
	// });

	//button , add to do list item
	$("button").click(function(){
	var context = $("#inputContext").val();

	if(context === '') {
		alert("Warning");
		} 
		else {
			$("ul").append("<li>"+context+"</li>");
		}
	});

	//switch item done or yet
	$(document).on('click', '#items>li', function(){
		// $("li").click(function(){
		// console.log("test");
		$(this).toggleClass("checked");
		// });
	});

	//delete item , by double click
	$(document).on('dblclick', '#items>li', function(){
		$(this).fadeOut();
	});

		

	// $("li").click(function(){
	// 	$(this).toggleClass("checked");
	// });

});

//$("<li></li>").htmldbl