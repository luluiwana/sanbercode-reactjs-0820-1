// Soal 1
const phi = 3.14;
let r1=10;
let r2=20;

const luasLingkaran = (r) =>  phi*r*r
const kelilingLingkaran = (r) => phi*r*2

console.log(luasLingkaran(r1))
console.log(luasLingkaran(r2))
console.log(kelilingLingkaran(r1))
console.log(kelilingLingkaran(r2))

// Soal 2
let kalimat = ""
const addKata = (kata) => kalimat += `${kata} `

addKata("Saya")
addKata("adalah")
addKata("seorang")
addKata("frontend")
addKata("developer")
console.log(kalimat)

// Soal 3
const newFunc = (firstName, lastName) => console.log(`${firstName} ${lastName}`)
newFunc("William", "Imoh")

// Soal 4
const newObject = {
  firstName: "Harry",
  lastName: "Potter Holt",
  destination: "Hogwarts React Conf",
  occupation: "Deve-wizard Avocado",
  spell: "Vimulus Renderus!!!"
}

const {firstName, lastName, destination, occupation, spell}=newObject
console.log(firstName, lastName, destination, occupation, spell)

// soal 5
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west,...east]
console.log(combined)