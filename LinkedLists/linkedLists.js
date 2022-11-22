//Create doubly linked list with following: 1<->2<->3

class ListNode { 
    constructor(val) { 
        this.val = val;
        this.next = null;
        this.prev = null
    }
}

(function main() { 
    const myNode1= new ListNode(1)
    const myNode2 = new ListNode(2)
    const myNode3 = new ListNode(3)

    let head = myNode1
    let tail = myNode3

    head.next = myNode2
    myNode2.prev= head
    myNode2.next = tail
    tail.prev = myNode2
    console.log(head.val)
    console.log(head.next.val)
    console.log(head.next.next.val)
  
    console.log(tail.prev.val)

    // 1
    // 2
    // 3
    // 2   
}())

//Two pointer solution
    let getMiddle = head=> { 
        let slow = head;
        let fast = head;

        while(fast && fast.next) { 
            slow = slow.next
            fast = fast.next.next
        }
        return slow.val
    }

//Given the head of a linked list, determine if the linked list has a cycle.
//There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer.

/**
 * 
 * @param {ListNode} head 
 * @return {boolean}
 */
var hasCycle = function(head) { 
    let slow = head;
    let fast = head;
    while(fast && fast.next) { 
        slow = slow.next
        fast = fast.next.next
        if(fast===slow) { 
            return true
        }
    }
    return false
}

//Given the head of a linked list and an integer k, return the kthkth node from the end.

//For example, given the linked list that represents 1 -> 2 -> 3 -> 4 -> 5 and k = 2, return the node with value 4, as it is the 2nd node from the end.

let findNode = (head,k) => { 
    let slow = head;
    let fast = head;
    for (let i=0;i<k; i++) { 
        fast = fast.next
    }

    while(fast){
        fast = fast.next
        slow = slow.next
    }
    return slow;
}


// Given the head of a singly linked list, return the middle node of the linked list.
// If there are two middle nodes, return the second middle node.

/**
 * 
 * @param {ListNode} head 
 * @return {ListNode}
 */

var middleNode = function(head) { 
    let slow = head;
    let fast = head;
    while(fast&&fast.next) { 
        slow = slow.next
        fast = fast.next.next
    }
    return slow
}

//Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

/**
 * 
 * @param {ListNode} head 
 * @return {ListNode}
 */
var deleteDuplicates = function(head) { 
    let current=head;
    while(current!=null && current.next !=null) { 
        if(current.next.val===current.val) { 
            current.next = current.next.next
        } else { 
            current = current.next
        }
    }
    return head
}


//reversing linked list

let reverseList = head => { 
    let prev=null
    let curr=head
    while(curr){ 
        let nextNode= curr.next 
        curr.next =prev //reverse direction of the pointer
        prev = curr;
        curr= nextNode
    }
    return prev
}

//swap pairs
//Given the head of a linked list, swap every pair of nodes. 
//For example, given a linked list 1 -> 2 -> 3 -> 4 -> 5 -> 6, return a linked list 2 -> 1 -> 4 -> 3 -> 6 -> 5.

var swapPairs = function(head) { 
    //Check edge case: linked list has 0 or 1 nodes, just return 
    if(!head||!head.next) { 
        return head;
    }
    let dummy = head.next
    let prev = null
    while(head&&head.next) { 
        if(prev) { 
            prev.next = head.next
        }
        prev=head;
        let nextNode = head.next.next
        head.next.next = head
        head.next = nextNode;
        head = nextNode
    }
    return dummy
}

/**
 * 
 * @param {ListNode} head 
 * @param {number} left 
 * @param {number} right 
 * @return {ListNode}
 */

var reverseBetween=function(head,left,right) { 
    if(!head) { 
        return;
    }
    const res = head
    let reverseHead = null;
    let count = 1
    while(count<left) { 
        reverseHead =head
        head = head.next
        count++
    }
    let reverseTail = head;
    let rHead = head;
    let tmp = null;
    let pre = null;

    while(count<=right && rHead) { 
        tmp = rHead.next;
        rHead.next = pre;
        pre = rHead;
        rHead = tmp
        count++
    }
    reverseTail.next = tmp;
    if(reverseHead) { 
        reverseHead.next = pre
        return res;
    } else { 
        return pre;
    }
}