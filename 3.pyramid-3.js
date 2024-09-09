// The result should be like this:

// 54321
// 4321
// 321
// 21
// 1

// start code here
for (let x=5; x >=1; x--) {
  let combined = '';
  for (let y = x; y >= 1; y--) {
    combined += y;
  }
  console.log(combined);
}

