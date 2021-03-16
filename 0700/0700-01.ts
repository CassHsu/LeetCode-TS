function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    if (root == null) return null;
    
    if (root.val === val) return root;
    
    if (val < root.val) {
        return searchBST(root.left, val);
    }
    return searchBST(root.right, val);
};
