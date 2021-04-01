function selfDividingNumbers(left: number, right: number): number[] {
    const ret: number[] = [];
    for (let i = left; i <= right; i++) {
        if (check(i)) ret.push(i);
    }
    return ret;
};

function check(num: number): boolean {
    let str = num.toString();
    for (let s of str) {
        if (s === "0" || num % parseInt(s) !== 0) return false;
    }
    return true;
}
