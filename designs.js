// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

const table = document.getElementById('pixel_canvas');

$( "#make_grid" ).click(function() {
	resetGrid();
  	makeGrid();
});

function makeGrid(){
var height = document.getElementById('input_height').value;
var width = document.getElementById("input_width").value;
	for(var rowNum=0; rowNum <= height; rowNum++){
	var row = table.insertRow(rowNum);
		for(var cellNum=0; cellNum <= width; cellNum++){
			row.insertCell(cellNum);
	}
}

};

function resetGrid(){
	table.innerHTML = "";
}

























