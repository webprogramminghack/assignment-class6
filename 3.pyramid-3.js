// The result should be like this:

// 54321
// 4321
// 321
// 21
// 1

// start code here
for (let x = 5; x > 0; x--) {
  let b = '';
  for (let y = x; y > 0; y--) {
    b+=y
  }
  console.log(b)
}
