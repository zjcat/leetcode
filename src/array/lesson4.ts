/**
 * @description 数组旋转K步 [1,2,3,4,5] =>2步 [4,5,1,2,3]
 */

// 使用pop() unshift() 时间复杂度 o(n^2)
export function rotatel (arr: number[], k: number): number[] {
  const length = arr.length
  if (!k || length === 0) return arr
  const step = Math.abs(k % length) // 取绝对值 k>length (k%length)所要移动的步数
  for (let i = 0; i < step; i++) {
    const n = arr.pop()// 此方法会改变数组长度 返回被删除的数组
    if (n) {
      arr.unshift(n) // 该方法返回新长度 该方法会改变原数组 数组为有序结构 unshift操作非常慢 shift splice 0(n)
    }
  }
  return arr
}

// 使用拆分数据和合并数据 slice(b,e) 返回一个新的数组对象，原始数组不会被改变 从哪里开始取几位
export function rotatel2 (arr: number[], k: number): number[] {
  const length = arr.length
  if (!k || length === 0) return arr
  const step = Math.abs(k % length) // 取绝对值 k>length (k%length)所要移动的步数
  const part1 = arr.slice(-step)
  const part2 = arr.slice(0, length - step)
  // const newPart = [...part1,...part2] //性能不比concat好
  const newPart = part1.concat(part2) // 此方法不会改变现有数组 返回新的数组
  return newPart
}
