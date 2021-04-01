function selfDividingNumbers(left: number, right: number): number[] {
    const ret: number[] = [];
    for (let i = left; i <= right; i++) {
        if (check(i)) ret.push(i);
    }
    return ret;
};

function check(num: number): boolean {
    let d = num;
    while (d > 0) {
        let r = d % 10;
        d = Math.floor(d / 10);
        if (r === 0 || num % r !== 0) return false;
    }
    return true;
}
