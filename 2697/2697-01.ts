function makeSmallestPalindrome(s: string): string {
    const m = new Map()
    const res = []
    let l = 0
    let r = s.length - 1

    while (l < r) {
        if (s[l] != s[r]) {
            if (s[l] > s[r]) {
                m.set(l, s[r])
            } else {
                m.set(r, s[l])
            }
        }

        l++
        r--
    }

    for (let i = 0; i < s.length; i++) {
        const v = m.get(i)
        if (v) {
            res.push(v)
        } else {
            res.push(s[i])
        }
    }
    return res.join("")
};
