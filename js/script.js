// Function to show modal
function showModal() {
    const modal = document.getElementById('nameModal');
    modal.style.display = 'flex'; // Show modal
}

// Function to save name and update greeting
function saveName() {
    const userName = document.getElementById('user-name-input').value;
    if (userName.trim() === '') {
        alert('Please enter your name!');
        return;
    }

    // Update greeting text
    document.getElementById('user-greeting').textContent = userName;

    // Hide modal
    const modal = document.getElementById('nameModal');
    modal.style.display = 'none';
}

// Show modal when page loads
window.onload = showModal;

// Attach event listener to save button
document.getElementById('save-name-btn').addEventListener('click', saveName);

// Function to validate form and display result
function formValidation() {
    // Get input values
    const name = document.getElementById('name-input').value;
    const email = document.getElementById('email-input').value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value; // Get checked gender
    const birthdate = document.getElementById('birthdate-input').value;
    const message = document.getElementById('message-input').value;

    // Simple validation
    if (!name || !email || !gender || !birthdate || !message) {
        alert('Please fill out all fields!');
        return;
    }

    // Display results in the result form
    document.getElementById('result-name').textContent = name;
    document.getElementById('result-email').textContent = email;
    document.getElementById('result-gender').textContent = gender;
    document.getElementById('result-birthdate').textContent = birthdate;
    document.getElementById('result-message').textContent = message;
}

// Attach event listener to the submit button
document.getElementById('submit-btn').addEventListener('click', formValidation);

let indexBanner = 0;

changeBackground();

function nextBanner() {
    indexBanner = indexBanner + 1;
    changeBackground();
}

// Function to change background banner
function changeBackground() {
    let bannerList = document.getElementsByClassName('banner-image');

    if (indexBanner > bannerList.length - 1) {
        // Reset indexBanner
        indexBanner = 0;
    }

    // Looping to change background
    for (let i = 0; i < bannerList.length; i++) {
        bannerList[i].style.display = 'none';
    }

    bannerList[indexBanner].style.display = 'block';
}

setInterval(nextBanner, 3000);