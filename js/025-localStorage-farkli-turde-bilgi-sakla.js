// Local Storage Islemleri:
// Eger tutacagimiz bilgi object ise JSON.stringify ile objeyi string yapiya cevirebiliriz.


// ***************************************** Object ***************************************** //
let user = {userName: "engingultekin", isActive: true}

// Json içindeki bildgilere ulaşabilmemiz için bu satırı değil bir alttakini kullanmamız gerekir
//localStorage.setItem('userInfo',user)
localStorage.setItem('userInfo',JSON.stringify(user))   // Bilginin jsondan ulaşılabilir yapıyor


let userInfo = localStorage.getItem('userInfo')
console.log(userInfo)
// userInfo içindeki bilgileri kullanmak için pars etmemiz gerekmektedir
userInfo = JSON.parse(userInfo)
console.log(userInfo.userName)
console.log(userInfo.isActive)


// Yani Kısaca aşağıdaki gibi kullanabiliriz

// let userInfo = localStorage.getItem('userInfo')
// userInfo = JSON.parse(userInfo)


// ***************************************** List ***************************************** //

let items = [1,2,3,user]
// localStorage.setItem('newItems' , items)  // hatalı 
localStorage.setItem('newItems', JSON.stringify(items))

let newItems = JSON.parse(localStorage.getItem('newItem')) //JSON Parse ile localStorage icindeki bilginin cekilip kullanilmasi..


// JSON 'ları burda da kullanmalıyız  çünkü '[]' Obje gibidir kullanmamız gerek
let list = [1,2,3,4]
localStorage.setItem('list',JSON.stringify(list))
let allList = JSON.parse(localStorage.getItem('list'))


// ***************************************** Variable ***************************************** //

// NOOOT : !!!!!!!!
// Eğer obje değilde normal 1 değişken tutacağımızda

let number = 8
localStorage.setItem('number',number)

let getNum = localStorage.getItem('number')




// ***************************************** Egzersiz ***************************************** //


var movies = ["Kasaba", "Kış uykusu","Bir Zamanlar Anadolu"];

localStorage.setItem('movies', JSON.stringify(movies))

let allArray = JSON.parse(localStorage.getItem('movies'))


//localStorage.clear()