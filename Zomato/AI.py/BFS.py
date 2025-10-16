 def bfs(graph, start):
    visited = []          # List to keep track of visited nodes
    queue = [start]       # Initialize a queue with the start node

    while queue:
        node = queue.pop(0)      # Remove the first node from queue
        if node not in visited:
            visited.append(node)       # Mark as visited
            queue.extend(graph[node])  # Add neighbors to queue

    print("BFS Traversal:", visited)

# Example graph as dictionary (adjacency list)
graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [],
    'E': [],
    'F': []
}

# Call the function
bfs(graph, 'A')
