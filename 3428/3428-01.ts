function finalPositionOfSnake(n: number, commands: string[]): number {
    let x = 0
    let d = Array.from({ length: 100 }, () => Array(100).fill(0))

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            d[i][j] = x
            x++
        }
    }

    let i = 0, j = 0
    for (let c of commands) {
        if (c === "RIGHT") {
            j++
        } else if (c === "DOWN") {
            i++
        } else if (c === "LEFT") {
            j--
        } else if (c === "UP") {
            i--
        }
    }

    return d[i][j]
};
