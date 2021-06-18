function averageOfLevels(root: TreeNode | null): number[] {
    const sums: number[] = [];
    const counts: number[] = [];
    
    const dfs = (n: TreeNode, i: number) => {
        if (n == null) return;
        
        if (i < sums.length) {
            sums[i] += n.val;
            counts[i]++;
            
        } else {
            sums.push(n.val);
            counts.push(1);
        }
        
        dfs(n.left, i+1);
        dfs(n.right, i+1);
    };
    
    dfs(root, 0);
    
    for (let i = 0; i < sums.length; i++) {
        sums[i] = sums[i] / counts[i];   
    }
    return sums;
};
