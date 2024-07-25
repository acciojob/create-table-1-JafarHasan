const table=document.getElementById('sampleTable');

function insert_Row() {
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    td1.textContent = 'New Cell1';
	
    let td2 = document.createElement('td');
    td2.textContent = 'New Cell2';
	
    tr.append(td1, td2);

    // Get the first row of the table
    let firstRow = table.getElementsByTagName('tr')[0];

    // Insert the new row before the first row
    table.insertBefore(tr, firstRow);
}
