// The result should be like this:

// 54321
// 4321
// 321
// 21
// 1

// start code here
for (let a = 5; a >= 1; a--) {
  let combined = ''
  for (let b = a; b > 0; b--) {
    combined += b
  }
  console.log(combined);
}