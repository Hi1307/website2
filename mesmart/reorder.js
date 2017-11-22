$(function(){
	$("#reorder").html() += "<p>Restock 2 more items for Shelf</p>"
	if ($("#battery1").css("background-color")==="green" && $("#battery2").css("background-color")==="green"){
		$("#reorder").html() += "<p>2 stock available</p>"
	}
})