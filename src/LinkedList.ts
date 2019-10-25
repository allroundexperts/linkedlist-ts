import ListNode from "./ListNode";

export default class LinkedList {
  private headNode: ListNode = new ListNode();
  private tailNode: ListNode = this.headNode;
  private nodeCount: number = 1;

  constructor(headNodeData: any) {
    this.headNode.setData(headNodeData);
  }

  public insertNode(data: any, index?: number): void {
    const newNode = new ListNode().setData(data);

    if (!index) {
      this.tailNode.setNextLink(newNode);
      this.tailNode = newNode;
    } else {
      newNode.setNextLink(this.getNode(index));
      this.getNode(index - 1).setNextLink(newNode);
    }
    this.nodeCount++;
  }

  public removeNode(index: number): void {
    if (this.nodeCount === 1)
      throw new Error("List must have atleast one node remaining.");
    const previousNode = this.getNode(index - 1);
    const nextNode = this.getNode(index + 1);
    previousNode.setNextLink(nextNode);
    this.nodeCount--;
  }

  public getNode(index: number): ListNode {
    let node = this.headNode;
    for (let i = 0; i < index; i++) {
      if (!node.next()) throw new Error("Out of range error.");
      node = node.next();
    }
    return node;
  }

  public countNodes(): number {
    return this.nodeCount;
  }

  public getLastNode(): ListNode {
    return this.tailNode;
  }

  public search(comparator: Function): ListNode {
    let node = this.headNode;
    let end = false;
    while (!end) {
      if (comparator(node.getData())) break;
      if (!node.next()) {
        end = true;
        break;
      }
      node = node.next();
    }
    if (end) throw new Error("Nothing found.");
    return node;
  }
}
