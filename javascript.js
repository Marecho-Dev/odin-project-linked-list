//linked lists
//in javascript, arrays aren't limited to a certain size and insertion and deletion
//be done trivially

//linear collection of data elements called nodes that "point" to the next node by means of a pointer
//each node holds a single element and a link or pointer to the next node in the list
//head node - first node in the list
//tail node - last node in the list
//[NODE(head)]->[NODE]->[NODE(tail)]->null

//ASSIGNMENT
//two classes or factories
//LinkedList Class/Factory which represents the full list
//Node class/factory which contains a value property and a link to the nextNode, set both to null by default

// Build the following functions in your linked list class:

// append(value) adds a new node containing value to the end of the list
// prepend(value) adds a new node containing value to the start of the list
// size returns the total number of nodes in the list
// head returns the first node in the list
// tail returns the last node in the list
// at(index) returns the node at the given index
// pop removes the last element from the list
// contains(value) returns true if the passed in value is in the list and otherwise returns false.
// find(value) returns the index of the node containing value, or null if not found.
// toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
// insertAt(value, index) that inserts a new node with the provided value at the given index.
// removeAt(index) that removes the node at the given index.

// linked list in javascript looks like the following
// const list = {
//     head: {
//         value: 6
//         next: {
//             value: 10
//             next: {
//                 value: 12
//                 next: {
//                     value: 3
//                     next: null
//                     }
//                 }
//             }
//         }
//     }
// };

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //append(value) adds a new node containing value to the end of the list
  append(data) {
    let temp = this.head;
    while (temp.next !== null) {
      temp = temp.next;
    }
    temp.next = new Node(data);
    this.size++;
    return this.head;
  }
  //adds a new node containing value to the start of the list. Pass this.head to the next argument as we need to move rest of list over
  prepend(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }
  //return current size of linked list
  getSize() {
    return this.size;
  }
  //return thes data at the head of the LinkedList
  getHead() {
    return this.head;
  }

  getTail() {
    let temp = this.head;
    while (temp.next !== null) {
      temp = temp.next;
    }
    return temp;
  }

  getIndex(x) {
    let temp = this.head;
    let index = 0;
    while (index < x) {
      temp = temp.next;
      index++;
    }
    return temp;
  }
  //removes last element
  pop() {
    let tempLL = new LinkedList();
    let temp = this.head;
    let index = 0;
    while (temp.next !== null) {
      if (index > 0) {
        tempLL.append(temp.data);
        index++;
      } else {
        tempLL.prepend(temp.data);
        index++;
      }
      temp = temp.next;
    }
    this.size -= 1;
    this.head = tempLL.head;
    return this.head;
  }

  //checks to see if the linked list contains x
  contains(x) {
    let temp = this.head;
    while (temp.data !== null) {
      if (temp.data == x) {
        return true;
      }
      temp = temp.next;
    }
    return false;
  }

  find(x) {
    let temp = this.head;
    let index = 0;
    while (temp.next !== null) {
      if (temp.data == x) {
        return index;
      }
      index += 1;
      temp = temp.next;
    }
    if (temp.data == x) {
      return index;
    }
    return null;
  }

  toString() {
    let temp = this.head;
    let string = "";
    while (temp.next !== null) {
      string += "(" + temp.data + ") -> ";
      temp = temp.next;
    }
    string += "(" + temp.data + ") -> Null";
    return string;
  }

  insertAt(data, index) {
    let temp = this.head;
    let tempLL = new LinkedList();
    for (let i = 0; i < this.size + 1; i++) {
      if (index == i) {
        tempLL.prepend(data);
      } else if (i == 0) {
        tempLL.prepend(temp.data);
        temp = temp.next;
      } else if (i == index) {
        tempLL.append(data);
      } else {
        tempLL.append(temp.data);
        temp = temp.next;
      }
    }
    this.size++;
    this.head = tempLL.head;
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const ll = new LinkedList();
ll.prepend(100);
ll.append(200);
ll.append(200);
ll.append(300);
console.log(ll);
console.log(ll.getSize());
console.log(ll.getHead());
console.log(ll.getTail());
console.log(ll.getIndex(1));
console.log(ll.contains(100));
console.log(ll.find(100));
console.log(ll.pop(300));
console.log(ll.toString());
ll.insertAt(500, 0);
console.log(ll);
console.log(ll.toString());
