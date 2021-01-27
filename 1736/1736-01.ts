function maximumTime(time: string): string {
    const res = time.split("");
    
    if (res[0] === "?") res[0] = (parseInt(res[1]) > 3 ? "1": "2");
    if (res[1] === "?") res[1] = (parseInt(res[0]) > 1 ? "3": "9");
    if (res[3] === "?") res[3] = "5";
    if (res[4] === "?") res[4] = "9";
    
    return res.join("");
};