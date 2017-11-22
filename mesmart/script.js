$(function() {
	function rotateColor(color){
		let GREEN = 0
		let YELLOW = 1
		let ORANGE  = 2
		let RED = 3
		let WHITE = 4
		if (color === "rgb(0, 128, 0)"){
			return "rgb(200,30,30)";
		}
		else{
			return "green";
		}
}


  console.log("Script.js started!");
  $("#battery1").on("click",function(e){
  		a = $(e.target).css("background-color")
		$(e.target).css("background-color", rotateColor(a))		
	})
  $("#battery2").on("click",function(e){
  		a = $(e.target).css("background-color")
		$(e.target).css("background-color", rotateColor(a))		
	})
  $("#battery3").on("click",function(e){
  		a = $(e.target).css("background-color")
		$(e.target).css("background-color", rotateColor(a))		
	})
})