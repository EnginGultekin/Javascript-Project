// Object ve Array Destructuring Nasil Kullanilir
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

// Object Destructuring:

let settings = {
  userName: "loremIpsum",
  password: "BadPassword",
  isActive: false,
  ip: "127.0.0.1",
  serverName: "kodluyoruz.org"
}

// obje icindeki bilgilerin tek seferde cikarilmasi
// let userName = settings.userName
// console.log(userName)

// rename && destructuring

//let { userName, password, isActive, ip, serverName } = settings  ya da alttaki gibi değişken ismi değiştirebiliriz
let { userName: user, password, isActive, ip: ServerIP, serverName } = settings

console.log(user, password, isActive, ServerIP, serverName)
console.log('settings: ', settings)
console.log(user)



// obje icindeki bazi bilgilerin cikarilmasi
// aşağıda 3 değişkeni aldık ve geriye kalan 2 tane değişkeni newSettings içine attık
let { userName: userName2, password: password2, isActive: isActive2, ...newSettings } = settings
// eger degisken ismi daha once tanimlanmadiysa:
// let {userName, password, isActive, ...newSettings} = settings
console.log('Destructuring: -> ', userName2, password2, isActive2, newSettings)




// objenin destructuring ile kopyalanmasi

// HATALI!!!
// let settings2 = settings
// settings2.userName = "Degisen Bilgi"
// console.log("settings", settings)
// console.log("settings2", settings2)

// DOGRUSU :)


let settings2 = { ...settings }
settings2.userName = "Degisen Bilgi"
console.log("settings: ", settings)
console.log("settings2: ", settings2)


let score = [100, 200, 300, 400]

let [score1, score2, ...otherScor] = score
console.log(score1, score2, otherScor)

// object kopyalama ile ayni... let settings2 = {...settings}
let copyOfScore = [...score]
copyOfScore[0] = 111
console.log("score: ", score)
console.log("copyOfScore: ", copyOfScore)




//****************************************************************
let [,pronoun,,name]=["Merhaba","benim","adım","Mehmet"];
console.log(pronoun,name)

let person={name:"Selin",city:"Ankara",favoriteColor:"aqua blue"}; 
let {name:foo}=person;
console.log(foo)