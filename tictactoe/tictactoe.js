
var counter = 0;

function endGame(player) {
	
	if (player === 0) { player = "O" };
	if (player === 0) { player = "X" };

	$('.game').append("<div id='win'> Player " + player + " Wins!</div>")
};

function draw() {
	$('.game').append("<div id='draw'> It's a draw!</div>")
}

function computerPick() {
	var pick = Math.floor(8 * Math.random())
};

$(document).ready(function() {

	$('.square').on('click', function() {
		
		
		var alreadySet = $(this).hasClass('set');
		
		if (!alreadySet) {
		
			if (counter % 2 == 0) {
				var value = "o"
				$(this).addClass('set o');
			} else {
				var value = "x"
				$(this).addClass('set x');
			};
			
			$(this).html(value);
			$(this).addClass('set');

			
			// build array with game results
			var idArray = []
			for (i = 0; i <= 8; i++) {
				var id = "#" + i;
				idArray[i] = $(id).html();
			};

			
			// check for draw
			if (idArray[0] != "" &&
					idArray[1] != "" &&
					idArray[2] != "" &&
					idArray[3] != "" &&
					idArray[4] != "" &&
					idArray[5] != "" &&
					idArray[6] != "" &&
					idArray[7] != "" &&
					idArray[8] != "") {
					draw();
			};

			// top row
			if ((idArray[0] === "x" && idArray[1] === "x" && idArray[2] === "x") ||
					(idArray[0] === "o" && idArray[1] === "o" && idArray[2] === "o")) {
				endGame(counter % 2);
			};
			// middle row
			if ((idArray[3] === "x" && idArray[4] === "x" && idArray[5] === "x") ||
					(idArray[3] === "o" && idArray[4] === "o" && idArray[5] === "o")) {
				endGame(counter % 2);
			};
			// bottom row
			if ((idArray[6] === "x" && idArray[7] === "x" && idArray[8] === "x") ||
					(idArray[6] === "o" && idArray[7] === "o" && idArray[8] === "o")) {
				endGame(counter % 2);
			};
			// left col
			if ((idArray[0] === "x" && idArray[3] === "x" && idArray[6] === "x") ||
					(idArray[0] === "o" && idArray[3] === "o" && idArray[6] === "o")) {
				endGame(counter % 2);
			};
			// middle col
			if ((idArray[1] === "x" && idArray[4] === "x" && idArray[7] === "x") ||
					(idArray[1] === "o" && idArray[4] === "o" && idArray[7] === "o")) {
				endGame(counter % 2);
			};
			// right col
			if ((idArray[2] === "x" && idArray[5] === "x" && idArray[8] === "x") ||
					(idArray[2] === "o" && idArray[5] === "o" && idArray[8] === "o")) {
				endGame(counter % 2);
			};
			// 0 to 8
			if ((idArray[0] === "x" && idArray[4] === "x" && idArray[8] === "x") ||
					(idArray[0] === "o" && idArray[4] === "o" && idArray[8] === "o")) {
				endGame(counter % 2);
			};
			// 6 to 2
			if ((idArray[6] === "x" && idArray[4] === "x" && idArray[2] === "x") ||
					(idArray[6] === "o" && idArray[4] === "o" && idArray[2] === "o")) {
				endGame(counter % 2);
			};

			counter++

		}
	});

});


