/**
 * @description 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
 * @author zjcat
 */
// export default (str) => {
//   return str.split(' ').map(res => {
//     return res.split('').reverse().join('')
//   }).join(' ')
// }

// export default (str) => {
//   return str.split(/\s/g).map(res => {
//     return res.split('').reverse().join('')
//   }).join(' ')
// }

export default (str) => {
  return str.match(/[\S]+/g).map(res => {
    return res.split('').reverse().join('')
  }).join(' ')
}
