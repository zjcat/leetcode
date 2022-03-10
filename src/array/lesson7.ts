/**
 * @description 二分查找
 */

// 使用循环
export function findTowNumbers1 (arr: number[], target: number): number {
  if (arr.length === 0) return -1
  let starIndex = 0
  let endIndex = arr.length - 1
  while (starIndex < endIndex) {
    let minIndex = Math.floor((starIndex + endIndex) / 2)
    if (arr[minIndex] === target) {
      return minIndex
    }
    if (arr[minIndex] < target) {
      starIndex = minIndex + 1
    } else if (arr[minIndex] > target) {
      endIndex = minIndex - 1
    }
  }
  return -1
}

// 使用递归
export function findTowNumbers2 (arr: number[], target: number): number {
  if (arr.length === 0) return -1
  let starIndex = 0
  let endIndex = arr.length - 1
  if (starIndex <= endIndex) {
    let minIndex = Math.floor((starIndex + endIndex) / 2)
    if (arr[minIndex] === target) {
      return minIndex
    }
    if (arr[minIndex] < target) {
      return findTowNumbers2(arr.slice(minIndex, endIndex), target)
    } else if (arr[minIndex] > target) {
      return findTowNumbers2(arr.slice(starIndex, minIndex), target)
    }
  }
  return -1
}
// 功能测试
const arr = []
for (let i = 11; i < 100; i++) {
  arr.push(i)
}
console.log(findTowNumbers2(arr, 99))
// console.log(findTowNumbers2(arr, 55))
