// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

const table = document.getElementById('pixel_canvas');

$("#make_grid").click(function() {
	resetGrid();
  	makeGrid();
});

function makeGrid(){
var height = document.getElementById('input_height').value;
var width = document.getElementById("input_width").value;
	for(var rowNum=0; rowNum <= height - 1; rowNum++){
	var row = table.insertRow(rowNum);
		for(var cellNum=0; cellNum <= width - 1; cellNum++){
			var cell = row.insertCell(cellNum);
			//cell.id = `${rowNum}-${cellNum}`;
	}
}

};

$("#pixel_canvas").click(function(event) {
	color(event);
});

function resetGrid(){
	table.innerHTML = "";
}

// Drawing and Erasing
function color(event){
	var color = document.getElementById('colorPicker').value;
	event.target.style.backgroundColor = color;
}



















