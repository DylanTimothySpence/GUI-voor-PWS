const tooltip = document.getElementById("tooltip");

// Function to update tooltip position and content
function updateTooltip(event) {
    const { offsetX, offsetY, pageX, pageY } = event;
    tooltip.style.display = "block";
    tooltip.style.left = `${pageX + 10}px`;
    tooltip.style.top = `${pageY + 10}px`;
    tooltip.textContent = `x: ${offsetX}, y: ${offsetY}`;
}

// Add event listeners to all visible SVG elements
document.querySelectorAll("svg").forEach(svg => {
    svg.addEventListener("mousemove", updateTooltip);
    svg.addEventListener("mouseleave", () => {
        tooltip.style.display = "none";
    });
});