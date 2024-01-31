// Definition of a ListNode class representing a node in a linked list
class ListNode {
    constructor (value, next = null) {
        this.value = value;
        this.next = next;
    }
}

// Function to reverse a linked list in-place
function reverseLinkedList(head) {
    let prev = null;
    let current = head;
    let nextNode = null;

// Traverse the list and reverse the links between nodes
    while (current !== null) {
        nextNode = current.next; //save the next node
        current.next = prev;
        prev = current;
        current = nextNode;
    }
    
    return prev;    //prev is now the ew head of the reversed node
}  

