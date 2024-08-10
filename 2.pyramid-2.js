// The result should be like this:

// 12345;
// 1234;
// 123;
// 12;
// 1;

// start code here
const num = 5;

for (let i = num; i >= 1; i--) {
  let line = '';

  for (let j = 1; j <= i; j++) {
    line += j;
  }
  
  console.log(line);
}