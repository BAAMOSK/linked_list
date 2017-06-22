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
  let counter = 0;

  while(node.next !== null){
    node = node.next;
    counter++;
  //traverse to the next one
  //incrememnt counter
  //return counter/2
  }
  return list._find(Math.floor(counter/2));
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


const list = new LinkedList();
list.insert(0,5);
list.insert(1,6);
// list.insert(2,7);
list.insert(2,'this is the middle');
list.insert(3,'Yolo');
list.insert(4,7);

// list.remove(3);
// const result = JSON.stringify(list, null, 4);
// console.log(list._find(3));
// console.log(getMiddle(list));
// console.log(findThirdFromTail(list));
// console.log(JSON.stringify(reverseList(list)));
// console.log(list);
// console.log(findPrevious(list, 3));
console.log(display(list));
console.log(findLast(list));