function mostWordsFound(sentences: string[]): number {
    let mx = 0
    
    sentences.forEach(s => {
        const count = s.split(" ").length
        mx = Math.max(mx, count)
    })
    
    return mx
};
