// The result should be like this:

// 12345;
// 1234;
// 123;
// 12;
// 1;

// start code here
for (let i = 1; i <= 5; i++) {
  let combined = '';
  for (let j = 1; j <= 6 - i; j++) {
    combined += j;
  }
  console.log(combined);
}
