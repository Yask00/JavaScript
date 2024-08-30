// Depth-first search is a graph traversal algorithm that begins at the first node of the graph and goes deeper and deeper until the goal node or node with no children is found.

function depthFirstSearch(node, target) {
    if (node.value === target) return node;
    for (let child of node.children) {
      let found = depthFirstSearch(child, target);
      if (found) return found;
    }
    return null;
  }