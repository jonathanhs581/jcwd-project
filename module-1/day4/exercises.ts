// --- Exercise 1 ---
// Pola segitiga angka berurutan sesuai tinggi.
const NUMBER_WIDTH = 2;

function trianglePattern(height: number): string {
  if (height <= 0) return "";

  let counter = 1;
  const rows: string[] = [];

  for (let row = 1; row <= height; row++) {
    const cells: string[] = [];
    for (let cell = 1; cell <= row; cell++) {
      cells.push(counter.toString().padStart(NUMBER_WIDTH, "0"));
      counter++;
    }
    rows.push(cells.join(" "));
  }

  return rows.join("\n");
}

// --- Exercise 2 ---
// FizzBuzz: kelipatan 3 -> "Fizz", kelipatan 5 -> "Buzz", keduanya -> "FizzBuzz".
const FIZZ = "Fizz";
const BUZZ = "Buzz";

function fizzBuzzValue(n: number): string {
  let word = "";
  if (n % 3 === 0) word += FIZZ;
  if (n % 5 === 0) word += BUZZ;
  return word || n.toString();
}

function fizzBuzz(n: number): string[] {
  const result: string[] = [];
  for (let i = 1; i <= n; i++) {
    result.push(fizzBuzzValue(i));
  }
  return result;
}



// --- Exercise 3 ---
// BMI = weight (kg) / (height (m))^2.
type BMIResult = "less weight" | "ideal" | "overweight" | "very overweight" | "obesity";

interface BMICategory {
  readonly max: number;
  readonly label: BMIResult;
}

const BMI_CATEGORIES: readonly BMICategory[] = [
  { max: 18.5, label: "less weight" },
  { max: 24.9, label: "ideal" },
  { max: 29.9, label: "overweight" },
  { max: 39.9, label: "very overweight" },
  { max: Number.POSITIVE_INFINITY, label: "obesity" },
];

function calcBMI(weight: number, heightInMeters: number): BMIResult {
  const bmi = weight / heightInMeters ** 2;
  const match = BMI_CATEGORIES.find((category) => bmi <= category.max);
  return (match ?? BMI_CATEGORIES[BMI_CATEGORIES.length - 1]).label;
}

// --- Exercise 4 ---
// Menyaring array agar hanya berisi angka genap.
const isEven = (n: number): boolean => n % 2 === 0;

function filterEvenNumbers(numbers: readonly number[]): number[] {
  return numbers.filter(isEven);
}

// --- Exercise 5 ---
// Memecah string menjadi array kata-kata.
function splitWords(text: string): string[] {
  return text.trim().split(/\s+/);
}

// ===== Demo / pengujian =====
function main(): void {
  console.log("// Exercise 1 — trianglePattern(4)");
  console.log(trianglePattern(4));

  console.log("\n// Exercise 2 — fizzBuzz(15)");
  console.log(fizzBuzz(15).join(", "));

  console.log("\n// Exercise 3 — calcBMI(60, 1.7)");
  console.log(calcBMI(60, 1.7));

  console.log("\n// Exercise 4 — filterEvenNumbers([1..10])");
  console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

  console.log("\n// Exercise 5 — splitWords('Hello World')");
  console.log(splitWords("Hello World"));
}

main();
