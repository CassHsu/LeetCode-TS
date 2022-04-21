function checkTree(root: TreeNode | null): boolean {
    return root.val === root.left.val + root.right.val
};
