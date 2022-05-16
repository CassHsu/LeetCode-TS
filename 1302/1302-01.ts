var sum: number;
var maxlv: number;

function deepestLeavesSum(root: TreeNode | null): number {
    sum = 0;
    maxlv = 0;
    dfs(root, 0);
    
    return sum;
};

function dfs(root: TreeNode | null, lv: number): void {
    if (!root) return 
    
    if (lv > maxlv) {
        maxlv = lv;
        sum = root.val;
        
    } else if (lv === maxlv) {
        sum += root.val;
    }

    dfs(root.left, lv + 1);
    dfs(root.right, lv + 1);
}
