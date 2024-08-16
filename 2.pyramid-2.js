// The result should be like this:

// 12345;
// 1234;
// 123;
// 12;
// 1;

// start code here
let numA = 1;
let n = '';
for (let i = 5; i >= numA; i--) {
  let n = '';
    for (let b = numA; b <= i; b++) {
      n += b;
    }
  console.log(n);
  //console.log(i);
}