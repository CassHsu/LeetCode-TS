function countCompleteDayPairs(hours: number[]): number {
    let count = 0
    let size = hours.length

    for (let i = 0; i < size; i++) {
        for (let j = i + 1; j < size; j++) {
            if ((hours[i] + hours[j]) % 24 === 0) {
                count++
            }
        }
    }


    return count
};
