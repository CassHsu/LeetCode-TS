function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
    if (!root) return 0
    
    let v = 0
    if (root.val >= low && root.val <= high) {
        v = root.val
    }
    
    let l = rangeSumBST(root.left, low, high)
    let r = rangeSumBST(root.right, low, high)
    
    return l + r + v
};
