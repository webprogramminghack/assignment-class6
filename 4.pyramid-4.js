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
const rows = 5;
for (let i = 0; i < rows; i++) {
  let line = '';
  for (let j = 0; j < rows -i; j++) {
    line += ((i+j) % 2 === 0 ? '1' : '0') + '';
  }
console.log(line.trim());
}