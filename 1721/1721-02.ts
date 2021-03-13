function swapNodes(head: ListNode | null, k: number): ListNode | null {
    let curr = head;
    let n1: ListNode = null;
    let n2: ListNode = null;
    
    while (curr != null) {
        k--;
        if (n2 != null) {
            n2 = n2.next;
        }
        if (k == 0) {
            n1 = curr;
            n2 = head;
        }
        curr = curr.next;
    }
    
    const tmp = n1.val;
    n1.val = n2.val;
    n2.val = tmp;
    
    return head;
};
