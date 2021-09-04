/**
 * @description 给定一个数组 排列组合+数字相加
 * @author zjcat
 */
// const arr = [1,2,3,4]

const srrKz = function (arr, num) {
  const itemArr = []
  arr.forEach(element => {
    if (element.indexOf('+') !== -1) {
      const reg = element.split('+')
      let numt = 0
      for (let i = 0; i < reg.length; i++) {
        numt = numt + reg[i]
      }
      if (numt === num) {
        itemArr.push(element)
      }
    } else {
      if (Number(element) === num) {
        itemArr.push(element)
      }
    }
  })
  return itemArr
}
const count = function (arr, num) {
  const allArr = []
  let reg = []
  for (let i = 0, leng = arr.length; i < leng; i++) {
    allArr.push(`${arr[i]}`)
    for (let t = 0, lengt = reg.length; t < lengt; t++) {
      allArr.push(`${allArr[t]} + ${arr[i]}`)
    }
    reg = [...allArr]
  }
  return srrKz(reg, num)
}
export default count
