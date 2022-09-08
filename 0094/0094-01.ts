function inorderTraversal(root: TreeNode | null): number[] {
    const res: number[] = []
    
    const inorder = (node: TreeNode) => {
        if (!node) return
        
        inorder(node.left)
        res.push(node.val)
        inorder(node.right)
    }
    
    inorder(root)
    return res
};
