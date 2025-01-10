console.log("route:")
console.log(route) //these are filled by flask
console.log("graph:")
console.log(graph) //these are filled by flask

//list of relative node coordiantes (relative to parentWidth)
const node_coordinates = [
    //kelder
    { id: 0, x: 28, y: 9, z: -1 },
    { id: 1, x: 28, y: 14, z: -1 },
    { id: 2, x: 35.5, y: 22, z: -1 },
    { id: 3, x: 38.5, y: 28, z: -1 },
    { id: 4, x: 22, y: 45, z: -1 },
    //begane grond
    { id: 5, x: 36, y: 28, z: 0 },
    { id: 6, x: 42, y: 27, z: 0 },
    { id: 7, x: 30.5, y: 30, z: 0 },
    { id: 8, x: 52, y: 24, z: 0 },
    { id: 9, x: 61, y: 22, z: 0 },
    { id: 10, x: 77, y: 20, z: 0 },
    { id: 11, x: 88, y: 17, z: 0 },
    { id: 12, x: 83, y: 8.5, z: 0 },
    { id: 13, x: 57.5, y: 8.5, z: 0 },
    { id: 14, x: 42, y: 9, z: 0 },
    { id: 15, x: 17.5, y: 9, z: 0 },
    { id: 16, x: 17.5, y: 13.5, z: 0 },
    { id: 17, x: 18, y: 19.5, z: 0 },
    { id: 18, x: 18.5, y: 26, z: 0 },
    { id: 19, x: 10, y: 19.5, z: 0 },
    { id: 20, x: 1, y: 9, z: 0 },
    { id: 21, x: 1, y: 40.5, z: 0 },
    { id: 22, x: 14.5, y: 35.5, z: 0 },
    { id: 23, x: 23, y: 40, z: 0 },
    { id: 24, x: 21.5, y: 32, z: 0 },
    { id: 25, x: 34, y: 38, z: 0 },
    { id: 26, x: 37.5, y: 37.5, z: 0 },
    { id: 27, x: 42.5, y: 40, z: 0 },
    { id: 28, x: 62, y: 42, z: 0 },
    { id: 29, x: 52, y: 47.5, z: 0 },
    { id: 30, x: 71.5, y: 42, z: 0 },
    { id: 31, x: 78, y: 42, z: 0 },
    { id: 32, x: 88, y: 43, z: 0 },
    { id: 33, x: 78.5, y: 30.5, z: 0 },
    { id: 34, x: 61, y: 31, z: 0 },
    { id: 35, x: 42.5, y: 33, z: 0 },
    { id: 36, x: 30.5, y: 46, z: 0 },
    { id: 37, x: 22, y: 45, z: 0 },
    //verdieping 1
    { id: 38, x: 21.6, y: 45, z: 1 },
    { id: 39, x: 14.5, y: 48, z: 1 },
    { id: 40, x: 14.5, y: 34.5, z: 1 },
    { id: 41, x: 19, y: 34.5, z: 1 },
    { id: 42, x: 21.5, y: 39, z: 1 },
    { id: 43, x: 26, y: 38.5, z: 1 },
    { id: 44, x: 34, y: 45, z: 1 },
    { id: 45, x: 43, y: 41, z: 1 },
    { id: 46, x: 52, y: 46, z: 1 },
    { id: 47, x: 61, y: 39, z: 1 },
    { id: 48, x: 71, y: 39, z: 1 },
    { id: 49, x: 77, y: 39, z: 1 },
    { id: 50, x: 77, y: 44.5, z: 1 },
    { id: 51, x: 83, y: 38, z: 1 },
    { id: 52, x: 89, y: 38, z: 1 },
    { id: 53, x: 83, y: 33, z: 1 },
    { id: 54, x: 72, y: 9, z: 1 },
    { id: 55, x: 66.5, y: 10, z: 1 },
    { id: 56, x: 68, y: 13.5, z: 1 },
    { id: 57, x: 65, y: 7, z: 1 },
    { id: 58, x: 52, y: 10.5, z: 1 },
    { id: 59, x: 52.5, y: 6, z: 1 },
    { id: 60, x: 51.5, y: 15.5, z: 1 },
    { id: 61, x: 39.5, y: 6, z: 1 },
    { id: 62, x: 27, y: 10, z: 1 },
    { id: 63, x: 19, y: 10, z: 1 },
    { id: 64, x: 16, y: 6, z: 1 },
    { id: 65, x: 11, y: 6, z: 1 },
    { id: 66, x: 19, y: 18, z: 1 },
    { id: 67, x: 13, y: 18, z: 1 },
    { id: 68, x: 13, y: 27, z: 1 },
    { id: 69, x: 19, y: 27, z: 1 },
    { id: 70, x: 42, y: 11, z: 1 },
    //verdieping 2
    { id: 71, x: 36, y: 9.5, z: 2 },
    { id: 72, x: 27, y: 9.5, z: 2 },
    { id: 73, x: 21, y: 9.5, z: 2 },
    { id: 74, x: 12, y: 9.5, z: 2 },
    { id: 75, x: 12, y: 22, z: 2 },
    { id: 76, x: 15, y: 22, z: 2 },
    { id: 77, x: 15, y: 38, z: 2 },
    { id: 78, x: 21.5, y: 40, z: 2 },
    { id: 79, x: 15, y: 48, z: 2 },
    { id: 80, x: 21.5, y: 45, z: 2 },
    { id: 81, x: 30.5, y: 47.5, z: 2 },
    { id: 82, x: 36, y: 47.5, z: 2 },
    { id: 83, x: 36, y: 44, z: 2 },
    { id: 84, x: 36, y: 38.5, z: 2 },
    { id: 85, x: 41, y: 38.5, z: 2 },
    { id: 86, x: 49, y: 38, z: 2 },
    { id: 87, x: 48.5, y: 31, z: 2 },
    { id: 88, x: 60, y: 39, z: 2 },
    { id: 89, x: 71, y: 39, z: 2 },
    { id: 90, x: 77, y: 39, z: 2 },
    { id: 91, x: 77, y: 44, z: 2 },
    { id: 92, x: 89, y: 38, z: 2 },
    { id: 93, x: 58, y: 5, z: 2 },
    //verdieping 3
    { id: 94, x: 63, y: 24, z: 3 },
    { id: 95, x: 74, y: 23, z: 3 },
    { id: 96, x: 81, y: 24, z: 3 },
    { id: 97, x: 78, y: 13.5, z: 3 },
    { id: 98, x: 78, y: 33, z: 3 },
    { id: 99, x: 84, y: 37, z: 3 },
    { id: 100, x: 88, y: 37, z: 3 },
    { id: 101, x: 77, y: 40, z: 3 },
    { id: 102, x: 77, y: 44, z: 3 },
    { id: 103, x: 72, y: 41, z: 3 },
    { id: 104, x: 60, y: 40, z: 3 },
    { id: 105, x: 48, y: 39, z: 3 },
    { id: 106, x: 46, y: 34.5, z: 3 },
    { id: 107, x: 42, y: 40, z: 3 },
    { id: 108, x: 36, y: 44, z: 3 },
    { id: 109, x: 36, y: 47, z: 3 },
    { id: 110, x: 30, y: 47, z: 3 },
    { id: 111, x: 22, y: 45, z: 3 },
    { id: 112, x: 15, y: 48, z: 3 },
    { id: 113, x: 17, y: 38, z: 3 },
    { id: 114, x: 16, y: 34, z: 3 },
    { id: 115, x: 10, y: 35, z: 3 },
    { id: 116, x: 11, y: 13, z: 3 },
    { id: 117, x: 28, y: 12, z: 3 },
    { id: 118, x: 28, y: 9, z: 3 },
    { id: 119, x: 35, y: 9, z: 3 },
    { id: 120, x: 40, y: 11, z: 3 },
    { id: 121, x: 47, y: 13, z: 3 },
    { id: 122, x: 53, y: 11, z: 3 },
    { id: 123, x: 53, y: 14, z: 3 },
    { id: 124, x: 53, y: 18, z: 3 },
    { id: 125, x: 47, y: 20, z: 3 },
    { id: 126, x: 53, y: 22, z: 3 },
    { id: 127, x: 47, y: 26, z: 3 },
    { id: 128, x: 55, y: 30, z: 3 },
    { id: 129, x: 52, y: 30, z: 3 },
    { id: 130, x: 40, y: 6, z: 3 },
    { id: 131, x: 53, y: 26, z: 3 },
    //verdieping 4
    { id: 132, x: 81, y: 24, z: 4 },
    { id: 133, x: 82, y: 41, z: 4 },
    { id: 134, x: 74, y: 44, z: 4 },
    { id: 135, x: 59, y: 40, z: 4 },
    { id: 136, x: 59, y: 33, z: 4 },
    { id: 137, x: 48, y: 33, z: 4 },
    { id: 138, x: 48, y: 40, z: 4 },
    { id: 139, x: 48, y: 47, z: 4 },
    { id: 140, x: 43, y: 43, z: 4 },
    { id: 141, x: 43, y: 37, z: 4 },
    { id: 142, x: 34, y: 43, z: 4 },
    { id: 143, x: 31, y: 45, z: 4 },
    { id: 144, x: 22, y: 47, z: 4 },
    { id: 145, x: 15, y: 47, z: 4 },
    { id: 146, x: 29, y: 33, z: 4 },
    { id: 147, x: 28, y: 17, z: 4 },
    { id: 148, x: 35, y: 10, z: 4 },
    { id: 149, x: 40, y: 10, z: 4 },
    { id: 150, x: 40, y: 6, z: 4 },
    { id: 151, x: 48, y: 6, z: 4 },
    { id: 152, x: 48, y: 11, z: 4 },
    { id: 153, x: 48, y: 16, z: 4 },
    { id: 154, x: 55, y: 16, z: 4 },
    { id: 155, x: 48, y: 22, z: 4 },
    { id: 156, x: 53, y: 22, z: 4 },
    //overig
    { id: 157, x: 53, y: 33, z: 2 },
    { id: 158, x: 49, y: 35, z: 2 },
  ];

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

function scaleCoordinate(value, parentWidth) {
    return (value * parentWidth) / 100;
}


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

    const parentWidth = svg.node().clientWidth; // Calculate parent width once for this SVG
    console.log("parentWidth: " + parentWidth)

    strokeWidth = parentWidth / 300
    r = strokeWidth * 2
    r_startnode = r * 2
    r_endnode = r * 2

    // Draw links
    svg.selectAll("line")
        .data(floorLinks)
        .join("line")
        .attr("x1", d => scaleCoordinate(node_coordinates.find(n => n.id === d.source)?.x, parentWidth))
        .attr("y1", d => scaleCoordinate(node_coordinates.find(n => n.id === d.source)?.y, parentWidth))
        .attr("x2", d => scaleCoordinate(node_coordinates.find(n => n.id === d.target)?.x, parentWidth))
        .attr("y2", d => scaleCoordinate(node_coordinates.find(n => n.id === d.target)?.y, parentWidth))
        .attr("stroke", d => {
            const sourceNode = node_coordinates.find(n => n.id === d.source);
            const targetNode = node_coordinates.find(n => n.id === d.target);
            if (route.includes(d.source) && route.includes(d.target)) {
                return sourceNode.z === targetNode.z ? color_flat_on_route : color_stair_on_route;
            }
            return sourceNode.z === targetNode.z ? color_flat_off_route : color_stair_off_route;
        })
        .attr("stroke-width", strokeWidth);

    // Draw nodes
    svg.selectAll("circle")
        .data(floorNodes)
        .join("circle")
        .attr("cx", d => scaleCoordinate(d.x, parentWidth))
        .attr("cy", d => scaleCoordinate(d.y, parentWidth))
        .attr("r", r)
        .attr("fill", d => route.includes(d.id) ? color_node_on_route : color_node_off_route)
        // .attr("stroke", d => route.includes(d.id) ? color_node_on_route : color_node_off_route)
        // .attr("stroke-width", r)


    // Add labels for node IDs
    svg.selectAll("text")
        .data(floorNodes)
        .join("text")
        .attr("x", d => (scaleCoordinate((d.x), parentWidth) + parentWidth / 100))
        .attr("y", d => (scaleCoordinate((d.y), parentWidth) + parentWidth / 400))
        //This needs to become more DRY ^
        .text(d => d.id)
//        .attr("font-size", "1em")
        .attr("font-size", `${parentWidth / 40}px`)
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

    const parentWidth = svg.node().clientWidth;

    // If this is the floor where the last node is located, add the destination pin
    if (node.id === lastNodeId) {
        svg.append("circle")
            .attr("cx", scaleCoordinate(node.x, parentWidth))  // Position it at the node's x coordinate
            .attr("cy", scaleCoordinate(node.y, parentWidth))  // Position it above the triangle part
            .attr("r", parentWidth / 100)       // Larger radius for a more rounded top
            // this needs to be made more DRY ^
            .attr("fill", color_endnode) // Red color for the pin's top
            .attr("stroke", color_endnode_edge) // Darker stroke color for the pin's top
            .attr("stroke-width", parentWidth / 500);
    }

    if (node.id === firstNodeId) {

        // Add the circular top part of the pin
        svg.append("circle")
            .attr("cx", scaleCoordinate(node.x, parentWidth))  // Position it at the node's x coordinate
            .attr("cy", scaleCoordinate(node.y, parentWidth))  // Position it above the triangle part
            .attr("r",  parentWidth / 100)       // Larger radius for a more rounded top
            .attr("fill", color_startnode) // Red color for the pin's top
            .attr("stroke", color_startnode_edge) // Darker stroke color for the pin's top
            .attr("stroke-width",  parentWidth / 500);
    }
});

//chatGPT code snippet to add triangles for the stairs

/*

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

*/


// refresh on resize


function windowResize() {
    setTimeout(function(){
        location.reload();
    }, 50); // 50 milliseconds
  }
  
window.onresize = windowResize;

//______________________ChatGPT solution for floor number in circle in upper left__

// Add circles and floor numbers to visible SVGs
document.querySelectorAll("svg").forEach(svg => {
    const floor = parseInt(svg.id.split('_')[1], 10); // Extract floor number from id
    const parentWidth = svg.clientWidth; // Get the width of the SVG

    if (!parentWidth || isNaN(floor)) {
        console.warn(`Skipping SVG: ${svg.id} - Invalid floor number or parent width`);
        return;
    }

    const d3Svg = d3.select(svg); // Use D3 to select the SVG

    const circleRadius = parentWidth / 50; // Set circle radius
    const circlePosition = parentWidth / 20; // Position for the circle

    // Add a circle in the top-left corner with a border (edge)
    d3Svg
        .append("circle")
        .attr("cx", circlePosition) // Position the circle
        .attr("cy", circlePosition)
        .attr("r", circleRadius)
        .attr("fill", "white") // Fill color
        .attr("stroke", "red") // Edge color
        .attr("stroke-width", circleRadius / 8); // Edge thickness

    // Add the floor number text inside the circle
    d3Svg
        .append("text")
        .attr("x", circlePosition) // Match circle position
        .attr("y", circlePosition + circleRadius * 0.15) // Fine-tune to center vertically
        .attr("text-anchor", "middle") // Horizontal centering
        .attr("dominant-baseline", "middle") // Align vertically to the middle
        .attr("font-size", circleRadius * 1.2) // Scale font size
        .attr("fill", "black") // Set text color
        .text(floor); // Set the floor number as text
});

