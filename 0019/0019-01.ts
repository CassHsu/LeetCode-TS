function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let dummy = new ListNode(-1, head);
    let fast = dummy;
    let slow = dummy;
    
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }
    
    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
    
    slow.next = slow.next.next;
    return dummy.next;
};
