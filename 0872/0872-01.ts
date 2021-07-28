function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    const dfs = (node) => {
        if (!node.left && !node.right) return node.val.toString();
        
        let ret = "";
        if (node.left) {
            const v = dfs(node.left);
            ret = (ret != "") ? ret + "-" + v : v;
        }
        
        if (node.right) {
            const v = dfs(node.right);
            ret = (ret != "") ? ret + "-" + v : v;
        }
        
        return ret;
    };
    
    return dfs(root1) === dfs(root2);
};
