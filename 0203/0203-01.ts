function removeElements(head: ListNode | null, val: number): ListNode | null {
    let dummy = new ListNode(-1, head);
    let prev = dummy;
    let curr = dummy.next;
    
    while (curr) {
        if (curr.val === val) {
            prev.next = curr.next;
        } else {
            prev = curr;
        }
        curr = curr.next;
    }
    return dummy.next;
};
