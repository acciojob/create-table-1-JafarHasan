const table=document.getElementById('sampleTable');
let row=3;
let col=3;
function insert_Row() {
    //Write your code here
	
	int tr=document.createElement('tr');
	int td=document.createElement('td');
	td.textContent=`Row${row} cell${col}`;
	
	tr.appendChild(td);
     table.appendChild(tr);
	row++;
	col++;
  
  
}
