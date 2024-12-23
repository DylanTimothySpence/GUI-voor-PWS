import csv
from collections import defaultdict

def csv_to_adjacency_list(file_path):
    graph = defaultdict(list)

    with open(file_path, 'r') as csvfile:
        reader = csv.reader(csvfile)

        # Skip the header
        header = next(reader, None)

        # Process each row dynamically
        for row in reader:
            source = int(row[0])  # The first column is the source node

            # Iterate over remaining columns in pairs (target node, weight)
            for i in range(1, len(row), 2):
                if row[i]:  # Check if the target node exists
                    target = int(row[i])
                    weight = float(row[i + 1]) if row[i + 1] else 0.0  # Default weight to 0.0 if missing
                    graph[source].append([target, weight])

    return dict(graph)

# Test the function
#print(csv_to_adjacency_list(r'oefen_adj_list.csv'))

# Read the CSV file
file_path = 'oefen_adj_list.csv'
graph = csv_to_adjacency_list(file_path)

# Print the graph with trailing comma
'''
print("graph = {")
for node, edges in sorted(graph.items()):
    print(f"    {node}: {edges},")
print("}")
'''