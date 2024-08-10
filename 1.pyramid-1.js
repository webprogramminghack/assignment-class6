// The result should be like this:

// 54321
// 5432
// 543
// 54
// 5

// start code here
const num = 5;

for (let i = 1; i <= num; i++) {
  let line = '';

  for (let j = num; j >= i; j--) {
    line += j;
  }

  console.log(line);
}
