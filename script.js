document.getElementById('complaintForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const natureSelected = document.querySelector('input[name="nature"]:checked');
    if (!natureSelected) {
        alert("Please select the nature of your complaint.");
        return;
    }
    const firstName = document.getElementById('fName').value;
    const lastName = document.getElementById('lName').value;
    const empID = document.getElementById('eID').value;
    const department = document.getElementById('dept').value;
    const position = document.getElementById('pos').value;
    const date = document.getElementById('iDate').value;
    const nature = natureSelected.value;
    const description = document.getElementById('iDesc').value;
    const tableBody = document.querySelector('#recordTable tbody');
    const newRow = tableBody.insertRow();
    newRow.innerHTML = `
        <td>${firstName} ${lastName}</td>
        <td>${empID}</td>
        <td>${department} / ${position}</td>
        <td>${date}</td>
        <td>${nature}</td>
        <td>${description}</td>
    `;
    alert("Data recorded successfully!");
    this.reset();
});