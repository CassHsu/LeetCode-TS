function postorderTraversal(root: TreeNode | null): number[] {
    const ans = [];
    const stack = [];
    
    if (root) stack.push(root);
    
    while (stack.length > 0) {
        const node = stack.pop();
        
        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
        
        ans.push(node.val);
    }
    
    return ans.reverse();
};
