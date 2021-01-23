function fizzBuzz(n: number): string[] {
    const res: string[] = [];
    
    for (let i = 1; i <= n; i++) {
        let im3 = i % 3;
        let im5 = i % 5;
        if (im3 == 0 && im5 == 0) {
            res.push("FizzBuzz");
        } else if (im3 == 0) {
            res.push("Fizz");
        } else if (im5 == 0) {
            res.push("Buzz");
        } else {
            res.push(i.toString());
        }
    }
    return res;
};