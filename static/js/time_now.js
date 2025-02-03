const useNowCheckbox = document.getElementById('useNow');
const timeInput = document.getElementById('time');
let intervalId;

const updateTime = () => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  timeInput.value = `${hours}:${minutes}:${seconds}`;
};

useNowCheckbox.addEventListener('change', () => {
  if (useNowCheckbox.checked) {
    updateTime();
    intervalId = setInterval(updateTime, 1000);
    timeInput.classList.add('disabled-look');
    timeInput.readOnly = true;
  } else {
    clearInterval(intervalId);
    timeInput.classList.remove('disabled-look');
    timeInput.readOnly = false;
  }
});