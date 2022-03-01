/**
 * @description 数据结构=》链式结构
 */
// const list = [{ id: 1, parentId: null }, { id: 2, parentId: null }, { id: 3, parentId: 2 }, { id: 4, parentId: 8 }, { id: 5, parentId: 1 }, { id: 6, parentId: 8 }]

function fun (arr) {
  const a = []
  arr.forEach((ele, index) => {
    const result = map(ele, a, 0)
    if (!result) {
      const o = [{ id: ele.id, childen: [] }]
      const v = ele.parentId ? o : []
      a.push({ id: ele.parentId ? ele.parentId : ele.id, childen: v })
    }
  })
  return a
}
function map (ele, obj) {
  if (obj.length <= 0) {
    return false
  }
  let res = false
  obj.forEach((item, itemindex) => {
    if (ele.parentId === item.id) {
      item.childen.push({ id: ele.id, childen: [] })
      res = true
    } else {
      if (!res) {
        res = map(ele, item.childen)
      }
    }
  })
  return res
}
export default fun
