var leafSimilar = function(root1, root2) {
    const dfs = (node) => {
        if (!node.left && !node.right) return node.val.toString();
        
        let ret = "";
        if (node.left) {
            const v = dfs(node.left);
            ret = (ret != "") ? ret + "-" + v: v;
        }
        
        if (node.right) {
            const v = dfs(node.right);
            ret = (ret != "") ? ret + "-" + v: v;
        }
        
        return ret;
    };
    
    return dfs(root1) === dfs(root2);
};
