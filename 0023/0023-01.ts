function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    let head = new ListNode()
    let curr = head
    
    const nodes = []
    for (let ll of lists) {
        while (ll) {
            nodes.push(ll.val)
            ll = ll.next
        }
    }
    nodes.sort((a, b) => a - b)
    
    for (const n of nodes) {
        curr.next = new ListNode(n)
        curr = curr.next
    }
    
    return head.next
};
