function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.get(nums[i])) {
            if (i <= map.get(nums[i])) return true;
        }
        map.set(nums[i], i + k);
    }
    return false;
};
