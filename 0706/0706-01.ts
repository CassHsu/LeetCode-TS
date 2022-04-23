class MyHashMap {
    buckets: number[]
    
    constructor() {
        this.buckets = []
        for (let i = 0; i <= 1000000; i++) {
            this.buckets.push(-1)
        }
    }

    put(key: number, value: number): void {
        this.buckets[key] = value
    }

    get(key: number): number {
        return this.buckets[key]
    }

    remove(key: number): void {
        this.buckets[key] = -1
    }
}
