function postorderTraversal(root: TreeNode | null): number[] {
    const ret = [];
    const postorder = (node) => {
        if (node == null) return;
        
        postorder(node.left);
        postorder(node.right);
        ret.push(node.val);
    }
    
    postorder(root);
    return ret;
};
