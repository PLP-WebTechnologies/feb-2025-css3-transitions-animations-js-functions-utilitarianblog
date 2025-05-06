// Function to save preference to localStorage
function savePreference(key, value) {
  localStorage.setItem(key, value);
}

// Function to retrieve preference from localStorage
function getPreference(key) {
  return localStorage.getItem(key);
}

// Set button color based on preference
function applyUserPreference() {
  const btn = document.getElementById('animateBtn');
  const storedColor = getPreference('buttonColor');
  if (storedColor) {
    btn.style.backgroundColor = storedColor;
  }
}

// Animation trigger
function triggerAnimation() {
  const btn = document.getElementById('animateBtn');
  btn.classList.remove('bounce'); // Reset the animation
  void btn.offsetWidth; // Reflow to restart animation
  btn.classList.add('bounce');
}

// Setup event listeners
document.addEventListener('DOMContentLoaded', () => {
  const select = document.getElementById('colorPreference');
  const btn = document.getElementById('animateBtn');

  // Apply stored preference on load
  applyUserPreference();

  // Save selected color and apply it
  select.addEventListener('change', () => {
    const color = select.value;
    savePreference('buttonColor', color);
    btn.style.backgroundColor = color;
  });

  // Animate button on click
  btn.addEventListener('click', () => {
    triggerAnimation();
  });
});
