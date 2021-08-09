function getLucky(s: string, k: number): number {
    let tmp = [...s].reduce((acc, curr) => acc + (curr.charCodeAt(0) - 96).toString(), "");   
    
    while(k--) {
        tmp = [...tmp].reduce((acc, curr) => acc + parseInt(curr, 10), 0).toString(10);
    }
    
    return parseInt(tmp, 10);
};
