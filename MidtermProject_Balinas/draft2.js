// Function to show the selected section
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active');

    // Update active nav link
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
        }
    });
}

// Home Carousel functionality
let currentImage = 0;
const images = document.querySelectorAll('.carousel-image');
const dots = document.querySelectorAll('.dot');

function updateCarousel() {
    images.forEach(img => img.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    images[currentImage].classList.add('active');
    dots[currentImage].classList.add('active');
}

function rotateCarousel() {
    currentImage = (currentImage + 1) % images.length;
    updateCarousel();
}

function setCarouselImage(index) {
    currentImage = index;
    updateCarousel();
    clearInterval(carouselInterval);
    carouselInterval = setInterval(rotateCarousel, 3000);
}

let carouselInterval = setInterval(rotateCarousel, 3000);
updateCarousel();

// Activity Carousel functionality for SmartFare
let currentSmartFareImage = 0;
const smartFareImages = document.querySelectorAll('#smartfare-carousel .activity-carousel-image');
const smartFareDots = document.querySelectorAll('#smartfare-carousel .activity-dots .dot');

function updateSmartFareCarousel() {
    smartFareImages.forEach(img => img.classList.remove('active'));
    smartFareDots.forEach(dot => dot.classList.remove('active'));
    smartFareImages[currentSmartFareImage].classList.add('active');
    smartFareDots[currentSmartFareImage].classList.add('active');
}

function rotateSmartFareCarousel() {
    currentSmartFareImage = (currentSmartFareImage + 1) % smartFareImages.length;
    updateSmartFareCarousel();
}

function setSmartFareCarouselImage(index) {
    currentSmartFareImage = index;
    updateSmartFareCarousel();
    clearInterval(smartFareCarouselInterval);
    smartFareCarouselInterval = setInterval(rotateSmartFareCarousel, 3000);
}

let smartFareCarouselInterval = setInterval(rotateSmartFareCarousel, 3000);
updateSmartFareCarousel();

// Activity Carousel functionality for CodeFest
let currentCodeFestImage = 0;
const codeFestImages = document.querySelectorAll('#codefest-carousel .activity-carousel-image');
const codeFestDots = document.querySelectorAll('#codefest-carousel .activity-dots .dot');

function updateCodeFestCarousel() {
    codeFestImages.forEach(img => img.classList.remove('active'));
    codeFestDots.forEach(dot => dot.classList.remove('active'));
    codeFestImages[currentCodeFestImage].classList.add('active');
    codeFestDots[currentCodeFestImage].classList.add('active');
}

function rotateCodeFestCarousel() {
    currentCodeFestImage = (currentCodeFestImage + 1) % codeFestImages.length;
    updateCodeFestCarousel();
}

function setCodeFestCarouselImage(index) {
    currentCodeFestImage = index;
    updateCodeFestCarousel();
    clearInterval(codeFestCarouselInterval);
    codeFestCarouselInterval = setInterval(rotateCodeFestCarousel, 3000);
}

let codeFestCarouselInterval = setInterval(rotateCodeFestCarousel, 3000);
updateCodeFestCarousel();

// Close window function
function closeWindow() {
    self.close();
}

// Navigate back to Home section
function goToHome() {
    showSection('home');
}

// 1. Temperature Converter
// °F = (°C × 9/5) + 32. 
function convertTemperature() {
    let celsius = parseFloat(prompt("Enter temperature in Celsius:"));
    if (!isNaN(celsius)) {
        let fahrenheit = (celsius * 9 / 5) + 32;
        alert(`${celsius}°C is ${fahrenheit.toFixed(2)}°F`);
    } else {
        alert("Please enter a valid number.");
    }
}


// 2. Longer Word
function longerWord() {
    let word1 = prompt("Enter the First Word: ");
    let word2 = prompt("Enter the Second Word: ");
    if (word1.length === word2.length) {
        alert("The words are equal in length.");
    } else if (word1.length > word2.length) {
        alert("The longer word is " + word1);
    } else {
        alert("The longer word is " + word2);
    }
}

// 3. Know My Birthstone
function birthstone() {
    let birthMonth = prompt("Enter your birth month: ").toLowerCase().trim();
    switch (birthMonth) {
        case "january": alert("Garnet"); break;
        case "february": alert("Amethyst"); break;
        case "march": alert("Aquamarine"); break;
        case "april": alert("Diamond"); break;
        case "may": alert("Emerald"); break;
        case "june": alert("Alexandrite & Pearl"); break;
        case "july": alert("Ruby"); break;
        case "august": alert("Peridot"); break;
        case "september": alert("Sapphire"); break;
        case "october": alert("Opal & Tourmaline"); break;
        case "november": alert("Citrine & Topaz"); break;
        case "december": alert("Blue Zircon, Turquoise, & Tanzanite"); break;
        default: alert("Invalid month. Please enter a valid month.");
    }
}

// 4. Basic Operators
function basicOperators() {
    let choice = prompt("Choose Operator: \n(/) Division \n(*) Multiplication \n(+) Addition \n(-) Subtraction");
    let num1 = parseFloat(prompt("Enter num1: "));
    let num2 = parseFloat(prompt("Enter num2: "));
    
    if (isNaN(num1) || isNaN(num2)) {
        alert("Invalid numbers!");
        return;
    }

    switch (choice) {
        case '*': alert(`Product: ${num1 * num2}`); break;
        case '/': 
            if (num2 === 0) {
                alert("Cannot divide by zero!");
            } else {
                alert(`Quotient: ${(num1 / num2).toFixed(2)}`);
            }
            break;
        case '+': alert(`Sum: ${num1 + num2}`); break;
        case '-': alert(`Difference: ${num1 - num2}`); break;
        default: alert("Invalid Input!");
    }
}

// 5. Compute for Acceleration
function computeAcceleration() {
    let initialVelocity = parseFloat(prompt("Enter the initial velocity (m/s):"));
    let finalVelocity = parseFloat(prompt("Enter the final velocity (m/s):"));
    let changeInTime = parseFloat(prompt("Enter the change in time (seconds):"));

    if (isNaN(initialVelocity) || isNaN(finalVelocity) || isNaN(changeInTime) || changeInTime === 0) {
        alert("Please enter valid numbers and make sure time is not zero.");
    } else {
        let acceleration = (finalVelocity - initialVelocity) / changeInTime;
        alert(`The acceleration is: ${acceleration.toFixed(2)} m/s²`);
    }
}

// Like button functionality
function reactHeart(button) {
    if (button.classList.contains('liked')) {
        button.classList.remove('liked');
        button.textContent = '🤍 Like';
    } else {
        button.classList.add('liked');
        button.textContent = '❤️ Liked';
    }
}

// Post comment functionality
function postComment(commentId) {
    const textarea = document.getElementById(commentId);
    const commentText = textarea.value.trim();
    if (commentText) {
        const commentsList = document.getElementById(`comments-${commentId}`);
        const commentElement = document.createElement('p');
        commentElement.textContent = commentText;
        commentsList.appendChild(commentElement);
        textarea.value = '';
    } else {
        alert('Please enter a comment before posting.');
    }
}

// Expand image in modal
function expandImage(imageSrc) {
    const modal = document.getElementById('image-modal');
    const expandedImage = document.getElementById('expanded-image');
    expandedImage.src = imageSrc;
    modal.style.display = 'flex';
}

// Close the image modal
function closeModal() {
    const modal = document.getElementById('image-modal');
    modal.style.display = 'none';
}

// Toggle comments visibility
function toggleComments(commentId) {
    const commentsList = document.getElementById(`comments-${commentId}`);
    const button = document.querySelector(`button[onclick="toggleComments('${commentId}')"]`);
    const card = commentsList.closest('.card');

    if (button.getAttribute('data-state') === 'collapsed') {
        commentsList.classList.remove('hidden');
        button.setAttribute('data-state', 'expanded');
        button.textContent = 'Hide Comments';
        card.style.minHeight = `${card.scrollHeight}px`;
    } else {
        commentsList.classList.add('hidden');
        button.setAttribute('data-state', 'collapsed');
        button.textContent = 'See Comments';
        card.style.minHeight = '450px';
    }
}

// Toggle details content in Activity section
function toggleContent(button, wrapperId) {
    const wrapper = document.getElementById(wrapperId);
    if (wrapper.classList.contains('expanded')) {
        wrapper.classList.remove('expanded');
        button.textContent = 'See more';
    } else {
        wrapper.classList.add('expanded');
        button.textContent = 'See less';
    }
}

// Show quote dialogue box
function showQuote() {
    const modal = document.getElementById("quoteModal");
    if (modal) {
        modal.style.display = "flex";
    }
}

// Close quote dialogue box
function closeQuoteModal() {
    const modal = document.getElementById("quoteModal");
    if (modal) {
        modal.style.display = "none";
    }
}

// Close modals if user clicks outside the box
window.onclick = function(event) {
    const quoteModal = document.getElementById("quoteModal");
    const imageModal = document.getElementById("image-modal");
    if (event.target === quoteModal) {
        quoteModal.style.display = "none";
    }
    if (event.target === imageModal) {
        imageModal.style.display = "none";
    }
}

// Show the home section by default
showSection('home');

// Add event listeners to nav links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('href').substring(1);
        showSection(sectionId);
    });
});