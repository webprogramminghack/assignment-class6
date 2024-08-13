// The result should be like this:

// 54321
// 5432
// 543
// 54
// 5

// start code here

// Mengatur jumlah baris yang akan dicetak
let rows = 5;

// Loop untuk setiap barisnya
for (let i = 0; i < rows; i++) {
  // Mengatur variabel dengan menyimpan hasil baris saat ini
  let line = '';

  // Loop untuk membuat string dari angka
  for (let j = rows; j > i; j--) {
    line += j;
  }

  // Mencetak hasil barisnya
  console.log(line);
}
