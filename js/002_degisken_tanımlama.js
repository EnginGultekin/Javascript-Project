// ********** let ve const ile Degisken Tanimlama ********** 



/* NOOT !! 

    Genel olarak değişken tanımlamalarında "var" değil "let" kullanıyoruz
    Eğer sabit değişmiyecek bir variable varsa "const" olarak tanımlanır ve bidaha değiştirilemez

*/


// var ile degisken tanimlamak:
// var serverName = "kodlasak/iyi/olur.org";
// console.log(serverName)


// let ile degiskeni bos tanimlamak:
let serverName;
console.log(serverName)


// let ile degiskene bilgi atamak:
serverName = "kodlasak/iyi/olur.org";
console.log(serverName)


// let ile degiskene bilgi atayarak tanimlamak:
let password = "8546";
console.log(password)


// degisken atamasi yapmadan once kullanmaya calismak:

/* HATALI KULLANIM: Tanımlanmada nönce kullanılamaz 
console.log(fullName)
let fullName = "Hakan Yalcinkaya";
*/
// Doğrusu
let fullName = 'Engin Gültekin';
console.log(fullName)


// let ile tanimlanan degiskenin icindeki bilgiyi degistirmek:
fullName = 'Lorem Olduk';
console.log(fullName)


// birlestirme veya ekleme islemi
fullName + "Bu ekleme yapmaz"
console.log(fullName + " Bu Sadece Burda eklendi")

fullName = fullName + ' + Yeni Eklendi'
console.log(fullName)

fullName = 'Sıfırlandı';
console.log(fullName)

fullName += ', Yeniden Ekleme Yapıldı';
console.log(fullName)


// const ile degiskeni bos tanimlamaya calismak :( :
// Aşağıdaki gibi const için boş tanımlama yapamayız 
// const serverPassword; // sadece degisken tanimlandi ama ici bos ??


// const ile degisken tanimlamak:
const SERVER_PASSWORD = '875F4sErdF' 
console.log(SERVER_PASSWORD)

// Const tanımlanan değişkenler sonradan değiştirilemez 
// SERVER_PASSWORD = 'sA85Kf25';
// console.log(SERVER_PASSWORD) 