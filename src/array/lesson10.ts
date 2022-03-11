/**
 * @description [1,0,2,0,11,0,3] => [1,2,11,3,0,0,0]
 */

/**
 * 移动0到数组末尾 push+splice O(n^2)
 * @param arr
 */
export function moveZero1 (arr:number[]):number[] {
  let length = arr.length
  if (length === 0) return arr
  let moveLength = 0
  for (let i = 0; i < length - moveLength; i++) {
    if (arr[i] === 0) {
      arr.push(0)
      arr.splice(i, 1) // 消耗性能
      i--
      moveLength++
    }
  }
  return arr
}
/**
 * 双指针方法 O(n)
 * @param arr
 */
export function moveZero2 (arr:number[]):number[] {
  let length = arr.length
  if (length === 0) return arr
  let zeroComment = arr.indexOf(0)
  let notZeroComment = zeroComment + 1 // 指向非零

  for (let i = notZeroComment; i < length; i++) {
    if (arr[i] !== 0) {
      arr[zeroComment] = arr[i]
      arr[i] = 0
      zeroComment = arr.indexOf(0)
      notZeroComment = i
    }
  }
  return arr
}
export function moveZero3 (arr:number[]):number[] {
  let length = arr.length
  if (length === 0) return arr
  let zeroComment = -1
  let i

  for (i = 0; i < length; i++) {
    if (arr[i] === 0 && zeroComment < 0) {
      zeroComment = i
    }
    if (arr[i] !== 0 && zeroComment >= 0) {
      const n = arr[i]
      arr[i] = arr[zeroComment]
      arr[zeroComment] = n
      zeroComment++
    }
  }
  return arr
}
console.time()
console.log(moveZero1([1, 0, 2, 0, 11, 0, 3, 0, 0, 6]))
console.timeEnd()
console.time()
console.log(moveZero3([1, 0, 2, 0, 11, 0, 3, 0, 0, 6]))
console.timeEnd()
console.time()
console.log(moveZero2([1, 0, 2, 0, 11, 0, 3, 0, 0, 6]))
console.timeEnd()
