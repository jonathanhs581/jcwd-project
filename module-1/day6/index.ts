//OOP

const myLaptop = {
    brand: 'Macbook pro',
    ramGb: '16',
    isTurnedOn: false,
    turnOn(){
        this.isTurnedOn = true; // this -> untuk menunjuk properti milik object itu sendiri
        console.log("Laptop is booting up ...");
        return true;
    }
}

const myPhone = {
    brand: "Samsung",
    storageGb: 256,
    color: "Black"
}

//accessing value (mengakses value)
// menggunakan dot notation

console.log("Brand of my Laptop: ", myLaptop.brand);
console.log("turn on my laptop: ", myLaptop.turnOn());

//bracket. notation
const targetKey = 'storageGb';
console.log("Storage of my phone: ", myPhone[targetKey]);

// optional chaining (? , )
// memeriksa properti tanpa risiko app crash jika nilainya undefined

//accessing keys (mengambil daftar kunci dari Objek)
//mengambil semua nama properti 

const phoneKeys = Object.keys(myPhone);
console.log(phoneKeys);

//immutable -> tipe variabel yang tidak bisa dirubah
//mutable -> tipe variabel yang bisa dirubah

//immutable (Primitive)
let userScore: number = 100;
let savedScore: number = userScore //mengopi nilai dari userScore secara independen

userScore = 150

console.log(userScore);
console.log(savedScore);

//mutable (Non-Primitive)
const shoppingCart: string[] = ['Apple', 'Milk']
const sharedCart: string[] = shoppingCart //mengopi alamat jmemori dari shoppingcart

shoppingCart.push("Bread")

console.log(sharedCart);

const laptopProduct = {
    brand: "AsusROG",
    processor: "Intel i9",
    isAvailable: true
}

for(const key in laptopProduct){
    const value = laptopProduct[key as keyof typeof laptopProduct];
    console.log(`Property "${key}" : ${value}`)
}

console.log("--- Destructuring Assignment ---")

const userProfile = {
    username: 'John_dev' ,
    email: 'john.dev@example.com',
    age: 26,
    city: "Jakarta",
    paymentAccount: {
        bank: "BCA",
        account: 123456,
    }
};

const { username, email, age, city, paymentAccount} = userProfile
console.log(username);
console.log(email);
console.log(age);
console.log(city);
console.log(paymentAccount.account);

const updatedProfile = {
    ...userProfile,
    hobbies: ["coding, gaming"]
}

console.log("After copying userProfile: ", updatedProfile)

//interface -> dikhususkan untuk object utuh
//types -> dikhususkan untuk variasi tipe data
type authorizationUser = "DEFAULT" | "ADMIN";

interface BaseUser {
    id: string;
    email: string;
    role: authorizationUser
}


const userDefault: BaseUser = {
    id: "DEV-01",
    email: "admin@example.com",
    role: "DEFAULT",
}


const userAdmin: BaseUser = {
    id: "ADM-01",
    email: "admin@example.com",
    role: "ADMIN"
}

//class -> sebuah struktur untuk membangun sekumpulan properti maupun method

class Vehicle {
    brand: string = "Honda Vario";
    transmission: string = "AT";
    turnedon() {
        console.log("Vehicle starting ...");
    }
}

// cara memanggil class adalah dengan membuat instance/turunan
// instance/turunan itu bisa dibuat berkali kali
const bike = new Vehicle();

console.log(bike.brand);
console.log(bike.transmission);
bike.turnedon();

class UserProfile {
    public username: string = ""
    public email: string = "";
    private password: string = "";

    constructor(username: string, email: string, password: string){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    private savePassword(){
        console.log("Password was hashing ...");
    }

    public getInformation(){
        this.savePassword()
        console.log(`Username: ${this.username}, and email: ${email}`);
        
    }
}

const userJohn = new UserProfile("John Doe", "john.doe@example.com", "john123")
const userBob = new UserProfile("Bob", "bob@example.com", "bob123")

userJohn.getInformation()
userBob.getInformation()


class Character {
    public name: string = ""
    public element: string = "";
    public hp: number = 0;

    constructor(name: string, element: string, hp: number){
        this.name = name;
        this.element = element;
        this.hp = hp;
    }
}

class charA extends Character {
    constructor (name: string, element: string, hp: number){
        super(name, element, hp)
        this.name = name
        this.element = element
        this.hp = hp
    }

    public getStatistics(){
        console.log(`Name: ${this.name}, element: ${this.element}, Health: ${this.hp}`)
    }
}

const characterA = new charA ("Character A", "fire", 85)

characterA.getStatistics()
