var widthOfBinaryTree = function(root) {
    if (!root) return 0;

    let maxWidth = 0;
    let queue = [[root, 0]];

    while (queue.length > 0) {
        const levelSize = queue.length;
        const levelStartIndex = queue[0][1];
        let first, last;

        for (let i = 0; i < levelSize; i++) {
            const [node, index] = queue.shift();
            const normalizedIndex = index - levelStartIndex; 
            if (i === 0) first = normalizedIndex;
            if (i === levelSize - 1) last = normalizedIndex;

            if (node.left) queue.push([node.left, 2 * normalizedIndex]);
            if (node.right) queue.push([node.right, 2 * normalizedIndex + 1]);
        }

        maxWidth = Math.max(maxWidth, last - first + 1);
    }

    return maxWidth;
};
