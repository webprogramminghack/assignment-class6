// The result should be like this:

// 54321
// 5432
// 543
// 54
// 5

// start code here
for (let x = 0; x < 5; x++) {
  let b = '';
  for (let y = 5; y > 0; y--) {
    if (y > x) {
      b += y;
    }
  }
  console.log(b);
}
