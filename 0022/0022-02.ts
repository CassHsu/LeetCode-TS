function generateParenthesis(n: number): string[] {
    const ret = [];
    
    const backtrack = (s, left, right) => {
        if (s.length === 2 * n) {
            ret.push(s);
            return;
        }
        
        if (left > right) {
            backtrack(s + ")", left, right + 1);
        }
        
        if (left < n) {
            backtrack(s + "(", left + 1, right);
        }
    };
    
    backtrack("", 0, 0);
    return ret;
};
