class LRUCache {
    map: Map<number, number>;
    capacity: number;
    constructor(capacity: number) {
        this.map = new Map<number, number>();
        this.capacity = capacity;
    }

    get(key: number): number {
        if (this.map.has(key) == false) return -1;
        
        const v = this.map.get(key);
        this.map.delete(key);
        this.map.set(key, v);
        return v;
    }

    put(key: number, value: number): void {
        if (this.map.has(key)) this.map.delete(key);

        this.map.set(key, value);
        if (this.map.size > this.capacity) {
            this.map.delete(this.map.keys().next().value);
        }
    }
}
