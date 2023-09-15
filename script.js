//your JS code here. If required.
// Get references to the div and <h1> elements
const sizeInfoDiv = document.getElementById('sizeInfo');
const sizeHeading = sizeInfoDiv.querySelector('h1');

// Function to update the size information
function updateSizeInfo() {
  // Get the window's width and height
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  // Update the content of the <h1> tag
  sizeHeading.textContent = `Width: ${windowWidth} and Height: ${windowHeight}`;
}

// Add an event listener for the "resize" event on the window
window.addEventListener('resize', updateSizeInfo);

// Initial update of size information
updateSizeInfo();
