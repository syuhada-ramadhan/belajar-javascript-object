// array nomor
const nomor = [[1.1], 2, 3];

// function untuk menambahkan elemen ke array nomor
const tambahNomor = (elemen) => {
  return nomor[0].push(elemen);
};

// panggil function tambahNomor() dan masukan elemen yang akan ditambahkan
tambahNomor(1.2);
tambahNomor(1.3);

// cetak array nomor
console.log(nomor);
