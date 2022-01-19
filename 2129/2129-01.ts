function capitalizeTitle(title: string): string {
    const ans = []
    const words = title.split(" ")
    
    for (const word of words) {
        let w = word.toLowerCase()
        if (w.length > 2) {
            w = w[0].toUpperCase() + w.slice(1)
        }
        ans.push(w)
    }
    
    return ans.join(" ")
};
