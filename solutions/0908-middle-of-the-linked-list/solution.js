/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    // Base Case
    if(!head || !head.next) return head;

    let middle = head;
    let fastNode = head;

    while(fastNode !== null && fastNode.next !== null) {
        middle = middle.next;
        fastNode = fastNode.next.next;
    }

    return middle;
};
