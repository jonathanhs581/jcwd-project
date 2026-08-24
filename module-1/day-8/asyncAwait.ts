//async await
// merupakan syntatic sugar -> sintaks pemanis yang dibuat diatas promise, untuk menyederhanakan promise

// 1. pengecekan umur
function verifyAge (age: number){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(age >= 17){
            resolve("Access granted: ID Verified")
        } else {
            reject("Access denied: Must be at least 17 years old ")
        }
        }, 7000)
    })
}

function loadProcess(){
    console.log("Processing ...")
}

async function checkUserAccess (userAge: number) {
    try {
        const status = await verifyAge(userAge);
        console.log(status);
    } catch (error){
        console.log(error);
    } finally {
        console.log("Process done ...")
    }
}

checkUserAccess(15)