// The result should be like this:

// 54321
// 5432
// 543
// 54
// 5

// start code here
const rows = 5;

for (let i = 0; i < rows; i++) {
  let line = '';

  for (let j = rows; j > i; j--) {
    line += j;
    }

console.log(line);
}
