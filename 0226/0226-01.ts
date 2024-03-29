function invertTree(root: TreeNode | null): TreeNode | null {
    if (!root) return null;
    
    const tmp = root.left;
    root.left = root.right;
    root.right = tmp;
    
    invertTree(root.left);
    invertTree(root.right);
    
    return root;
};
