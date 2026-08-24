// --- Exercise 1 ---
// Cari nilai terendah, tertinggi, dan rata-rata dalam satu loop
function getStats(arr: number[]) {
  if (arr.length === 0) throw new Error("Array tidak boleh kosong");

  let lowest = arr[0];
  let highest = arr[0];
  let sum = 0;
  for (const n of arr) {
    if (n < lowest) lowest = n;
    if (n > highest) highest = n;
    sum += n;
  }
  return { lowest, highest, average: sum / arr.length };
}

// --- Exercise 2 ---
// Gabungkan kata: pisahkan dengan koma, kata terakhir pakai 'and'
function joinWordsWithAnd(arr: string[]) {
  if (arr.length === 0) throw new Error("Array tidak boleh kosong");
  if (arr.length === 1) return arr[0];

  const depan = arr.slice(0, arr.length - 1).join(", ");
  return depan + ", and " + arr[arr.length - 1];
}

// --- Exercise 3 ---
// Angka terkecil kedua (duplikat diabaikan)
function secondSmallest(arr: number[]) {
  if (arr.length < 2) throw new Error("Array minimal harus 2 angka");

  // hilangkan angka yang sama, lalu urutkan
  const unik = [...new Set(arr)].sort((a, b) => a - b);
  if (unik.length < 2)
    throw new Error("Tidak ada angka terkecil kedua (semua angka sama)");

  return unik[1];
}

// --- Exercise 4 ---
// Jumlahkan elemen di indeks yang sama dari dua array
function sumTwoArrays(arr1: number[], arr2: number[]) {
  if (arr1.length !== arr2.length)
    throw new Error("Panjang kedua array harus sama");

  const hasil: number[] = [];
  for (let i = 0; i < arr1.length; i++) {
    hasil.push(arr1[i] + arr2[i]);
  }
  return hasil;
}

// --- Exercise 5 ---
// Tambah elemen ke akhir array, tapi hanya kalau belum ada
function appendIfUnique(arr: number[], newElement: number) {
  if (arr.includes(newElement)) return [...arr];
  return [...arr, newElement];
}



console.log(getStats([12, 5, 23, 18, 4, 45, 32]));

// Exercise 2: ["apple", "banana", "cherry", "date"] -> "apple, banana, cherry, and date"
console.log(joinWordsWithAnd(["apple", "banana", "cherry", "date"]));

// Exercise 3: [5, 3, 1, 7, 2, 6] -> 2
console.log(secondSmallest([5, 3, 1, 7, 2, 6]));

// Exercise 4: [1, 2, 3] + [3, 2, 1] -> [4, 4, 4]
console.log(sumTwoArrays([1, 2, 3], [3, 2, 1]));

// Exercise 5: arr = [1, 2, 3, 4]
console.log(appendIfUnique([1, 2, 3, 4], 4)); // add 4 -> [1, 2, 3, 4]
console.log(appendIfUnique([1, 2, 3, 4], 7)); // add 7 -> [1, 2, 3, 4, 7]
