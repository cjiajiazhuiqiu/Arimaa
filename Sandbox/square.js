var Square = function(column, row) {
	this.column = column;
	this.row = row;
	this.isEqual = function(square){
		return typeof(square) !== 'undefined' && square !== null && square.column === this.column && square.row === this.row;
	};
	this.toString = function(){
		return "square:: col:" + this.column + " row:" + this.row;
	};
};