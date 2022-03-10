/**
 * @description 斐波拉契数列
 */
let nd = 1
// 0 1 1 2 3 5 8 13 21 34 f(n-1)+f(n-2) //n是index f(1) = 0 f(2)= 1
export function finonacci (n:number):number {
  if (n <= 0) return 0
  if (n === 1) return 1
  return finonacci(n - 1) + finonacci(n - 2) //
}
console.log(finonacci(10), '形式')
