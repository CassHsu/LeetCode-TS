function getDecimalValue(head: ListNode | null): number {
    let num = head.val;
    while (head.next) {
        num = num << 1 | head.next.val;
        head = head.next;
    }
    return num;
};
