
// get table by id
const table = document.getElementById('pixel_canvas');

// event listener for make grid button
$("#make_grid").click(function() {
	resetGrid();
  	makeGrid();
});

//make the original grid with black square painting
function initializeGrid(){
	var height = 15;
	var width = 15;
	for(var rowNum=0; rowNum <= height - 1; rowNum++){
	var row = table.insertRow(rowNum);
		for(var cellNum=0; cellNum <= width - 1; cellNum++){
			var cell = row.insertCell(cellNum);
			if(cellNum === 0 || cellNum === 1 || cellNum === 13 || cellNum === 14 || 
				rowNum === 0 || rowNum === 1 || rowNum === 13 || rowNum === 14)
			{
				cell.style.backgroundColor = '#ECE3D1';
			}
			else{
				cell.style.backgroundColor = '#130804';
			}
	}
}
};

//make grid funciton
function makeGrid(){
var height = document.getElementById('input_height').value;
var width = document.getElementById("input_width").value;
	for(var rowNum=0; rowNum <= height - 1; rowNum++){
	var row = table.insertRow(rowNum);
		for(var cellNum=0; cellNum <= width - 1; cellNum++){
			var cell = row.insertCell(cellNum);
	}
}

};


$("#pixel_canvas").click(function(event) {
	color(event);
});

// delete the grid
function resetGrid(){
	table.innerHTML = "";
}

// Drawing and Erasing
function color(event){
	var selectedColor = document.getElementById('colorPicker').value;
	if(rgb2hex(event.target.style.backgroundColor) == selectedColor)
	{
		event.target.style.backgroundColor = 'white';
	}
	else
	{	
		event.target.style.backgroundColor = selectedColor;
	}
}

// convert rgb colour format to hex colour format (adapted from stackoverflow: https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb)
function rgb2hex(rgb){
 rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
 return (rgb && rgb.length === 4) ? "#" +
  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
}

// make the grid when page is done loading
$(document).ready(function() {
    initializeGrid();
});


