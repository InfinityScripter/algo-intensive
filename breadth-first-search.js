const bfs = (tree) => {
    let queue = [tree];
    let result = [];
    while (queue.length) {
        let node = queue.shift();
        result.push(node.val);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    return result;
}