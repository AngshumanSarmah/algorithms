class LinkListNode {
    value: number;
    next: LinkListNode | null = null; //as we are just creating a node here, so no need to link, so initialize with 'null'
    constructor(value: number) {
        this.value = value;
    }
}

class LinkedList {
    private value: number;
    private length: number = 0;
    private head: LinkListNode | null = null;
    private last: LinkListNode | null = null;

    size() {
        return this.length;
    }

    unshift(value: number) {
        const newNode = new LinkListNode(value);
        if (this.head) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.last = newNode;
        }
        this.length++;
    }

    //for push to be easy we should use the last pointer
    push(value: number) {
        const newNode = new LinkListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.last = newNode;
        }
        else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
    }

    traverse() {
        const values = [];
        if (!this.head) {
            return new Error("Linked List does not exists")
        }
        let currentNode = this.head
        while (currentNode) {
            values.push(currentNode.value);
            currentNode = currentNode.next
        }
        return values;
    }

    search(valueToFind: number) {
        if (!this.head) {
            return "Linked List does not exists.";
        }
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === valueToFind) {
                return currentNode.value;
            }
            currentNode = currentNode.next;
        }
        return "Value does not exists."
    }

    insert(position: number, value: number) {
        //if position does not exists
        //if position exists
        if(position>this.length+1) {
            console.log("Error: not in range");
            return 'Not in range';
        }
        const newNode = new LinkListNode(value);
        if(position === 0) {
            if(this.head) {
                newNode.next = this.head;
                this.head = newNode;
            }
            this.head = newNode;
            this.last = newNode;
        } else if(position+1 === this.length){
            this.last.next = newNode;
            this.last = newNode;
            console.log("IN LAST");
            
        } else {
            //other cases, specific position
            let currNode = this.head;
            let counter = 1;
            while(currNode) {
                if(counter === position-1) {
                    newNode.next = currNode.next;
                    currNode.next = newNode;
                    return;
                }
                counter++;
                currNode = currNode.next;
            }
        }

    }
}

const singleLL = new LinkedList();

// singleLL.unshift(10);
// singleLL.unshift(15);
// singleLL.unshift(20);
// singleLL.unshift(70);


singleLL.push(90)
singleLL.push(5)
singleLL.push(70)
singleLL.push(20)

singleLL.insert(1, 30)
console.log("Linked list: %o", singleLL)
// console.log("Length: ",singleLL.size())
console.log("Values: ", singleLL.traverse());
// console.log("Search value: ", singleLL.search(20));

