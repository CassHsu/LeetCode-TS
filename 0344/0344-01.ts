function reverseString(s: string[]): void {
    let l = 0;
    let r = s.length - 1;
    
    while (l < r) {
        let tmp = s[l];
        s[l] = s[r];
        s[r] = tmp;
        
        l++;
        r--;
    }
};
