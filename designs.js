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


//Function to convert hex format to a rgb color
function rgb2hex(rgb){
 rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
 return (rgb && rgb.length === 4) ? "#" +
  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
}




