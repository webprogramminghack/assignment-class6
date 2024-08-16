// The result should be like this:

// 54321
// 4321
// 321
// 21
// 1

// start code here

let numA = 1;
let n = '';
for (let i = 5; i >= numA; i--) {
  let n = '';
    for (let b = i; b >= numA; b--) {
      n += b;
    }
  console.log(n);
  //console.log(i);
}
