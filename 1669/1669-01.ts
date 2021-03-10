function mergeInBetween(list1: ListNode | null, a: number, b: number, list2: ListNode | null): ListNode | null {
    let start = list1;
    for (let i = 1; i < a; i++) {
        start = start.next;
    }
    
    let end = start;
    for (let i = a; i <= b; i++) {
        end = end.next;
    }
    
    start.next = list2;
    while (list2.next) {
        list2 = list2.next;
    }
    list2.next = end.next; 
    return list1;
};
