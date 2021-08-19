function maxDepth(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }
    
    const l = maxDepth(root.left);
    const r = maxDepth(root.right);
    
    return Math.max(l, r) + 1;
};
