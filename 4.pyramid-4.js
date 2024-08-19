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
function Pyramid(tingkat) {
  for (let a = tingkat; a > 0; a--) {
    let baris = ''; // membangun baris angka

    for (let b = 0; b < a; b++) {
      baris += (a + b) % 2 === 0 ? '1' : '0'; // menambah angka ke baris, rumus'(a + b)%2 === 0 untuk menentukan apakah kita harus menambah '1' atau'0'
      //(a + b) % 2 menghasilkan 0 jika a+b adalah genap dan 1 jika a+b adalah ganjil.
      // jika a+b genap ,kita tambahkan '1', jika ganjil tambahkan '0'.
    }
    console.log(baris);
  }
}
const tingkat = 5;
Pyramid(tingkat);
//iterasi 1 (a=5)
//'b' berjalan dari 0 hingga 4 (5 iterasi)
//'a+b' akan menghasilkan : 5,6,7,8,9
//pola :1 0 1 0 1
//iterasi 1 (a=4)
//'b' berjalan dari 0 hingga 3 (4 iterasi)
//'a+b' akan menghasilkan : 4,5,6,7
//pola :0 1 0 1
//dan seterusnya
