// The result should be like this:

// 12345;
// 1234;
// 123;
// 12;
// 1;

// start code here

for (let x = 1; x <= 5; x++) {
  let p = '';
  for (let y = 1; y <= 6 - x; y++) {
    p += y;
  }
  console.log(p);
}
