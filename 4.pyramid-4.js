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
for (let x = 5; x > 0; x--) {
  let b = '';
  for (let y = x; y > 0; y--) {
    let d = null;
    if(y%2==0){
      d = `0 `;
    } else {
      d = `1 `;
    }
    b+=d
  }
  console.log(b);
}
