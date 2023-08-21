const bfs = (tree) => {
  let stack = [tree];
  let result = [];
  while (stack.length) {
      let node = stack.shift();
      result.push(node.val);
      if (node.left) stack.push(node.left);
      if (node.right) stack.push(node.right);
  }
  return result;
}

describe('Breadth First Search', () => {
    const tree = {
        val: 1,
        left: {
            val: 2,
            left: {
                val: 4,
                left: null,
                right: null
            },
            right: {
                val: 5,
                left: null,
                right: null
            }
        },
        right: {
            val: 3,
            left: {
                val: 6,
                left: null,
                right: null
            },
            right: {
                val: 7,
                left: null,
                right: null
            }
        }
    }

    test('Breadth First Search', () => {
        expect(bfs(tree)).toEqual([1,2,3,4,5,6,7]);
    });
});