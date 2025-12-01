var isValidBST = function(root) {
    function helper(node, min, max) {
        if (!node) return true; // An empty tree is valid

        // Current node must be greater than min and less than max
        if ((min !== null && node.val <= min) || (max !== null && node.val >= max)) {
            return false;
        }

        // Recursively check left and right subtrees with updated constraints
        return helper(node.left, min, node.val) && helper(node.right, node.val, max);
    }

    return helper(root, null, null);
};
