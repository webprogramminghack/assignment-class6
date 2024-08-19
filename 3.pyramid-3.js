// The result should be like this:

// 54321
// 4321
// 321
// 21
// 1

// start code here
for (let a = 5; a >= 1; a--) {
  let result = '';
  for (let b = a; b >= 1; b--) {
    result += b;
  }
  console.log(result);
}
