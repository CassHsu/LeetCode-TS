function partition(s: string): string[][] {
    const ans = [];
    const backtrack = (curr: string[], start: number) => {
        if (start >= s.length) {
            ans.push([...curr]);
            return;
        }
        
        for (let end = start; end < s.length; end++) {
            const tmp = s.substring(start, end + 1);
            if (tmp === tmp.split('').reverse().join('')) {
                curr.push(tmp);
                backtrack(curr, end + 1);
                curr.pop();
            }
        }
    }
    
    const curr: string[] = [];
    backtrack(curr, 0);
    return ans;
};
