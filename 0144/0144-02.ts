function preorderTraversal(root: TreeNode | null): number[] {
    const ans = [];
    const stack = [];
    
    if (root) stack.push(root);
    
    while (stack.length > 0) {
        const node = stack.pop();
        ans.push(node.val);
        
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }
    
    return ans;
};
