import LinkedList from "./LinkedList";

describe("Testing LinkedList", () => {
  const linkedList = new LinkedList("Index 0");
  it("Inserts into the list", () => {
    linkedList.insertNode("Index 1");
    linkedList.insertNode("Index 1 - New", 1);
  });

  it("Reads the list", () => {
    expect(linkedList.getNode(1).getData()).toBe("Index 1 - New");
    expect(linkedList.getLastNode().getData()).toBe("Index 1");
  });

  it("Searches the list", () => {
    const comparator = (data: string) => data === "Index 1 - New";
    expect(linkedList.search(comparator).getData()).toBe("Index 1 - New");
  });

  it("Removes node and counts the remaining nodes", () => {
    expect(linkedList.countNodes()).toBe(3);
    linkedList.removeNode(1);
    expect(linkedList.countNodes()).toBe(2);
  });
});
