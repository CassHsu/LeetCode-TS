function addToArrayForm(num: number[], k: number): number[] {
    let nStr = ""
    num.forEach(n => nStr += n.toString())

    nStr = (BigInt(nStr) + BigInt(k)).toString()
    const nArr = nStr.split("")
    const ans = []

    nArr.forEach(n => ans.push(parseInt(n)))

    return ans
};
