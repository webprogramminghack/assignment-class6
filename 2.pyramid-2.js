// The result should be like this:

// 12345;
// 1234;
// 123;
// 12;
// 1;

// start code here

// Menentukan jumlah iterasinya
for (let i = 5; i > 0; i--) {
  // Cetak angka yang dimulai dari 1 hingga i
  let output = '';
  for (let j = 1; j <= i; j++) {
    output += j;
  }
  // Menampilkan hasilnya
  console.log(output + ';');
}
