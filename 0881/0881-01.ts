function numRescueBoats(people: number[], limit: number): number {
    let count = 0
    people.sort((a, b) => a - b)
    
    let i = 0
    let j = people.length - 1
    
    while (i <= j) {
        count++
        if (people[i] + people[j] <= limit) i++
        j--
    }
    
    return count
};
