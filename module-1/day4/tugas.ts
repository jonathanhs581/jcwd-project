function runFizzBuzz (limit: number){
    const result: string [] = []

    for (let i: number = 1; i <= limit; i++ ){
        const isFizz = i % 3 === 0
        const isBuzz = i % 5 === 0

        if (isFizz && isBuzz){
            result.push("FizzBuzz")
        } else if (isFizz){
            result.push("Fizz")
        } else if (isBuzz){
            result.push("Buzz")
        } else {
            result.push(i.toString());
        }
    }

    return result.join (", ");
}

console.log(runFizzBuzz(15))


//Body Mass indexx
function calculateBmi(weightKg: number, heighMeters: number){
    if(heighMeters <= 0 || weightKg <= 0){
        throw new Error ("Weight and height must be positive");
    }

    const bmi = weightKg / (heighMeters * heighMeters);

    if (bmi < 18.5) return "Less Weight";
    if (bmi <= 24.9) return "ideal"
    if (bmi <= 29.9) return "overweight";
    if (bmi <= 39.9) return "very overweight";

    return "obesity"
}

console.log(calculateBmi(60, 1.7));