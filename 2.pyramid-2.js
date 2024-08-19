// The result should be like this:

// 12345;
// 1234;
// 123;
// 12;
// 1;

// start code here
'use strict';

for (let a = 5; a >= 1; a--) {
  let result = '';
  for (let b = 1; b <= a; b++) {
    result += b;
  }

  console.log(result);
}
