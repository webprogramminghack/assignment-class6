// The result should be like this:

// 1 0 1 0 1
// 0 1 0 1
// 1 0 1
// 0 1
// 1

// Tips:
// You can use modulus operator
// You can use ' ' to add space between numbers

// start code here

let numA = 1;
let n = '';
let mod = 2;
for (let i = 5; i >= numA; i--) {
    let n = '';
    for (let b = numA; b <= i; b++) {
      if ((i + b) % mod === 0) {
        n += '1 ';
      } else {
        n += '0 ';
      }
    }
    console.log(n);
  }
