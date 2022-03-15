var LinkListNode = /** @class */ (function () {
    function LinkListNode(value) {
        this.next = null; //as we are just creating a node here, so no need to link, so initialize with 'null'
        this.value = value;
    }
    return LinkListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.length = 0;
        this.head = null;
        this.last = null;
    }
    LinkedList.prototype.size = function () {
        return this.length;
    };
    LinkedList.prototype.unshift = function (value) {
        var newNode = new LinkListNode(value);
        if (this.head) {
            newNode.next = this.head;
            this.head = newNode;
        }
        else {
            this.head = newNode;
            this.last = newNode;
        }
        this.length++;
    };
    //for push to be easy we should use the last pointer
    LinkedList.prototype.push = function (value) {
        var newNode = new LinkListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.last = newNode;
        }
        else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
    };
    LinkedList.prototype.traverse = function () {
        var values = [];
        if (!this.head) {
            return new Error("Linked List does not exists");
        }
        var currentNode = this.head;
        while (currentNode) {
            values.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return values;
    };
    LinkedList.prototype.search = function (valueToFind) {
        if (!this.head) {
            return "Linked List does not exists.";
        }
        var currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === valueToFind) {
                return currentNode.value;
            }
            currentNode = currentNode.next;
        }
        return "Value does not exists.";
    };
    LinkedList.prototype.insert = function (position, value) {
        //if position does not exists
        //if position exists
        if (position > this.length + 1) {
            console.log("Error: not in range");
            return 'Not in range';
        }
        var newNode = new LinkListNode(value);
        if (position === 0) {
            if (this.head) {
                newNode.next = this.head;
                this.head = newNode;
            }
            this.head = newNode;
            this.last = newNode;
        }
        else if (position + 1 === this.length) {
            this.last.next = newNode;
            this.last = newNode;
            console.log("IN LAST");
        }
        else {
            //other cases, specific position
            var currNode = this.head;
            var counter = 1;
            while (currNode) {
                if (counter === position - 1) {
                    newNode.next = currNode.next;
                    currNode.next = newNode;
                    return;
                }
                counter++;
                currNode = currNode.next;
            }
        }
    };
    return LinkedList;
}());
var singleLL = new LinkedList();
// singleLL.unshift(10);
// singleLL.unshift(15);
// singleLL.unshift(20);
// singleLL.unshift(70);
singleLL.push(90);
singleLL.push(5);
singleLL.push(70);
singleLL.push(20);
singleLL.insert(1, 30);
console.log("Linked list: %o", singleLL);
// console.log("Length: ",singleLL.size())
console.log("Values: ", singleLL.traverse());
// console.log("Search value: ", singleLL.search(20));
