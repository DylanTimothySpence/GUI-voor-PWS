// Get viewport width minus scrollbar
const viewportWidth = document.documentElement.clientWidth;

// Set the width of #submit
document.getElementById('submit').style.width = viewportWidth + 'px';

// If you need it to update when window resizes:
window.addEventListener('resize', () => {
    const viewportWidth = document.documentElement.clientWidth;
    document.getElementById('submit').style.width = viewportWidth + 'px';
});