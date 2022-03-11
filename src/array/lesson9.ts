/**
 * @description 斐波拉契数列 从贪心 二分 动态规划 递归的思维 循环实现
 */
/**
 * 递归实现 时间复杂度O(2^n)
 * @param n
 */
// 0 1 1 2 3 5 8 13 21 34 f(n-1)+f(n-2) //n是index f(1) = 0 f(2)= 1
export function finonacci (n:number):number {
  if (n <= 0) return 0
  if (n === 1) return 1
  const n1 = finonacci(n - 1)
  const n2 = finonacci(n - 2)
  return n1 + n2//
}
/**
 * 循环
 * @param n
 */
export function finonacci2 (n:number):number {
  if (n <= 0) return 0
  if (n === 1) return 1
  let nn = 2
  let arr = [0, 1]
  while (nn < n) {
    arr.push(arr[nn - 1] + arr[nn - 2])// 2 1
    nn++
  }
  return arr[n - 1]
}

export function finonacci3 (n:number):number {
  if (n <= 0) return 0
  if (n === 1) return 1
  let n1 = 0
  let n2 = 1
  let res = 0
  for (let i = 2; i <= n; i++) {
    res = n1 + n2
    n1 = n2
    n2 = res
  }
  return res
}
// 性能测试
console.time()
finonacci3(100)
console.timeEnd()
console.time()
finonacci2(100)
console.timeEnd()
