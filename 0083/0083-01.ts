function deleteDuplicates(head: ListNode | null): ListNode | null {
    let ite = head;
    while (ite) {
        let tmp = ite.next;
        while (tmp && tmp.val === ite.val) {
            tmp = tmp.next;
        }
        
        ite.next = tmp;
        ite = ite.next;
    }
    return head;
};
