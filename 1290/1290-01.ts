function getDecimalValue(head: ListNode | null): number {
    let num = head.val;
    while (head.next) {
        num = num * 2 + head.next.val;
        head = head.next;
    }
    return num;
};
