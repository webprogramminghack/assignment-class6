// The result should be like this:

// 54321
// 5432
// 543
// 54
// 5

// start code here

let numA = 5;
let n = '';
for (let i = 0; i < numA; i++) {
    let n = '';
     for (let b = numA; b > i; b--) {
       n += b;
     }
    console.log(n);
    //console.log(i);
  }