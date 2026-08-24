// Soal 1: Ganjil atau Genap
let angka1: number = 25;

if (angka1 % 2 === 0) {
  console.log(angka1 + " -> bilangan genap");
} else {
  console.log(angka1 + " -> bilangan ganjil");
}


// Soal 2: Bilangan Prima
let angka2: number = 7;
let isPrima: boolean = true;

if (angka2 < 2) {
  isPrima = false;
} else {
  for (let i: number = 2; i < angka2; i = i + 1) {
    if (angka2 % i === 0) {
      isPrima = false;
    }
  }
}

if (isPrima) {
  console.log(angka2 + " -> bilangan prima");
} else {
  console.log(angka2 + " -> bukan bilangan prima");
}


// Soal 3: Total Penjumlahan 1 hingga N
let n3: number = 5;
let total: number = 0;

for (let i: number = 1; i <= n3; i = i + 1) {
  total = total + i;
}

console.log("Total penjumlahan 1 hingga " + n3 + " = " + total);


// Soal 4: Faktorial
let n4: number = 4;
let faktorial: number = 1;

for (let i: number = 1; i <= n4; i = i + 1) {
  faktorial = faktorial * i;
}

console.log(n4 + "! = " + faktorial);


// Soal 5: Deret Fibonacci
let n5: number = 15;
let fibN: number = 0;

if (n5 === 1 || n5 === 2) {
  fibN = 1;
} else {
  let a: number = 1;
  let b: number = 1;
  let i: number = 3;
  while (i <= n5) {
    fibN = a + b;
    a = b;
    b = fibN;
    i = i + 1;
  }
}

console.log("Fibonacci ke-" + n5 + " = " + fibN);
