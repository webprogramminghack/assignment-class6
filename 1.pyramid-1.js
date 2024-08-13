// The result should be like this:

// 54321;
// 5432;
// 543;
// 54;
// 5;

// start code here
for (let i = 5; i >= 1; i--) {
  let combined = '';
  for (let j = 5; j >= 6 - i; j--) {
    combined += j;
  }
  console.log(combined);
}
