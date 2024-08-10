// The result should be like this:

// 54321
// 4321
// 321
// 21
// 1

// start code here
const num = 5;

for (let i = num; i >= 1; i--) {
  let line = '';

  for (let j = 0; j < i; j++) {
    const char = i - j;
    line += char;
  }
  
  console.log(line);
}