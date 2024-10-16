// Array of file paths to your images
const images = [
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    'images/4.jpg',
    'images/5.jpg',
    'images/6.jpg'
];

// Function to select a random image
function setRandomBackground() {
    const randomImage = images[Math.floor(Math.random() * images.length)];
    document.body.style.backgroundImage = `url('${randomImage}')`;
}

// Set the random background image on page load
window.onload = setRandomBackground;
