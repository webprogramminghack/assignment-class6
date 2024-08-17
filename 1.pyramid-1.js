// The result should be like this:

// 54321
// 5432
// 543
// 54
// 5

// start code here
for (let a = 1; a <= 5; a++) {
  let combined = ''
  for (let b = 5; b >= a; b--) {
    combined += b
  }
  console.log(combined);
}