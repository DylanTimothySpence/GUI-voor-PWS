console.log("route:")
console.log(route) //these are filled by flask
console.log("graph:")
console.log(graph) //these are filled by flask

node_coordinates = [
    { id: 0, x: 406, y: 138, z: 0 },
    { id: 1, x: 323, y: 141, z: 0 },
    { id: 2, x: 178, y: 69, z: 0 },
    { id: 3, x: 169, y: 232, z: 0 },
    { id: 4, x: 42, y: 251, z: 0 },
    { id: 5, x: 44, y: 251, z: 1 },
    { id: 6, x: 188, y: 219, z: 1 },
    { id: 7, x: 410, y: 192, z: 1 },
    { id: 8, x: 366, y: 72, z: 1 },
    { id: 9, x: 185, y: 75, z: 1 },
    { id: 10, x: 456, y: 30, z: 1 },
    { id: 11, x: 460, y: 32, z: 2 },
    { id: 12, x: 417, y: 165, z: 2 },
    { id: 13, x: 193, y: 227, z: 2 },
    { id: 14, x: 156, y: 71, z: 2 },
]

const routeFloors = new Set(route.map(id => node_coordinates.find(node => node.id === id)?.z));

console.log("routeFloors:")
console.log(routeFloors)
// Make SVGs visible if they are part of the route
document.querySelectorAll("svg").forEach(svg => {
    const floor = parseInt(svg.id.split('_')[1], 10); // Extract floor number from id
    if (routeFloors.has(floor)) {
        svg.style.display = "block"; // Show SVG if in routeFloors
    }
});    

// ------------------

// Initialize nodes and links arrays
const nodes = [];
const links = [];

// Create nodes based on the keys in the graph
for (const id in graph) {
    nodes.push({ id: +id });
}

// Create links based on the adjacency list
for (const [source, targets] of Object.entries(graph)) {
    targets.forEach(([target, weight]) => {
        links.push({
            source: +source, // Convert to number
            target,          // Already a number
            weight           // Edge weight
        });
    });
}

// Log the resulting structure for verification
console.log("nodes:")
console.log(nodes);
console.log("links:")
console.log(links)

const color_stair_on_route = 'red';
const color_stair_off_route = 'blue';
const color_flat_on_route = 'red';
const color_flat_off_route = 'blue';
const color_node_on_route = 'red';
const color_node_off_route = 'blue';
const color_endnode = 'red';
const color_endnode_edge = "darkred"
const color_startnode = 'red'
const color_startnode_edge = "black"

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Draw the network for each floor
node_coordinates.forEach(node => {
    const floor = node.z;
    const svg = d3.select(`#svg_${floor}`); // Select the corresponding SVG

    // Skip if SVG doesn't exist
    if (svg.empty()) {
        console.warn(`SVG for floor ${floor} not found.`);
        return;
    }

    // Filter nodes and links for the current floor
    const floorNodes = node_coordinates.filter(n => n.z === floor);
    const floorLinks = links.filter(link => {
        const sourceNode = node_coordinates.find(n => n.id === link.source);
        const targetNode = node_coordinates.find(n => n.id === link.target);
        return sourceNode?.z === floor && targetNode?.z === floor;
    });

    // Draw links
    svg.selectAll("line")
        .data(floorLinks)
        .join("line")
        .attr("x1", d => node_coordinates.find(n => n.id === d.source)?.x)
        .attr("y1", d => node_coordinates.find(n => n.id === d.source)?.y)
        .attr("x2", d => node_coordinates.find(n => n.id === d.target)?.x)
        .attr("y2", d => node_coordinates.find(n => n.id === d.target)?.y)
        .attr("stroke", d => {
            const sourceNode = node_coordinates.find(n => n.id === d.source);
            const targetNode = node_coordinates.find(n => n.id === d.target);
            if (route.includes(d.source) && route.includes(d.target)) {
                return sourceNode.z === targetNode.z ? color_flat_on_route : color_stair_on_route;
            }
            return sourceNode.z === targetNode.z ? color_flat_off_route : color_stair_off_route;
        })
        .attr("stroke-width", 2);

    // Draw nodes
    svg.selectAll("circle")
        .data(floorNodes)
        .join("circle")
        .attr("cx", d => d.x)
        .attr("cy", d => d.y)
        .attr("r", 5)
        .attr("fill", d => route.includes(d.id) ? color_node_on_route : color_node_off_route)
        .attr("stroke", d => route.includes(d.id) ? color_node_on_route : color_node_off_route)
        .attr("stroke-width", 2)
        .on("click", d => {
            console.log(`Node clicked: ${d.id}`);
        });

    // Add labels for node IDs
    svg.selectAll("text")
        .data(floorNodes)
        .join("text")
        .attr("x", d => d.x + 10)
        .attr("y", d => d.y + 5)
        .text(d => d.id)
        .attr("font-size", "12px")
        .attr("fill", "black");
});

// Chat GPT code snippet that adds destination mark for endnode:

// Add a red destination pin marker to the last node of the route
const lastNodeId = route[route.length - 1];
const firstNodeId = route[0]

// Select the floor where the last node is located
node_coordinates.forEach(node => {
    const floor = node.z;
    const svg = d3.select(`#svg_${floor}`); // Select the corresponding SVG

    // Skip if SVG doesn't exist
    if (svg.empty()) {
        console.warn(`SVG for floor ${floor} not found.`);
        return;
    }

    // If this is the floor where the last node is located, add the destination pin
    if (node.id === lastNodeId) {
        svg.append("circle")
            .attr("cx", node.x)  // Position it at the node's x coordinate
            .attr("cy", node.y)  // Position it above the triangle part
            .attr("r", 12)       // Larger radius for a more rounded top
            .attr("fill", color_endnode) // Red color for the pin's top
            .attr("stroke", color_endnode_edge) // Darker stroke color for the pin's top
            .attr("stroke-width", 2);
    }

    if (node.id === firstNodeId) {

        // Add the circular top part of the pin
        svg.append("circle")
            .attr("cx", node.x)  // Position it at the node's x coordinate
            .attr("cy", node.y)  // Position it above the triangle part
            .attr("r", 12)       // Larger radius for a more rounded top
            .attr("fill", color_startnode) // Red color for the pin's top
            .attr("stroke", color_startnode_edge) // Darker stroke color for the pin's top
            .attr("stroke-width", 2);
    }
});

//chatGPT code snippet to add triangles for the stairs

// Initialize arrays to store the nodes where the user must go up or down
const nodesGoingUp = [];
const nodesGoingDown = [];

// First, iterate through the route and compare z values of adjacent nodes to categorize them
for (let i = 0; i < route.length - 1; i++) {
    const currentNode = node_coordinates.find(n => n.id === route[i]);
    const nextNode = node_coordinates.find(n => n.id === route[i + 1]);

    // If the next node has a higher z value (going up)
    if (nextNode && nextNode.z > currentNode.z) {
        nodesGoingUp.push(currentNode);
    }
    // If the next node has a lower z value (going down)
    else if (nextNode && nextNode.z < currentNode.z) {
        nodesGoingDown.push(currentNode);
    }
}

// Log the nodes where you must go up and down
console.log("Nodes where you must go up:");
console.log(nodesGoingUp);

console.log("Nodes where you must go down:");
console.log(nodesGoingDown);

// After categorizing the nodes, now draw the triangles
// Add an upward triangle for nodes where you must go down
nodesGoingDown.forEach(node => {
    const svg = d3.select(`#svg_${node.z}`);
    if (!svg.empty()) {
        svg.append("polygon")
            .attr("points", `${node.x},${node.y} ${node.x - 10},${node.y - 10} ${node.x + 10},${node.y - 10}`)
            .attr("fill", "black") // Change color as needed
            .attr("stroke", "black")
            .attr("stroke-width", 1);
    }
});

// Add a downward triangle for nodes where you must go up
nodesGoingUp.forEach(node => {
    const svg = d3.select(`#svg_${node.z}`);
    if (!svg.empty()) {
        svg.append("polygon")
            .attr("points", `${node.x},${node.y} ${node.x - 10},${node.y + 10} ${node.x + 10},${node.y + 10}`)
            .attr("fill", "black") // Change color as needed
            .attr("stroke", "black")
            .attr("stroke-width", 1);
    }
});
