function flatten(root: TreeNode | null): void {
    if (!root) return
    
    const l = root.left
    const r = root.right
    
    flatten(root.left)
    flatten(root.right)

    root.left = null
    root.right = l

    while (root.right) {
        root = root.right
    }

    root.right = r
};
