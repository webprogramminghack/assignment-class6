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
for (let x = 0; x < 5; x++) {
  let combined = '';
  for (let y = x; y < 5; y++) {
      combined += (y % 2 === 0 ? '1 ' : '0 ');
  }
  console.log(combined);
}