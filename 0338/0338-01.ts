function countBits(num: number): number[] {
    const ret = [];
    ret.push(0);
    for (let i = 1; i <= num; i++) {
        let count = 0;
        for (let offset = 30; offset >= 0; offset--) {
            let mask = 1 << offset;
            if ((i & mask)) {
                count++;
            }
        }
        ret.push(count);
    }
    return ret;
};