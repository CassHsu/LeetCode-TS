function getLonelyNodes(root: TreeNode | null): number[] {
    const lonely = [];
    
    const dfs = (node) => {
        if (!node) return;
        if (node.left && !node.right) lonely.push(node.left.val);
        if (!node.left && node.right) lonely.push(node.right.val);
        
        dfs(node.left);
        dfs(node.right);
    }
    
    dfs(root);
    return lonely;
};
