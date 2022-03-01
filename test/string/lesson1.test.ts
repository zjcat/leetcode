import lesson1 from '../../src/string/lesson1'

test('期望返回结果是调换的字符串', () => {
  const string = "Let's take LeetCode contest"
  const exstring = "s'teL ekat edoCteeL tsetnoc"
  const res = lesson1(string)
  expect(res).toBe(exstring)
})
