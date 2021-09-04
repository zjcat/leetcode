/**
 * @description 给定一个字符串s，计算具有相同数量 0 和 1 的非空（连续）子字符串的数量，并且这些子字符串中的所有 0 和所有 1 都是连续的。

 * 重复出现的子串要计算它们出现的次数。
 * @author zjcat
 */
const pair = function (str) {
  const d = []
  let t = str[0]
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      t = t + str[i + 1]
    } else {
      d.push(t)
      t = str[i + 1]
    }
  }
  return d
}
export default (str) => {
  const match = (newstr) => {
    // newstr 0011101101
    let j = pair(newstr)[0] // => 00
    let o = (j[0] ^ 1).toString().repeat(j.length) // => 11
    let reg = `${j}${o}`
    const m = newstr.slice(0, reg.length)
    if (m === reg) {
      return reg
    } else {
      return ''
    }
  }
  const arr = []
  for (let i = 0, len = str.length - 1; i < len; i++) {
    // str 10101
    let sub = match(str.slice(i)) //= > match(10101) match(0101) match(101)
    if (sub) {
      arr.push(sub)
    }
  }
  return arr
}

// export default (str) => {
//   // 建立数据结构，堆栈，保存数据
//   let r = []
//   // 给定任意子输入都返回第一个符合条件的子串
//   let match = (str) => {
//     let j = str.match(/^(0+|1+)/)[0]
//     let o = (j[0] ^ 1).toString().repeat(j.length)
//     let reg = new RegExp(`^(${j}${o})`)
//     if (reg.test(str)) {
//       return RegExp.$1
//     } else {
//       return ''
//     }
//   }
//   // 通过for循环控制程序运行的流程
//   for (let i = 0, len = str.length - 1; i < len; i++) {
//     let sub = match(str.slice(i))
//     if (sub) {
//       r.push(sub)
//     }
//   }
//   return r
// }
