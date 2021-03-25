function countMatches(items: string[][], ruleKey: string, ruleValue: string): number {
    const m = new Map<string, number>();
    m["type"] = 0;
    m["color"] = 1;
    m["name"] = 2;
    
    let count = 0;
    for (let item of items) {
        if (item[m[ruleKey]] === ruleValue) {
            count++;
        }
    }
    return count;
};
