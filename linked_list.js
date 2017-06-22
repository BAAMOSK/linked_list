class LinkedList {
      constructor() {
          this.length = 0;
          this.head = null;
      }
    insert(index, value) {

        if (index < 0 || index > this.length) {
            throw new Error('Index error');
        }

        const newNode = {
            value
        };

        if (index == 0) {
            newNode.next = this.head;
            this.head = newNode;
        }
        else {
            // Find the node which we want to insert after
            const node = this._find(index - 1);
            newNode.next = node.next;
            node.next = newNode;
        }

        this.length++;
    }


    //this is only used in this class
    _find(index) {
      //locates the head
        let node = this.head;
        //traverses n times
        for (let i=0; i<index; i++) {
            node = node.next;
        }
        return node;
    }

    remove(index) {
      //safety check doesn't allow access to non-existing node
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        //finds head
        if (index == 0) {
            this.head = this.head.next;
        }
        else {
            // Find the node before the one we want to remove
            const node = this._find(index - 1);
            //this changes the pointer
            node.next = node.next.next;
        }
        this.length--;
    }

}

function size(list){
  let node = list.head;
  let counter = 1;
  while(node.next !== null){
    counter++;
    node = node.next;
  }
  return counter;
}


function isEmpty(list){
  let node = list.head;
  if(node === null){
    return true;
  } else {
    return false;
  }
}

function findPrevious(list, index){
  let node = list.head;
  // let previous = null;
  for(let i = 0; i < index - 1; i++){
    // previous = node;
    node = node.next;

  }
  return node;
}

function display(list) {
  return JSON.stringify(list, null, 2);
}

function findLast(list){
  let node = list.head;
  while(node.next !== null){
    node = node.next;
  }
  return node;
}


//traverses to tail
//finds middle based on half of length
function getMiddle(list) {
  let node = list.head;
  let middle = Math.floor(size(list)/2);

  for(let i = 0; i < middle; i++) {
    node = node.next;
  }
  return node;
  //traverse to the next one
  //incrememnt counter
  //return counter/2

  //return list._find(Math.floor(counter/2));
}

function findThirdFromTail(list){
  let node = list.head;
  let counter = 0;
  while(node.next !== null){
    counter++;
    node = node.next;

  }
  return list._find(counter-3);
}

//iterate through the linked list and push values to an array
//iterate through the array and push the values into the linked list in reverse order

function reverseList(list){
  let node = list.head;
  let reversed = new LinkedList();
  while(node.next !== null){
    reversed.insert(0, node.value);
    node = node.next;
  }
  return reversed;
}

function findTail(list){
  return list._find(list.length - 1);
}

function isCycle(list) {

  var flag = Math.random();
  console.log(flag);
  // let current = list.head;
  let node = list.head;
  // let length = size(list);
  while(node !== null) {
    if(node.value === flag) {
      return true;
    }
    node.value = flag;
    node = node.next;
  }

  return false;
  // for(let i = 1; i <= length; i++) {
  //   node = node.next;
  //   if(node.next === head) {
  //     return true;
  //   }
  // }
  // return node === null ? false :  true;
}

const list = new LinkedList();
list.insert(0,5);
list.insert(1,6);
// list.insert(2,7);
list.insert(2,'this is the middle');
list.insert(3,'Yolo');
list.insert(4,7);
// list.insert(5,7)
/////////////list.head.next.next.next.next = list.head;
// console.log(list.head.next.next.next.next);
//console.log(isCycle(list));
// list.remove(3);
// const result = JSON.stringify(list, null, 4);
// console.log(list._find(3));
// console.log(getMiddle(list));
// console.log(findThirdFromTail(list));
// console.log(JSON.stringify(reverseList(list)));
// console.log(list);
// console.log(findPrevious(list, 3));
// console.log(display(list));
// console.log(findLast(list));
// console.log(getMiddle(list));

//console.log(isCycle(list));

class DoubleLinkedList {
      constructor() {
          this.length = 0;
          //first pointer
          this.head = null;
          //second pointer
          this.tail = null;
      }
    insert(index, value) {
        if (index < 0 || index > this.length) {
            throw new Error('Index error');
        }

        const newNode = {
            value,
            next:null,
            prev:null
        };

        if(this.length === 0){
          newNode.next = null;
          newNode.prev = null;
          this.head = newNode;
          this.tail = newNode;

        }
        //if inserting at the head
        else if (index == 0) {
          var currentHead = this.head;
          // var currentTail = this.tail;
          this.head = newNode;
          this.head.next = currentHead;
          this.head.prev = this.tail;
          this.tail.next = this.head;
          // while(!(currentNode.next == null)) {
          //   currentNode = currentNode.next;
          // }
            newNode.next = this.head;
            newNode.prev = null;
            this.head.prev = newNode;
            this.head = newNode;
            // this.tail = null;
        } //if inserting with an element on either side
        else if (this._find(index)){
            // Find the node which we want to insert after
            const node = this._find(index - 1);
            // Find the node which is already at the index we want to insert
            const node1 = this._find(index);
            newNode.next = node1;
            newNode.prev = node;
            node1.prev = newNode;
            node.next = newNode;
        } else {
          //if inserting at the tail
          const node = this.tail;//this is last node
          //old node needs to point to prev
          //node.prev = node.head;
          newNode.prev = node;// old node becomes newNode's prev pointer
          node.next = newNode;// old node points to ----> newNode
          newNode.next = null;// newNode points ----> null
          this.tail = newNode;// newNode === tail
        }

        this.length++;
    }
    _find(index) {
      //locates the head
        let node = this.head;
        //traverses n times
        for (let i=0; i<index; i++) {
            node = node.next;
        }
        return node;
    }
}
const doubleLists = new DoubleLinkedList();
doubleLists.insert(0,'hello');
doubleLists.insert(0,'world');
doubleLists.insert(0, 24);
// doubleLists.insert(3,'yolo');

console.log(doubleLists);
// console.log(doubleLists.head.next.prev);