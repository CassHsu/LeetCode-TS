function preorderTraversal(root: TreeNode | null): number[] {
    const ret = [];
    const preorder = (node) => {
        if (node == null) return;
        
        ret.push(node.val);
        preorder(node.left);
        preorder(node.right);
    };
    
    preorder(root);
    
    return ret;
};
