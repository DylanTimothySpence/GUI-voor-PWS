import csv
from collections import defaultdict

def csv_to_adjacency_list(file_path):
    graph = defaultdict(list)

    with open(file_path, 'r') as csvfile:
        reader = csv.reader(csvfile)

        header = next(reader, None)

        for row in reader:
            source = int(row[0])

            for i in range(1, len(row), 2):
                if row[i]:
                    target = int(row[i])
                    weight = float(row[i + 1]) if row[i + 1] else float('inf')  
                    graph[source].append([target, weight])

    return dict(graph)


# Read the CSV file
file_path = 'oefen_adj_list.csv'
graph = csv_to_adjacency_list(file_path)

# Print the graph with trailing comma

def print_graph_formatter(input_graph):
    print("graph = {")
    for node, edges in sorted(input_graph.items()):
        print(f"    {node}: {edges},")
    print("}")