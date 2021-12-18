function daysBetweenDates(date1: string, date2: string): number {
    const tsday = 60 * 60 * 24 * 1000
    const d1 = new Date(date1).getTime()
    const d2 = new Date(date2).getTime()
    return Math.abs((d1 - d2) / tsday)
};
