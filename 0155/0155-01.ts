class MinStack {
    stack: number[];
    minlist: number[];
    constructor() {
        this.stack = [];
        this.minlist = [];
    }

    push(x: number): void {
        this.stack.push(x);
        const lastMin = this.minlist.slice(-1)[0];
        if (this.minlist.length > 0 && x > lastMin) {
            this.minlist.push(lastMin);
        } else {
            this.minlist.push(x);
        }
    }

    pop(): void {
        this.stack.pop();
        this.minlist.pop();
    }

    top(): number {
        return this.stack.slice(-1)[0];
    }

    getMin(): number {
        return this.minlist.slice(-1)[0];
    }
}
