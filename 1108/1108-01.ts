function defangIPaddr(address: string): string {
    let ans = ""
    
    for (let i = 0; i < address.length; i++) {
        if (address[i] === ".") {
            ans += "[.]"
        }
        else {
            ans += address[i]
        }
    }
    return ans
};
