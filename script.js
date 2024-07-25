const table=document.getElementById('sampleTable');

function insert_Row() {
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    td1.textContent = 'New Cell1';
	
    let td2 = document.createElement('td');
    td2.textContent = 'New Cell2';
	
    tr.append(td1, td2);

     // Get the table body
    let tbody = document.querySelector('#sampleTable tbody');

    // Get the first row of the table body
    let firstRow = tbody.getElementsByTagName('tr')[0];

    // Check if firstRow exists
    if (firstRow) {
        // If it exists, insert the new row before the first row
        tbody.insertBefore(tr, firstRow);
    } else {
        // If it doesn't exist, just append the new row to the table body
        tbody.appendChild(tr);
    }
}
