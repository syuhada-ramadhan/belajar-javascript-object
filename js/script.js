const nama = "Kambing";
const warna = "Putih";
const makan = function () {
  return "Alhamdulillah, Kenyang";
};

// object literal
const hewan = {
  nama: "Kambing",
  warna: "Putih",
  makan() {
    console.log("Alhamdulillah, Kenyang.");
  },
};

const namaHewan = hewan.nama;
console.log(namaHewan);

hewan.makan();
