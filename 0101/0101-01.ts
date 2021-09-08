function isSymmetric(root: TreeNode | null): boolean {
    if (!root) return false;
    return same(root.left, invert(root.right));
};

const invert = (root) => {
    if (!root) return null;
    [root.left, root.right] = [invert(root.right), invert(root.left)];
    return root;
}

const same = (m, n) => {
    if (!m && !n) return true;
    if (!m || !n) return false;
    if (m.val !== n.val) return false;
    
    return same(m.left, n.left) && same(m.right, n.right);
}
