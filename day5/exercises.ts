// --- Exercise 1 ---
function sumNumbers(arr: unknown[]) {
  if (arr.length === 0) throw new Error("Array tidak boleh kosong");

  let sum = 0;
  for (const item of arr) {
    if (typeof item === "number") sum += item;
  }
  return sum;
}

// --- Exercise 2 ---
function insertWithMaxSize(maxSize: number, ...ints: number[]) {
  if (maxSize <= 0) throw new Error("maxSize harus lebih besar dari 0");

  const hasil: number[] = [];
  for (const n of ints) {
    if (hasil.length >= maxSize) break;
    hasil.push(n);
  }
  return hasil;
}

// --- Exercise 3 ---
function combineArrays(arr1: number[], arr2: number[]) {
  return [...arr1, ...arr2];
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

// --- Exercise 5 ---
function arrayDifference(arr1: number[], arr2: number[]) {
  const hasil: number[] = [];
  for (const n of arr1) {
    if (!arr2.includes(n)) hasil.push(n);
  }
  for (const n of arr2) {
    if (!arr1.includes(n)) hasil.push(n);
  }
  return hasil;
}


// Exercise 1: 
console.log(sumNumbers(["3", 1, "string", null, false, undefined, 2]));

// Exercise 2: maxSize=5, integers 5,10,24,3,6,7,8 -> [5, 10, 24, 3, 6]
console.log(insertWithMaxSize(5, 5, 10, 24, 3, 6, 7, 8));

// Exercise 3: [1,2,3] + [4,5,6] -> [1, 2, 3, 4, 5, 6]
console.log(combineArrays([1, 2, 3], [4, 5, 6]));

// Exercise 4
console.log(findDuplicates([1, 2, 2, 2, 3, 3, 4, 5, 5]));

// Exercise 5: [1,2,3,4,5] vs [3,4,5,6,7] -> [1, 2, 6, 7]
console.log(arrayDifference([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));
