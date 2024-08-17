// The result should be like this:

// 12345;
// 1234;
// 123;
// 12;
// 1;

// start code here
for (let a = 5; a >= 1; a--) {
  let combined = ''
  for (let b = 1; b <= a; b++) {
    combined += b
  }
  console.log(combined);
}

// const coba = [5, 4, 3, 2, 1];
// coba.map(a => console.log(Array.from({ length: a }, (_, b) => b + 1).join('')))