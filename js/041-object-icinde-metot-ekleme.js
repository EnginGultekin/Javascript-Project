// Object icinde metot nasil ekleriz

let user1 = {
  firstName : "Bilgin",
  lastName : "Uzman",
  score : [1,2,3,4],
  isActive: true, 
  shortName: function() { 
    return `${this.firstName[0].toUpperCase()}.${this.lastName[0].toUpperCase()}.`
  }
}

console.log(user1)






function Insan(isim,yas) {
  this.isim = isim;
  this.yas = yas;
}


const ali = new Insan("ali",21);
console.log(ali.yas);
// 21

ali.yeniOzellik = "Sonradan eklenmiş bir özellik";
console.log(ali.yeniOzellik);
// "Sonradan eklenmiş bir özellik"





//**************************  1 
var birey = {
	isim: 'Ali',
	soyisim: 'Veli',
	dogumYili: 1989,
	merhabaDe: (age) => `Merhaba, ben ${birey.isim} ${birey.soyisim}, ${age} yaşındayım`,
};
birey.yasHesapla = function () {
	return 2021 - this.dogumYili;
};
console.log(birey.merhabaDe(birey.yasHesapla()));


//**************************  2 

function yaz(){console.log("Merhaba Kodluyoruz")}
console.log(yaz['name'] ) 

