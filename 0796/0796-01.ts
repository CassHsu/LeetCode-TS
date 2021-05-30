function rotateString(s: string, goal: string): boolean {
    if (s === "" && goal === "") return true;
    if (s.length !== goal.length) return false;
    if (s === goal) return true;
    
    let lg = goal.split("");
    const end = goal.length;
    for (let i = 0; i < s.length; i++) {
        const start = lg[0];
        lg = lg.slice(1, end);
        lg.push(start);
        
        if (s === lg.join("")) return true;
    }
    return false;
};
