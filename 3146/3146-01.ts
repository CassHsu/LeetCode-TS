function findPermutationDifference(s: string, t: string): number {
    let ans = 0

    for (let i = 0; i < s.length; i++) {
        ans += Math.abs(i -  t.indexOf(s[i]))
    }

    return ans
};
