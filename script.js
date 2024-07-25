const table=document.getElementById('sampleTable');
let row=3;

function insert_Row() {
    //Write your code here
	
	let tr=document.createElement('tr');
	let td1=document.createElement('td');
	//td1.textContent=`Row${row} cell1`;
	
	let td2=document.createElement('td');
	//td2.textContent=`Row${row} cell2`;
	td1.textContent='New Cell1';
	td2.textContent='New Cell2';
	
	tr.append(td1,td2);
     table.appendChild(tr);
	row++;

  
  
}
