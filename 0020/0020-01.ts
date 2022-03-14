function isValid(s: string): boolean {
    if (s.length === 0) return true
    
    const stack = []
    const m = new Map()
    m.set('(', ')')
    m.set('[', ']')
    m.set('{', '}')
    
    for (const c of s) {
        const size = stack.length
        if (size > 0 && m.get(stack[size - 1]) === c) {
            stack.pop()
        } else {
            stack.push(c)
        }
    }
    
    return stack.length === 0
};
