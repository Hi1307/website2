let count = 0;
function changeColor(x,y,color){
	$("#" + x + "x" + y).css("background-color", color)
}
function rotateColor(color){
	let GREEN = 0
	let YELLOW = 1
	let ORANGE  = 2
	let RED = 3
	let WHITE = 4
	if (color === "rgb(0, 128, 0)"){
		return "yellow";
	}
	else if (color === "rgb(255, 255, 0)"){
		return "orange";
	}
	else if (color === "rgb(255, 165, 0)"){
		return "red";
	}
	else if (color === "rgb(255, 0, 0)"){
		return "white";
	}
	else if (color === "rgb(255, 255, 255)"){
		return "green";
	}
}





$(function(){
	createNewElement = $('<div style="background-color: green;" class="col-xs-1"></div>')
	for (let i =1; i <= 12; i++){
		for (let j = 1; j <= 12; j++){
			let appendHtml = $("#display").html() + 
				'<div style="height: 50px; border: 1px solid black; background-color: white;" ' + 
				'id="'+
				i +"x" +j +
				'"'+' class="col-xs-1"></div>'
			$("#display").html(appendHtml)
		}
	}
	//Create white boarder
	// for (let a = 1; a <= 12; a++){
	// 	changeColor(1,a,"white")
	// }
	// for (let a = 1; a <= 12; a++){
	// 	changeColor(12,a,"white")
	// }
	// for (let a = 1; a <= 12; a++){
	// 	changeColor(a,1,"white")
	// }
	// for (let a = 1; a <= 12; a++){
	// 	changeColor(a,12,"white")
	// }

	//Create a new floorplan
	for (let a = 3; a<=10; a++){
		changeColor(a,3,"green")
	}
	for (let a = 3; a<=10; a++){
		changeColor(3,a,"green")
	}
	for (let a = 3; a<=10; a++){
		changeColor(10,a,"green")
	}
	for (let a = 3; a<=10; a++){
		changeColor(a,10,"green")
	}
	changeColor(7,3,"white")
	changeColor(6,10,"white")

	changeColor(6,10,"white")
	changeColor(5,4,"green")
	changeColor(6,5,"green")
	changeColor(7,6,"green")
	changeColor(8,7,"green")

	changeColor(8,5,"green")
	changeColor(6,7,"green")
	changeColor(5,8,"green")

	changeColor(7,8,"green")

	//End Creation
	$("#display").on("click",function(e){
		a = $(e.target).css("background-color")
		console.log(a === "rgb(0, 128, 0)")
		$(e.target).css("background-color", rotateColor(a))		
	})
})








