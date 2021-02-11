function kthSmallest(root: TreeNode | null, k: number): number {
    const leftSize = getSize(root.left);
    if (k <= leftSize) return kthSmallest(root.left, k);
    if (k == leftSize + 1) return root.val;
    return kthSmallest(root.right, k - (leftSize + 1));
};

function getSize(root: TreeNode): number {
    if (!root) return 0;
    return getSize(root.left) + 1 + getSize(root.right);
}