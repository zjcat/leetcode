import { rotatel, rotatel2 } from '../../src/array/lesson4'

describe('数组旋转K步', () => {
  it('正常情况下的旋转', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7]
    const k = 3
    // const res = rotatel(arr, k)
    const res2 = rotatel2(arr, k)
    // expect(res).toEqual([5, 6, 7, 1, 2, 3, 4])
    expect(res2).toEqual([5, 6, 7, 1, 2, 3, 4])
  })
  it('数组为空', () => {
    // const res = rotatel(arr, k)
    const res2 = rotatel([], 3)
    // expect(res).toEqual([5, 6, 7, 1, 2, 3, 4])
    expect(res2).toEqual([])
  })
  it('k是负值', () => {
    // const res = rotatel(arr, k)
    const res2 = rotatel([1, 2, 3, 4, 5, 6, 7], -3)
    // expect(res).toEqual([5, 6, 7, 1, 2, 3, 4])
    expect(res2).toEqual([5, 6, 7, 1, 2, 3, 4])
  })
})
