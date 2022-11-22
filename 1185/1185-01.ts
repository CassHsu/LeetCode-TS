function dayOfTheWeek(day: number, month: number, year: number): string {
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let d = new Date(year, month - 1, day)
    return weekday[d.getDay()]
};
