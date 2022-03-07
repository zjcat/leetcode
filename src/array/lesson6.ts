/**
 * @description 反向翻转单向链表
 */

interface TlinkListNode {
  value: number,
  next?: TlinkListNode
}
/**
 *
 * @param link 传递单向链表
 * @param prevNode 记录传递的上一个值
 */
export function reverseLinkList (link: TlinkListNode, prevNode?: TlinkListNode): TlinkListNode {
  if (!prevNode && !link.next) {
    return link
  }
  let sendReverseLink: TlinkListNode = {
    value: link.value
  }
  if (prevNode) {
    sendReverseLink.next = prevNode
  }
  if (link.next) {
    return reverseLinkList(link.next, sendReverseLink)
  }
  return sendReverseLink
}
export function reverseLinkListWhile (link: TlinkListNode): TlinkListNode {
  let reserseLink: TlinkListNode | undefined
  let prevNode: TlinkListNode | undefined
  let nextNode: TlinkListNode | undefined = link
  while (nextNode) {
    if (reserseLink && !prevNode) {
      delete reserseLink.next
    }
    if (reserseLink && prevNode) {
      reserseLink.next = prevNode
    }
    reserseLink = prevNode
    prevNode = nextNode
    nextNode = nextNode?.next
  }
  reserseLink!.next = prevNode
  return reserseLink!
}

/**
 * 数组转单向链表
 * @param arr
 */
export function createLinkList (arr: number[]): TlinkListNode {
  const length = arr.length
  if (length === 0) throw new Error('error array empty')
  let curNode: TlinkListNode = {
    value: arr[length - 1]
  }
  if (length === 1) {
    return curNode
  }
  for (let i = length - 2; i >= 0; i--) {
    curNode = {
      value: arr[i],
      next: curNode
    }
  }
  return curNode
}

//链表和数组，那个实现队列更快 链表实现队列
//数组：是连续存储，push很快，shift很慢
//链表：非连续存储，add和delete都很快（但查找很慢）