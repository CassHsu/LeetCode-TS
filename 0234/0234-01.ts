function isPalindrome(head: ListNode | null): boolean {
    let fast = head;
    let slow = head;
    const stack: number[] = [];
    
    while (fast && fast.next) {
        stack.push(slow.val);
        fast = fast.next.next;
        slow = slow.next;
    }
    
    if (fast) slow = slow.next;
    
    while (slow) {
        if (slow.val !== stack.pop()) return false;
        slow = slow.next;
    }
    return true;
};
