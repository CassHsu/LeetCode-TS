function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    const dfs = (node) => {
        if (!node.left && !node.right) return node.val.toString();
        
        let ret = [];
        if (node.left) {
            ret.push(dfs(node.left));
        }
        
        if (node.right) {
            ret.push(dfs(node.right));
        }
        
        return ret.join("-");
    };
    
    return dfs(root1) === dfs(root2);
};
