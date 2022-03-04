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
