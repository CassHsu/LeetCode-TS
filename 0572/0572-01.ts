function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if (!root) return !subRoot;
    
    const isSameTree = (n1, n2) => {
        if (!n1 || !n2) return !n1 && !n2;
        if (n1.val !== n2.val) return false;
        return isSameTree(n1.left, n2.left) && isSameTree(n1.right, n2.right);
    }  
    
    return isSameTree(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};
