class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode; //establish a connect to the new tail then move the tail pointer to the right.
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    var poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev; //move the tail left and sever ties from the old tail.
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
  shift() {
    if (this.length === 0) return undefined;
    var oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next; //move the head pointer to the right and sever ties to the left.
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  unshift(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head; //establish connection to the left of the head to the newNode. Move the head pointer to the newNode.
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    var count, current;
    if (index <= this.length / 2) {
      count = 0;
      current = this.head;
      while (count !== index) {
        //keep moving the current pointer over until the count is equal to it (traverse the list until index is reached).
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }
  set(index, val) {
    var foundNode = this.get(index); //use get to find the current index and change the val.
    if (foundNode != null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    var newNode = new Node(val); //assign variables to the nodes before and after the index using the get function.
    var beforeNode = this.get(index - 1);
    var afterNode = beforeNode.next;

    (beforeNode.next = newNode), (newNode.prev = beforeNode); //establish both two way connections between the before and after nodes.
    (newNode.next = afterNode), (afterNode.prev = newNode);
    this.length++;
    return true;
  }
}

removeEventListener(index){
    if(index < 0 || index > this.length) return false;
    if(index === 0) return this.shift(); 
    if(index === this.length -1) return this.pop();
    let removedNode = this.get(index)
    removedNode.prev.next = removedNode.next; //establish new connections between previous and next nodes. delete old connections to the removed node.
    removedNode.next.prev = removedNode.prev; 
    removedNode.next = null; 
    removedNode.prev = null;
    this.length--; 
    return removedNode;
}

