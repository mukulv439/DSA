var bstFromPreorder = function(preorder) {
    let idx = 0;

    function construct(bound) {
        
        if (idx === preorder.length || preorder[idx] > bound) {
            return null;
        }


        const rootVal = preorder[idx++];
        const root = new TreeNode(rootVal);


        root.left = construct(rootVal);

        root.right = construct(bound);

        return root;
    }

    return construct(Infinity);
};
