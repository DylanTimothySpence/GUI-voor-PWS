const viewportWidth = document.documentElement.clientWidth;
document.getElementById('submit').style.width = viewportWidth + 'px';
window.addEventListener('resize', () => {
    const viewportWidth = document.documentElement.clientWidth;
    document.getElementById('submit').style.width = viewportWidth + 'px';
});