function averageOfLevels(root: TreeNode | null): number[] {
    const ret = [];
    const q = [root];
    
    while (q.length > 0) {
        const size = q.length;
        let sum = 0;
        
        for (let i = 0; i < size; i++) {
            const curr = q.shift();
            sum += curr.val;
            
            if (curr.left) q.push(curr.left);
            if (curr.right) q.push(curr.right);
        }
        
        ret.push(sum / size);
    }
    
    return ret;
};
