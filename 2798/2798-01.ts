function numberOfEmployeesWhoMetTarget(hours: number[], target: number): number {
    let count = 0

    hours.forEach(h => {
        if (h >= target) count++
    })

    return count
};
