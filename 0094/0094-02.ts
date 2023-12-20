function inorderTraversal(root: TreeNode | null): number[] {
    const res = [];
    helper(root, res);
    return res;
};

function helper(node: TreeNode | null, res: number[]) {
    if (node == null) return;

    helper(node.left, res);
    res.push(node.val);
    helper(node.right, res);
}
