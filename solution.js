
				var array=null;				
				var inputMatrixSize=null;
				var N = null;				
				var inputCoorX = null;
				var inputCoorY = null;
				var coordinateX = null;
				var coordinateY = null;
				var str='';
				var tbl='';
			
			////////////////Create matrix////////////////////////////
			function Matrix(columns,rows) {
				var x = new Array(columns);
					for (var j = 0; j < columns; j++) {
						x[j] = new Array(rows);
					}
				return x;
			}
			////////////////Output Table////////////////////////////
			function MatrixBuild(){
				 str='';
				 tbl='';
				 inputMatrixSize = document.getElementById("matrixSize");				 
				 N = Number(inputMatrixSize.value)+1;
				 
				array = Matrix(N,N);		
				
				array[1][1]=1;
				//Put to the matrix first row
					for (var j = 2; j < N; j++) {
						array[j][1]=array[j-1][1]+(j-1);
					}
				//Put to the matrix all rows
					for(var i=2; i<N; i++){  
						for(var j=1; j<N; j++){
							array[j][i] = array[j][i-1]+(i+j-1) ;  
						}	
					}	
					for(i=N-1;i>0;i--){
						str=' ';
						for(j=1;j<N;j++){
							str+='<td>'+array[j][i]+'</td>';		
						}
							tbl+='<tr>'+str+'</tr>'
					
					
					
					}
				document.getElementById("myTable").innerHTML=tbl;
			}
			
			
			
			
		/////////////////////////Search ID/////////////////////////////////////	
			function Search(){
								
				inputCoorX = document.getElementById("coordinateX");
				inputCoorY = document.getElementById("coordinateY");
				coordinateX = inputCoorX.value;
				coordinateY = inputCoorY.value;
				MatrixBuild();
				tbl='';
				str='';
				for(i=N-1;i>0;i--){
						str=' ';
						for(j=1;j<N;j++){
							if(j==coordinateX&&i==coordinateY){
								str+='<td bgcolor="#f75216">'+array[j][i]+'</td>';
							}
							else if(j<=coordinateX&&i<=coordinateY){
								str+='<td bgcolor="#e0af34">'+array[j][i]+'</td>';	
							}
							else
								str+='<td>'+array[j][i]+'</td>';
														
						}
							tbl+='<tr>'+str+'</tr>'
					
					
					document.getElementById("myTable").innerHTML=tbl;
					}
				
				document.getElementById("treasuresID").innerHTML='Treasures id: '+array[coordinateX][coordinateY];
				
				
			}
			
			
			
			