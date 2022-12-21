function pivotInteger(n: number): number {
    const nums = []

    for (let i = 0; i <= n; i++) {
        nums.push(i)
    }

    for (let p = 1; p <= n + 1; p++) {
        const ls = nums.slice(1, p + 1).reduce((x, y) => x + y, 0)
        const rs = nums.slice(p, n + 1).reduce((x, y) => x + y, 0)

        if (ls === rs) return p
    }

    return -1
};
