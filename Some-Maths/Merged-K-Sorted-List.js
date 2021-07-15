// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.


var mergeKLists = function (lists) {
    if (list.length === 0) return null;

    const merge = (a,b) => {
        let dummy = new ListNode(0)
        let temp = dummy;
        while (a !== null && b !== null) {
            if (a.val < b.val) {
                temp.next = a
                a = a.next
            } else {
                temp.next = b
                b = b.next
            }
            temp = temp.next
        }
        
        if (a !== null) {
            temp.next = a;
        }
        if (b !== null) {
            temp.next = b;
        }
        return dummy.next;
    }

    while (list.length > 1) {
        let a = lists.shift();
        let b = lists.shift();
        
        let m = merge(a, b);
        lists.push(m);
    }

    return lists[0];
}