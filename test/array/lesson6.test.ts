import { reverseLinkList, createLinkList } from '../../src/array/lesson6'

describe('单向链表', () => {
  it('只有一个值', () => {
    const link = reverseLinkList({ value: 100 })
    expect(link).toEqual({ value: 100 })
  })
  it('正常的长链表', () => {
    const link1 = createLinkList([1, 200, 300, 400])
    const link2 = reverseLinkList(link1)
    expect(link2).toEqual({ value: 400, next: { value: 300, next: { value: 200, next: { value: 1 } } } })
  })
})
