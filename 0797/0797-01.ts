function allPathsSourceTarget(graph: number[][]): number[][] {
    const ans = []
    const backtrack = (path, curr) => {
        if (curr + 1 === graph.length) {
            ans.push([...path]);
            return
        }
        
        for (const n of graph[curr]) {
            path.push(n)
            backtrack(path, n)
            path.pop()
        }
    }
    
    backtrack([0], 0)
    return ans
};
