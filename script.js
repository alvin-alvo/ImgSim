// Function to trigger file upload when clicking on the upload box
function triggerUpload(inputId) {
    document.getElementById(inputId).click();
}

// Preview the uploaded image
function previewImage(event, previewId) {
    const reader = new FileReader();
    reader.onload = function() {
        const output = document.getElementById(previewId);
        output.src = reader.result;
        output.hidden = false;
    };
    reader.readAsDataURL(event.target.files[0]);
}

// Populate accuracy dropdown
function populateAccuracyDropdown() {
    const dropdown = document.getElementById('accuracy');
    for (let i = 5; i <= 50; i += 5) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = `${i}%`;
        dropdown.appendChild(option);
    }
}

// Initialize dropdown on page load
window.onload = populateAccuracyDropdown;
