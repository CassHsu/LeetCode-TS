function isSymmetric(root: TreeNode | null): boolean {
    const isSym = (t1, t2) => {
        if (!t1 && !t2) return true
        if (!t1 || !t2) return false
        if (t1.val != t2.val) return false

        return isSym(t1.right, t2.left) && isSym(t1.left, t2.right)
    }

    return isSym(root, root)
};
