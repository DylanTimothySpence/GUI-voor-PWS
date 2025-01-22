const useNowCheckbox = document.getElementById('useNow');
const timeInput = document.getElementById('time');
let intervalId;

// Function to update the time input to the current time
const updateTime = () => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  timeInput.value = `${hours}:${minutes}:${seconds}`;
};

// Event listener for the "Use Now" checkbox
useNowCheckbox.addEventListener('change', () => {
  if (useNowCheckbox.checked) {
    updateTime(); // Set the initial time immediately
    intervalId = setInterval(updateTime, 1000); // Update every second
    timeInput.classList.add('disabled-look'); // Add the "disabled" look
    timeInput.readOnly = true; // Prevent manual editing
  } else {
    clearInterval(intervalId); // Stop the interval
    timeInput.classList.remove('disabled-look'); // Remove the "disabled" look
    timeInput.readOnly = false; // Allow manual editing
  }
});