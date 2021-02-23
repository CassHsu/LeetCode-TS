var solution = function(isBadVersion: any) {

    return function(n: number): number {
        let start = 1;
        let end = n;
        let mid = 1;
        
        while (true) {
            mid = Math.floor(start + (end - start) / 2);
            if (isBadVersion(mid) && !isBadVersion(mid - 1)) break;
            if (isBadVersion(mid) == false) {
                start = mid + 1;
            } else {
                end = mid;
            }
        }
        return mid;
    };
};
