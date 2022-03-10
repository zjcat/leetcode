/**
 * @description 用两个栈实现一个队列 用链表是先队列
 */

/**
 * 两个栈实现队列
 */
export default class Myqueue {
  private stack1: number[] = [];
  private stack2: number[] = [];

  add(n: number) {
    this.stack1.push(n)
  }
  deleted(): number | null {
    let res
    const stack1 = this.stack1
    const stack2 = this.stack2
    while (stack1.length) {
      const n = stack1.pop()
      if (n) {
        stack2.push(n)
      }
    }
    res = stack2.pop()
    while (stack2.length) {
      const n = stack2.pop()
      if (n) {
        stack1.push(n)
      }
    }
    return res || null
  }
  length() {
    return this.stack1.length
  }
}
interface IListNode {
  value: number;
  next?: IListNode|null
}
//使用链表实现队列
export class MyQueueLink {
  private head: IListNode | null = null
  private tail: IListNode | null = null
  private len = 0
  private link : IListNode | null = null

  /**
   * 入队，在 tail 位置
   * @param n number
   */
  add(n: number) {
      const newNode: IListNode = {
          value: n,
          next: null,
      }
      const num: IListNode = {
        value: n,
        next: null,
    }
   console.log(JSON.stringify(newNode), JSON.stringify(num),{...newNode})
      // 处理 head
      if (this.head == null) {
          this.head = newNode
      }
      // 处理 tail
      const tailNode = this.tail //{value:1;next:null}
      if (tailNode) {
          tailNode.next = newNode //{value:1,next:{value:2,next:null}}
      }
      this.tail = newNode //{value:2,next:null}
      this.link = tailNode;
      // 记录长度
      this.len++
  }

  /**
   * 出队，在 head 位置
   */
  delete(): number | null {
      const headNode = this.head
      if (headNode == null) return null
      if (this.len <= 0) return null

      // 取值
      const value = headNode.value

      // 处理 head
      this.head = headNode?.next
      console.log(this.head)
      // 记录长度
      this.len--

      return value
  }

  get length(): number {
      // length 要单独存储，不能遍历链表来获取（否则时间复杂度太高 O(n)）
      return this.len
  }
  get linkVal(): IListNode | null{
    return this.link
  }
}

let queue = new MyQueueLink();
queue.add(1)
queue.add(2)
queue.add(3)
queue.add(4)
console.log(queue.length)
console.log(queue.linkVal)