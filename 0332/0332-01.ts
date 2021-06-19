function findItinerary(tickets: string[][]): string[] {
    const g = {};
    const path = [];
    
    for (let [src, des] of tickets) {
        g[src] = [...(g[src] || []), des];
    }
    
    for (let i in g) {
        g[i].sort();
    }
    
    const dfs = (n) => {
        const des = g[n];
        while (des && des.length > 0) {
            dfs(des.shift());
        }
        path.push(n);
    }
    dfs('JFK');
    
    return path.reverse();
};
