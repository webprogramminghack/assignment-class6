// The result should be like this:

// 12345;
// 1234;
// 123;
// 12;
// 1;

// start code here

for (let x=5; x>= 1; x--) {
  let combined = '';
  for (let y = 1; y<=x; y++) {
    combined += y;
  }
  console.log(combined);
}
