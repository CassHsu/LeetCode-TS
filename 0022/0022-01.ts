function generateParenthesis(n: number): string[] {
    const ret: string[] = [];
    backtrack(ret, [], 0, 0, n);
    return ret;
};

function backtrack(ret: string[], s: string[], left: number, right: number, n: number) {
    if (s.length === 2*n) {
        ret.push(s.join(""));
        return;
    }
    
    if (left > right) {
        s.push(")");
        backtrack(ret, s, left, right + 1, n);
        s.pop();
    }
    
    if (left < n) {
        s.push("(")
        backtrack(ret, s, left + 1, right, n);
        s.pop();
    }
}
