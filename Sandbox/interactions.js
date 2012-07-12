if (typeof(arimaa) === 'undefined') {
    var arimaa = {};
    alert('requires arimaa.js');
}

if (typeof(arimaa.interactions) === 'undefined') {
    arimaa.interactions = {};
}

arimaa.interactions = (function() {
	"use strict";

	var canvas = null,

	initialize = function(canvasDomNode){
		canvas = canvasDomNode;
		canvas.addEventListener("click", boardOnClick, false);
	},

	Square = function (row, column) {
	   this.row = row;
	   this.column = column;
	},

	getCursorPosition = function (e) {
    /* returns Square with .row and .column properties */
    var x;
    var y;
    if (e.pageX != undefined && e.pageY != undefined) {
			x = e.pageX;
			y = e.pageY;
    }
    else {
			x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
			y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    x -= canvas.offsetLeft;
    y -= canvas.offsetTop;
    x = Math.min(x, board.width * standardPlayingPiece.width);
    y = Math.min(y, board.height * standardPlayingPiece.height);
    var square = new Square(Math.floor(y/standardPlayingPiece.height), Math.floor(x/standardPlayingPiece.width));
    return square;
	},

	boardOnClick = function(e) {
	    var square = getCursorPosition(e);
	    console.log("clicked on column " + square.column + " and row " + square.row);
	   //  for (var i = 0; i < gNumPieces; i++) {
				// if ((gPieces[i].row == cell.row) && 
				//     (gPieces[i].column == cell.column)) {
				//     clickOnPiece(i);
				//     return;
				// }
	   //  }
	    //clickOnEmptyCell(cell);
	};

	return{
		initialize: initialize
	};
}());