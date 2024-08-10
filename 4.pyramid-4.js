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
const num = 5;

for (let i = num; i >= 1; i--) {
  let line = '';

  for (let j = 0; j < i; j++) {
    const char = (i - j) % 2;
    line += `${char} `;
  }
  
  console.log(line);
}