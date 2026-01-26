document.getElementById('complaintForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const natureSelected = document.querySelector('input[name="nature"]:checked');
    
    if (!natureSelected) {
        alert("Please select the nature of your complaint.");
        return;
    }
    alert("Form submitted successfully! Thank you.");
    this.reset();
});