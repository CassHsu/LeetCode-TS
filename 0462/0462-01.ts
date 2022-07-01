function minMoves2(nums: number[]): number {
    nums.sort((a, b) => a - b)
    const p = nums[Math.floor(nums.length / 2)]
    
    let moves = 0
    for (const n of nums) {
        moves += Math.abs(n - p)
    }
    
    return moves
};
