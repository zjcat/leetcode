/**
 * @description 栈的应用 先进后出 {[]()}字符匹配
 */

export function codeCheckout (str: string): boolean {
  const newArr = []
  for (let i = 0; i < str.length; i++) {
    const n = str[i]
    console.log(n, 'n')
    switch (n) {
      case '{':
        newArr.push('}')
        break
      case '[':
        newArr.push(']')
        break
      case '(':
        newArr.push(')')
        break
      default:
        if (n !== newArr.pop()) {
          return false // 跳出整个循环
        }
    }
  }
  return newArr.length === 0
}
console.log(codeCheckout('{[)]}}'))
