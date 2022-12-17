class MyQueue {
    stack
    constructor() {
        this.stack = []
    }

    push(x: number): void {
        this.stack.push(x)
    }

    pop(): number {
        const x = this.stack[0]
        this.stack = this.stack.slice(1, this.stack.length)
        return x
    }

    peek(): number {
        return this.stack[0]
    }

    empty(): boolean {
        return this.stack.length === 0 ? true: false
    }
}
