export default class ListNode {
  private nextLink: ListNode;
  private data: any;

  public setNextLink(link: ListNode): void {
    this.nextLink = link;
  }

  public next(): ListNode {
    return this.nextLink;
  }

  public setData(data: any): ListNode {
    this.data = data;
    return this;
  }

  public getData(): any {
    return this.data;
  }
}
