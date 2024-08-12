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

for (let x = 5; x >= 1; x--) {
  let p = '';
  for (let y = x; y >= 1; y--) {
    p += y % 2;
    p += ' ';
  }
  console.log(p);
}
