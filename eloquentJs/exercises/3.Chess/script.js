// str = "# ";
// numRow = 3;
// numCol = 3;

// str = str.repeat(numCol);

// for (var i = 0 ; i < numRow ; i++ ) {
//     if ( i % 2) {
//         console.log(" " + str);     
//         continue;  
//     }
//     console.log(str);
// }


// Не работает.
function chessBoard(n) {
	var hashSymbol = '#', spaceSymbol = ' ';
 	for (var i = 1; i <= n; ++i) {
		var output = '';
 		while (output.length != n) {
 			if (i % 2 != 0) {
				if ((output.length + 1) % 2 != 0)
					output +=	hashSymbol;
				else
					output +=	spaceSymbol;
			} else {
			 	if ((output.length + 1) % 2 != 0)
					output +=	spaceSymbol;
				else
					output +=	hashSymbol;
			 }
		}
 		console.log(output);
	}
}