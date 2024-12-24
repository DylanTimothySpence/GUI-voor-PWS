console.log(route)
console.log(graph)

nodes = [
    { id: 0, x: null, y: null, z: 0 },
    { id: 1, x: null, y: null, z: 0 },
    { id: 2, x: null, y: null, z: 0 },
    { id: 3, x: null, y: null, z: 0 },
    { id: 4, x: null, y: null, z: 0 },
    { id: 5, x: null, y: null, z: 1 },
    { id: 6, x: null, y: null, z: 1 },
    { id: 7, x: null, y: null, z: 1 },
    { id: 8, x: null, y: null, z: 1 },
    { id: 9, x: null, y: null, z: 1 },
    { id: 10, x: null, y: null, z: 1 },
    { id: 11, x: null, y: null, z: 2 },
    { id: 12, x: null, y: null, z: 2 },
    { id: 13, x: null, y: null, z: 2 },
    { id: 14, x: null, y: null, z: 2 },
]

const routeFloors = new Set(route.map(id => nodes.find(node => node.id === id)?.z));

console.log(routeFloors)
// Make SVGs visible if they are part of the route
document.querySelectorAll("svg").forEach(svg => {
    const floor = parseInt(svg.id.split('_')[1], 10); // Extract floor number from id
    if (routeFloors.has(floor)) {
        svg.style.display = "block"; // Show SVG if in routeFloors
    }
});    
