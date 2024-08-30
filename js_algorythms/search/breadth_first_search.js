// Breadth-first search is a graph traversal algorithm that begins at the root node and explores all neighboring nodes.

function breadthFirstSearch(root, target) {
    let queue = [root];
    while (queue.length) {
      let node = queue.shift();
      if (node.value === target) return node;
      queue.push(...node.children);
      // Add child nodes to queue
      // for (const child of current.children) {
      //     queue.push(child);
      // }
    }
    return null;
  }

