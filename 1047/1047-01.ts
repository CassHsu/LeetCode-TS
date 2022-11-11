function removeDuplicates(s: string): string {
    const res = []

    for (const c of s) {
        const size = res.length

        if (size > 0 && res[size - 1] === c) {
            res.pop()
        } else {
            res.push(c)
        }
    }

    return res.join("")
};
