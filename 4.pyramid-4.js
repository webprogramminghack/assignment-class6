// The result should be like this:

// 1 0 1 0 1
// 0 1 0 1
// 1 0 1
// 0 1
// 1

// Tips:
// You can use modulus operator
// You can use ' ' to add space between numbers

// start code here
for (let a = 5; a >= 1; a--) {
  let combined = ''
  for (let b = a; b > 0; b--) {
    combined += (b % 2 == 0) ? ' 0' : ' 1'
  }
  console.log(combined);
}