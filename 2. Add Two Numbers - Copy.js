/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
class ListNode {
  constructor() {
    this.val = null;
    this.next = null;
  }
  // constructor(val, next) {
  //   this.val = val;
  //   this.next = next;
  // }
  push(val) {
    let newNode = new ListNode();
    newNode.val = val;
    console.log("3.", newNode);
    // let newNode = new ListNode(val);
    this.next = newNode;
    console.log("4.", this);
    return this;
  }
  create(arr) {
    let newListNode = new ListNode();
    console.log("1.", newListNode);
    for (let i = 0; i < arr.length; i++) {
      console.log("2.", arr[i]);
      newListNode.push(arr[i]);
    }
    return newListNode;
  }
}
let arr1 = [2, 4, 3];
let arr2 = [5, 6, 4];

let obj1 = new ListNode().create(arr1);
// let obj1 = new ListNode("2");
// let obj2 = new ListNode("3");
// obj1.next = obj2;
console.log(obj1);

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let sum = 0;
  let curr = new ListNode(0, null);
  let result = curr;

  while (l1 || l2) {
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    curr.next = new ListNode(sum % 10);
    curr = curr.next;
    sum = sum > 9 ? 1 : 0;
  }

  // the last carry over val
  if (sum) {
    curr.next = new ListNode(sum);
  }
  return result.next;
};

addTwoNumbers();
