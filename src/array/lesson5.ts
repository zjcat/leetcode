/**
 * @description 用两个栈实现一个队列
 */

export default class Myqueue {
  private stack1: number[] = [];
  private stack2: number[] = [];

  add (n: number) {
    this.stack1.push(n)
  }
  deleted (): number | null {
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
  length () {
    return this.stack1.length
  }
}
