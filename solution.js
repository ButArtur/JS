// Create matrix
			var x = 100;
			var y = 100;
			function Matrix(columns,rows) {
				var x = new Array(columns);
					for (var j = 1; j < columns; j++) {
						x[j] = new Array(rows);
					}
				return x;
			}
			
			var array = Matrix(x,y);		
			var str='';
			array[1][1]=1;
			//Put to the matrix first row
			for (var j = 2; j < x; j++) {
				array[j][1]=array[j-1][1]+(j-1);
			}
			//Put to the matrix all rows
			for(var i=2; i<y; i++){  
				for(var j=1; j<y; j++){
					array[j][i] = array[j][i-1]+(i+j-1) ;
	  
	  
				}	
			}
			// Output matrix to screen
			for(i=1;i<x;i++){
				str=' ';
				for(j=1;j<y;j++){
					str+=array[j][i]+' ';		
				}
					document.write(str+'<br \/>');
			}
  
			document.write('<br \/>'+array[10][5]);