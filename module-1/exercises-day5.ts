// --- Exercise 1 ---
// Write a function from a given array of mixed data types and return the sum of all the number a. Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3
function sumNumbers(arr: unknown[]) {
  if (arr.length === 0) throw new Error("Array tidak boleh kosong");

  let sum = 0;
  for (const item of arr) {
    if (typeof item === "number") {
      if (!Number.isFinite(item)) {
        throw new Error("Terdapat nilai angka yang tidak valid (Infinity atau NaN) di dalam array");
      }

      sum += item;
    }
  }
  return sum;
}


// --- Exercise 4 ---
function findDuplicates(arr: number[]) {
  if (arr.length === 0) throw new Error("Array tidak boleh kosong");

  const seen: number[] = [];
  const duplikat: number[] = [];
  for (const n of arr) {
    if (seen.includes(n)) {
      if (!duplikat.includes(n)) duplikat.push(n);
    } else {
      seen.push(n);
    }
  }
  return duplikat;
}




console.log(sumNumbers(["3", 1, "string", null, false, undefined, 2]));

console.log(findDuplicates([1, 2, 2, 2, 3, 3, 4, 5, 5]));

