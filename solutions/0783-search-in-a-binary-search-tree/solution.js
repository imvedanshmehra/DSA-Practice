/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    if(val === root.val) return root;

    let current = root;

    while(true) {

        if(val === current.val) return current;

        if(val < current.val) {
            if(current.left) {
                current = current.left
            } else {
                return null;
            }
        } else if(val > current.val) {
            if(current.right) {
                current = current.right
            } else {
                return null
            }
        }
    }
}; 
