// The result should be like this:

// 54321
// 5432
// 543
// 54
// 5

// start code here

for (let x = 1; x <= 5; x++) {
  let p = '';
  for (let y = 5; y >= x; y--) {
    p += y;
  }
  console.log(p);
}
