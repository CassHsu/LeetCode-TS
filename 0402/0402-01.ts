function removeKdigits(num: string, k: number): string {
    const stack = []
    for (const n of num) {
        while (k > 0 && stack && stack[stack.length - 1] > n) {
            stack.pop()
            k--
        }
        
        stack.push(n)
    }
    
    const arr = (k > 0) ? stack.slice(0, -k) : stack
    let ans = "0"
    
    if (arr.length > 0) {
        ans = arr.join("")
        const lastIdx = ans.length - 1
        let leading0 = 0
        for (let i = 0; i < lastIdx; i++) {
            if (ans[i] === "0") {
                leading0++
            } else {
                break
            }
        }
        
        if (leading0 > 0) ans = ans.slice(leading0)
    }
    
    return ans
};
