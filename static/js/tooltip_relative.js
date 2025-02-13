const tooltip = document.getElementById("tooltip");

function updateTooltip(event) {
    const { offsetX, offsetY, pageX, pageY } = event;
    const parentWidth = event.currentTarget.clientWidth;

    const xPercent = ((offsetX / parentWidth) * 100).toFixed(1);
    const yPercent = ((offsetY / parentWidth) * 100).toFixed(1);

    tooltip.style.display = "block";
    tooltip.style.left = `${pageX + 10}px`;
    tooltip.style.top = `${pageY + 10}px`;
    tooltip.textContent = `${xPercent}% : ${yPercent}%`;
}

document.querySelectorAll("svg").forEach(svg => {
    svg.addEventListener("mousemove", updateTooltip);
    svg.addEventListener("mouseleave", () => {
        tooltip.style.display = "none";
    });
});
