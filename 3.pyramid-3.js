// The result should be like this:

// 54321
// 4321
// 321
// 21
// 1

// start code here
const rows = 5;

for (let i = 0; i < rows; i++) {
  let line = '';
  for (let j = rows - i; j > 0; j--){
    line += j;
  }
console.log(line);
}