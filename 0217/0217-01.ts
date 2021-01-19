function containsDuplicate(nums: number[]): boolean {
    const m = new Map();
    for (let n of nums) {
        if (m.has(n)) return true;
        m.set(n, 1);
    }
    return false;
};