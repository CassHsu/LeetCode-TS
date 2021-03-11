function swapNodes(head: ListNode | null, k: number): ListNode | null {
    let curr = head;
    let values: number[] = [];
    
    while (curr) {
        values.push(curr.val);
        curr = curr.next;
    }
    
    const il = k - 1;
    const ir = values.length - k;
    
    curr = head;
    let i = 0;
    while (curr) {
        if (i === il) curr.val = values[ir];
        if (i === ir) curr.val = values[il];
        
        curr = curr.next;
        i++;
    }
    return head;
};
