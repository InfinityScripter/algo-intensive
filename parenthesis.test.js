
const isValid = (str) => {
  const stack = [];
  const open = {
    '{': '}',
    '[': ']',
    '(': ')',
  };
  const closed = {
    '}': true,
    ']': true,
    ')': true,
  };

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (open[char]) {
      stack.push(char);
    } else if (closed[char]) {
      if (open[stack.pop()] !== char) return false;
    }
  }
  let result = stack.length === 0;
  return result;
}

console.log(isValid('(){}[]')); // true
console.log(isValid('({[]})')); // true  
console.log(isValid('({[}])')); // false

describe('Valid Parenthesis', () => {
    test('Valid Parenthesis', () => {
        expect(isValid('()')).toBe(true)
        expect(isValid('()[]{}')).toBe(true);
        expect(isValid('(]')).toBe(false);
        expect(isValid('(())([{}()]{})')).toBe(true);
    });
});