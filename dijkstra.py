# dit algoritme is dijkstra v4 met aanpassing door D Spence
import math
from datetime import datetime
from converter import csv_to_adjacency_list

#print("-----------", (datetime.now().strftime("%Y-%m-%d %H:%M:%S")) ,"-----------")

launch_time = datetime.now()

route = []
time = 0
graph = {}
speed = 1
average_speed = 1 #meters per seconde

def check_connected_nodes(graph, node, path_weight, previous_node, visited):
    for connected_node, weight in graph[node]:  
        if path_weight[node] + weight < path_weight[connected_node]:  
            path_weight[connected_node] = path_weight[node] + weight  
            previous_node[connected_node] = node  
    visited[node] = True
             
def closest_unvisited_node(path_weight, visited):
    unvisited_distances = []
    for index, weight in enumerate(path_weight): 
        if visited[index] == False :
            unvisited_distances.append((weight, index))
    if unvisited_distances:  
        return min(unvisited_distances, key=lambda x: x[0])[1]  
    
def find_route(startnode, endnode, previous_node):
    route = []
    current_node = endnode
    while current_node != startnode:
        if current_node is None:
            raise ValueError(f"No path exists from {startnode} to {endnode}.")
        route.append(current_node)
        current_node = previous_node[current_node]
    route.append(current_node)
    route.reverse()
    return route


def walking_time(route_weight, speed):
    time = round((route_weight * (average_speed/speed)),2)
    return time

def run_algorithm(graph, startnode, endnode, speed):
    visited = [False] * len(graph)
    path_weight = [float('inf')] * len(graph)  
    path_weight[startnode] = 0
    previous_node = [None] * len(graph)
    while not visited[endnode]:
        check_connected_nodes(graph, closest_unvisited_node(path_weight, visited), path_weight, previous_node, visited)
    route = find_route(startnode, endnode, previous_node)
    time = walking_time(path_weight[endnode], speed)
    return route, time

# path = 'oefen_adj_list.csv'
# graph = csv_to_adjacency_list(path)
# route, time = run_algorithm(graph=graph, startnode=3, endnode=13, speed=1)
# print(f'route: {route}, time: {time}s')

# terminate_time = datetime.now()
# process_time = terminate_time - launch_time
# print(f'time to run is: {process_time}')
