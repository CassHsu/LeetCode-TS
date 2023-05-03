function sumOfMultiples(n: number): number {
    const multiples = []

    for (let i = 0; i <= n; i++) {
        if (i % 3 == 0 || i % 5 == 0 || i % 7 == 0) {
            multiples.push(i)
        }
    }

    return multiples.reduce((acc, cur) => acc + cur, 0)
};
