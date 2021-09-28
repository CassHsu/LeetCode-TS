function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
    if (!root) return new TreeNode(val)
    
    let curr = root
    while (true) {
        if (curr.val <= val) {
            if (curr.right) {
                curr = curr.right
                
            } else {
                curr.right = new TreeNode(val)
                break
            }
            
        } else {
            if (curr.left) {
                curr = curr.left
                
            } else {
                curr.left = new TreeNode(val)
                break
            }
        }
    }
    
    return root
};
