// array filter kullanimi
// https://developer.mozilla.org/tr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// 5 harften fazla olanlar (6) ??
const PRODUCTS = ["Mic", "Cable", "Speaker", "Desktop PC", "Server", "Mouse", "Keyboard"]

const NEW_PRODUCT = PRODUCTS.filter(item => item.length > 5)
console.log(NEW_PRODUCT)

// aktif kullanicilar ??
const USERS = [
  { fullName: "Ayse Sumer", isActive: false },
  { fullName: "Ahmet Urgan", isActive: true },
  { fullName: "Asya Basar", isActive: true },
  { fullName: "Aksel Durmaz", isActive: false },
]

// const ACTIVE_USERS = USERS.filter(user => user.isActive === true)

const ACTIVE_USERS = USERS.filter(user => user.isActive)
console.log(ACTIVE_USERS)



// ****************************************************** Sorular ******************************************************

const person = [{
  name: "Adem",
  age: 25,
  languages: ["JavaScript", "CSS"],
},
{
  name: "Oğuz",
  age: 33,
  languages: ["Java", "HTML"],
}
];

// Soru 1: Yukarıdaki diziyi kullanarak filter() metodu ile yaşı 30'dan büyük olan kişiyi getirin.

// Soru 2: Yukarıdaki diziyi kullanarak filter() metodu ile JavaScript bilen kişiyi getirin.

// -1-
let age = person.filter(person => person.age > 30)
console.log(age)

// -2-
let language = person.filter(person => person.languages.includes('JavaScript'))
//let language = person.filter((person,index) => person.languages[index] == 'JavaScript')
console.log(language)