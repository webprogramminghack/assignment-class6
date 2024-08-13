// The result should be like this:

// 54321
// 4321
// 321
// 21
// 1

// start code here
for (let i = 5; i >= 1; i--) {
  let line = '';
  for (let j = i; j >= 1; j--) {
    line += j;
  }
  console.log(line);
}
