function calPoints(ops: string[]): number {
    const stack = [];
    
    ops.forEach(op => {
       if (op === "+") {
           stack.push(stack[stack.length - 2] + stack[stack.length - 1]);
       } else if (op === "C") {
           stack.pop();
       } else if (op === "D") {
           stack.push(2 * stack[stack.length - 1]);
       } else {
           stack.push(parseInt(op));
       }
    });
    
    let ans = 0;
    stack.forEach(s => ans += s);
    return ans;
};
