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

// Menentukan jumlah barisnya
const rows = 5;

// Loop untuk setiap barisnya
for (let i = 0; i < rows; i++) {
  // Loop untuk mencetak angka pada barisnya
  for (let j = 0; j < rows - i; j++) {
    // Cetak angka 1 dan 0 secara bergantian
    process.stdout.write((i % 2 === 0 ? j % 2 : (j + 1) % 2) + ' ');
  }

  // Pindah ke baris berikutnya
  console.log();
}
