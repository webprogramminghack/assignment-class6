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
for (let i = 5; i >= 1; i--) {
  let combined = '';
  for (let j = i; j >= 1; j--) {
    combined = combined + (j % 2) + ' ';
  }
  console.log(combined);
}
