/**
 * @description 二叉搜索树
 */
interface ItreeNode {
  value: number;
  left: ItreeNode | null;
  right: ItreeNode | null
}

const tree: ItreeNode = {
  value: 5,
  left: {
    value: 3,
    left: {
      value: 2,
      left: null,
      right: null
    },
    right: {
      value: 4,
      left: null,
      right: null
    }
  },
  right: {
    value: 7,
    left: {
      value: 6,
      left: null,
      right: null
    },
    right: {
      value: 8,
      left: null,
      right: null
    }
  }
}

/**
 * 前序遍历
 * @param bst
 */
export function preOrderTraverse (bst: ItreeNode, arr: number[]): number[] | null {
  if (bst == null) return null
  arr.push(bst.value)
  if (bst.left) {
    preOrderTraverse(bst.left, arr)
  }
  if (bst.right) {
    preOrderTraverse(bst.right, arr)
  }

  return arr || null
}

/**
 * 中序遍历
 * @param bst
 * @param arr
 */
export function inOrderTraverse (bst: ItreeNode, arr: number[]): number[] | null {
  if (bst == null) return null

  if (bst.left) {
    inOrderTraverse(bst.left, arr)
  }
  arr.push(bst.value)
  if (bst.right) {
    inOrderTraverse(bst.right, arr)
  }

  return arr || null
}

/**
 * 后续遍历
 * @param bst
 * @param arr
 */
export function postOrderTraverse (bst: ItreeNode, arr: number[]): number[] | null {
  if (bst == null) return null
  if (bst.left) {
    postOrderTraverse(bst.left, arr)
  }
  if (bst.right) {
    postOrderTraverse(bst.right, arr)
  }
  arr.push(bst.value)
  return arr || null
}

/**
 * 二叉搜索树第K小值
 */
export function getKthValue (tree:ItreeNode, k:number):number |null {
  const arr = inOrderTraverse(tree, [])
  return arr?.[k - 1] || null
}

console.log(getKthValue(tree, 3))
