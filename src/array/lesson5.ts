/**
 * @description 用两个栈实现一个队列 用链表是先队列
 */

 /**
  * 两个栈实现队列
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
interface IlinkNode {
  vale:number;
  next?:IlinkNode
}
//使用链表实现队列
export class ListQueue{
  private len:number = 0;
  private head:IlinkNode|undefined
  private totle:IlinkNode|undefined
  add(n:number){
    if(!this.totle){
      this.totle = {
        vale:n
      }
      //{value:1}
    }else{
      this.totle = this.totle
     // {value:1,next:{value:2,next:{value:3}}}
    }
    
    
    this.len++
  }
  deleted(){
    this.len--
  }
  lingth(){
    return this.len
  }
}