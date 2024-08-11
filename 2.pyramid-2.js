// The result should be like this:

// 12345;
// 1234;
// 123;
// 12;
// 1;

// start code here
for (let x = 5; x > 0; x--) {
  let b = '';
  for (let y = 1; y <= 5; y++) {
    if(y<=x){
      b+=y;
    }
  }
  console.log(b)
}
