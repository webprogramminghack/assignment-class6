// The result should be like this:

// 54321
// 5432
// 543
// 54
// 5

// start code here

for (let a = 1; a <= 5; a++) {
  let result = ''; // baris
  for (let b = 5; a <= b; b--) {
    //dimulai dari angka 5
    result += b;
  }

  console.log(result);
}
