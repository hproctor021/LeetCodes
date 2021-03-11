// * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
var reverseList = function(head) {
    let prev = null
    while( head ){
        let temp = head.next
        head.next = prev
        prev = head
        head = temp
    }
    return prev
};

// hold onto prev value - starting with null
// while head exists, we want to ...
// create temp var = current head.next
// reassign current head.next to prev value
// reassign prev value to current head
// reassign head to temp
// should move us 'forward' in the input linked list while 
// reassigning the previously seen node as the current head's .next



// RECURSIVE SOLUTION
// O(n) TIME & SPACE

// var reverseList = function(head) {
//     const helper = (current, prev) => {
//         if( current === null ) return prev;
//         let next = current.next;
//         current.next = prev;
//         return helper(next, current)
//     }
//     return helper(head, null);
// };