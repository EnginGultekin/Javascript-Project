// array map kullanimi
// https://developer.mozilla.org/tr/docs/Web/JavaScript/Reference/Global_Objects/Array/map

const USERS = ["AYSE", "MEHMet", "TugCE", "AkSEL"]

// userName icinde orjinal isim kalsin, 
// shortName icinde ilk harf buyuk . (A.)
// newName icinde ilk harf buyuk olsun
// {userName: "AYSE", shortName: "A.", newName: "Ayse"}


const NEW_USERS = USERS.map(user => user.toLowerCase())
console.log(NEW_USERS)


//Birden fazla işlem ya da obje döndürüyorsak return parantezleri kullanmalıyız 
const USERS_OBJECT = USERS.map(user => {
  return {
    userName: user,
    shortName: `${user[0].toUpperCase()}.`,
    newName: `${user[0].toUpperCase()}${user.slice(1).toLowerCase()}`
  }
})

// Ya da  () bu parantezler içinde yazamalıyız 
// const USERS_OBJECT = USERS.map(user => (
//   {
//     userName: user,
//     shortName: `${user[0].toUpperCase()}.`,
//     newName: `${user[0].toUpperCase()}${user.slice(1).toLowerCase()}`
//   }
// )
// )

console.log(USERS_OBJECT)