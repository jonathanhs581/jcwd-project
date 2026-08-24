// callback -> sebuah fungsi yang dimasukkan sebagai parameter/argumen ke dalam fungsi lain

function bakeCake(cakeType: string, callback: (result: string) => void) {
    setTimeout(() => {
        callback(`${cakeType} cake is ready!`);
    }, 10000);
}

bakeCake("chocolate", (result) => {
    console.log("Result:", result);
});

//pemesanan ojek online
function findDriver(
    passengerName: string, 
    callback: (driverName: string) => void){
        console.log("Finding driver nearby ...");
        setTimeout(() => {
            callback("Budi");
        }, 3000);
    }

findDriver("Siti",  (driver) => {
    console.log(`Driver found: ${driver}`)
})
/*
function searchDriver(passenger: string, next: (driver: string) => void) {
    console.log(`Searching driver for ${passenger}...`);
    setTimeout(() => next("Driver Budi"), 1000);
}

function pickUpPassengers(driver: string, next: (status: string) => void) {
    console.log(`Picking up passengers with ${driver}...`);
    setTimeout(() => next("Passengers picked up successfully"), 1000);
}

function driveToDestination(destination: string, next: (status: string) => void) {
    console.log(`Driving to ${destination}...`);
    setTimeout(() => next(`Arrived at ${destination}`), 2000);
}

function processPayment(amount: number, next: (status: string) => void) {
    console.log(`Processing payment for Rp${amount}...`);
    setTimeout(() => next(`Payment of Rp${amount} successfully`), 1000);
}

searchDriver("Siti", (driver) => {
    console.log(`Driver found: ${driver}`);

    pickUpPassengers(driver, (status) => {
        console.log(status);

        driveToDestination("Bandung", (destinationStatus) => {
            console.log(destinationStatus);

            processPayment(150000, (paymentStatus) => {
                console.log(paymentStatus);
            });
        });
    });
});
*/