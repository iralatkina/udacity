
// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


//making grid
function makeGrid() {
	$('#pixel_canvas').children().remove();
	var gridHeight = +($('#input_height').val());	
	var gridWidth = +($('#input_width').val());	
	for ( var i = 1; i <= gridHeight; i++ ) {
		$('table').append('<tr></tr>');
		for (var j = 1; j <= gridWidth; j++) {
			$('table tr:last').append('<td></td>');
		}
	}
	$('#pixel_canvas').on('click', "td", function(){
		var usersColor = $('#colorPicker').val();
		$(this).css('background', usersColor);
	});
};

//create grid 
$('#submit').click(function(reloading){
	reloading.preventDefault();
	makeGrid();
})


