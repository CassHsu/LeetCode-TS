function timeRequiredToBuy(tickets: number[], k: number): number {
    let seconds = 0
    const n = tickets.length
    const queue = new Array()

    for (let i = 0; i < n; i++) {
        queue.push(0)
    }

    while (queue[k] < tickets[k]) {
        for (let i = 0; i < n; i++) {
            if (queue[k] == tickets[k] && i > k)
                break

            if (queue[i] < tickets[i]) {
                queue[i] += 1
                seconds += 1
            }
        }
    }
    return seconds
};
