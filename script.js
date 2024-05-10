// Implement Dijkstra's Algorithm:

//     Write a JavaScript function named dijkstra that takes the following parameters:
//         graph: An object representing the weighted graph. Each key represents a vertex, and the corresponding value is an array of adjacent vertices with their respective weights. For example:
//         const graph = {

//    'A': { 'B': 4, 'C': 2 },

//    'B': { 'A': 4, 'C': 5, 'D': 10 },

//    'C': { 'A': 2, 'B': 5, 'D': 3 },

//    'D': { 'B': 10, 'C': 3 }

// };

/**
 * Dijkstra's algorithm implementation
 *
 * @param {Object} graph - Weighted graph represented as an object
 * @param {string} start - Starting vertex from which to find the shortest paths
 * @returns {Object} - Object containing shortest distances and previous vertices
 */

//     start: The starting vertex from which to find the shortest paths.
function dijkstra(graph, start) {
  /**
   * Initialize distances to all vertices as Infinity (very large numbers)
   * and create a set to keep track of visited vertices
   */
  const distance = {};
  const visited = new Set();
  const previous = {};

  // Initialize all distances to Infinity (or very large numbers)
  for (const vertex in graph) {
    distance[vertex] = Infinity;
  }

  //     The function should return an object representing the shortest distances from the starting vertex to all other vertices. The keys of the object will be the vertices, and the corresponding values will be the shortest distances. For example, calling dijkstra(graph, 'A') should return:

  // {

  //    'A': 0,

  //    'B': 4,

  //    'C': 2,

  //    'D': 5

  // }

  // Set the distance of the starting vertex to 0
  distance[start] = 0;

  while (visited.size < Object.keys(graph).length) {
    /**
     * Find the vertex with the smallest distance that hasn't been visited yet
     */
    let current = undefined;
    for (const vertex in graph) {
      if (
        !visited.has(vertex) &&
        (current === undefined || distance[vertex] < distance[current])
      ) {
        current = vertex;
      }
    }

    // Visit the current vertex
    visited.add(current);

    /**
     * Update the distances of adjacent vertices
     */
    for (const [neighbor, weight] of Object.entries(graph[current])) {
      if (!visited.has(neighbor)) {
        const distanceToNeighbor = distance[current] + weight;

        if (distanceToNeighbor < distance[neighbor]) {
          distance[neighbor] = newDistance;
          previous[neighbor] = current;
        }
      }
    }
  }

  return { distances, previous };
}

const graph = {
  A: { B: 4, C: 2 },
  B: { A: 4, C: 5, D: 10 },
  C: { A: 2, B: 5, D: 3 },
  D: { B: 10, C: 3 },
};

const result = dijkstra(graph, "A");
console.log(result.distances);
// { A: 0, B: 2, C: 2, D: 5 }

console.log(result.previous);
// { A: undefined, B: 'A', C: 'A', D: 'B' }
