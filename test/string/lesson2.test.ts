import substr from '../../src/string/lesson2'

test('10101 4 有4个子串：“10”，“01”，“10”，“01”，它们具有相同数量的连续1和0。', () => {
  expect(substr('10101100')).toEqual(['10', '01', '10', '01', '1100', '10'])
})
