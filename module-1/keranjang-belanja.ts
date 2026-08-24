let itemNumber: number;
let hargaBarang: number = 10000;
let totalBelanja: number = 0;

for (itemNumber = 1; itemNumber <= 5; itemNumber = itemNumber + 1) {
  if (itemNumber === 3) {
    console.log("Peringatan: Item ke-3 kedaluwarsa (expired), dilewati.");
    continue;
  }

  totalBelanja = totalBelanja + hargaBarang;
  console.log("Item ke-" + itemNumber + " dipindai seharga Rp " + hargaBarang);
}

console.log("Total belanja sebelum diskon: Rp " + totalBelanja);

if (totalBelanja >= 30000) {
  let diskon: number = totalBelanja * 10 / 100;
  totalBelanja = totalBelanja - diskon;
  console.log("Selamat! Anda mendapat diskon 10% sebesar Rp " + diskon);
} else {
  console.log("Belum mencapai minimum diskon, tidak ada potongan harga.");
}

console.log("Total akhir yang harus dibayar: Rp " + totalBelanja);
