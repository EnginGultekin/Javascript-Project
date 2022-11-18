// Cok Kullanilan Array(Dizi) Metotlari ve Array icinde Array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// https://www.w3schools.com/js/js_array_methods.asp


/*  NOOOOOT !!!!!!!

    splice() Dikkat birden fazla şey yapabiliyor 
              aşağıda hepsini kullanıdk  
*/



let items = [1, 2, 3, 4, 5]

// Array icinde Array:
let femaleUsers = ["Ayse", "Hulya", "Merve"]
let maleUsers = ["Ahmet", "Hasan", "Mehmet"]


items.unshift(femaleUsers)
console.log(items)
items.push(maleUsers)
console.log(items)


console.log("items length: ", items.length)
console.log("femaleUser length: ", items[0].length) // Array icindeki istedigimiz Array'in length bilgisini aldik
console.log(items[0][0]) // Ayse bilgisine ulastik :)


// Array icerisinden oge ayirmak -> splice(pos, item?)
let newItems = items.splice(1, 5)   // indexi 1 ve 5 olan ve arasındakileri çıkar demek  geriye iki elamn kalır 

console.log('newItems: ', newItems)
console.log("items. ", items)


// Array icerisindeki ogenin index bilgisini bulmak -> indexOf('value')
items.unshift('lorem')
items.push('ipsum')

console.log('indexOf: ', items.indexOf('ipsum'))
console.log(items[items.indexOf('ipsum')])


// Array Kopyalamak -> slice, [...ES6]
let copyItems = items          // Bu direkt referans kopyalaması yapıyor ve birinde meydana gelen değişiklik her ikisine yansıyor
console.log(items)             // bu her zaman istediğimiz bir durum olmayabilir

copyItems.pop()  // son ogeyi cikarttik
console.log("copyItems: ", copyItems)
console.log("items: ", items)


console.log('Kopyalandıktan Sonraki Hali -----------------')
copyItems = items.slice()  // kopyalama yapti    Burda ise sadece içerisindeki bilgilerin kopyası aktarılmış oluyor
copyItems.pop()  // son ogeyi cikarttik
console.log("copyItems: ", copyItems)
console.log("items: ", items)


let es6Items = [...items]  // es6 ve sonrasinda gelen kopyalama islemi buda slice() ile aynı işleri yapmaktadır
console.log('es6Items: ', es6Items)


// Iki Array Bilgisini Birlestirmek -> [...ES6, ...ES6]
let allUser = [...femaleUsers, ...maleUsers]  // es6 birden fazla array yapisini birlestirmek
console.log('AllUser: ', allUser)



// Array icerisindeki bilgiyi String'e cevirmek -> toString, join
console.log('toString:  ', allUser.toString)
console.log(allUser.join(" --- "))


// Istedigimiz Index Bilgisine Oge Eklemek -> splice(index, 0, value)
allUser.splice(allUser.length - 1, 0, 'Melissa')
allUser.splice(Math.floor(allUser.length / 2), 0, 'Ortanca')
console.log("Ekleme yapıldıktan sonraki hali: ", allUser)



// includes() içinde var mı yok mu
const alisverisListem = ["elma", "ekmek", "süt"];

console.log('Elma var mı: ', alisverisListem.includes("elma"))  // Dizi içerisinde elma olduğu için true yazdırmasını bekleriz.
console.log('Armut var mı: ', alisverisListem.includes("armut"))
// Dizi içerisinde armut olmadığı için ekrana false yazdırmasını bekleriz.



// concat() iki diziyi birleştirmeye yarıyor 
const yiyecekler = ["pasta", "baklava", "puding"];
const icecekler = ["su", "kahve"];

const menu = yiyecekler.concat(icecekler);
console.log('concat() Birleştir: ', menu);  // Çıktıda ["pasta", "baklava", "puding", "su", "kahve"] bekleriz.


// ***************************************************************************************************************************** //

/*
    forEach()
*/
const malzemeler = ["yumurta", "un", "süt"];

malzemeler.forEach(function(malzeme, malzemeIndeksi) {
    console.log('MAlzeme: ', malzeme, '  -->  Malzeme Indexi: ', malzemeIndeksi);
});


/*
    map()
*/
const sayilar = [1,2,3];  // Bir dizideki sayıların 5 katından oluşan başka bir dizi oluşturalım:

let sayilarin5kati = sayilar.map(function(sayi) {
    return sayi*5;
});

console.log('Map: 5 Katı --> ', sayilarin5kati);// Çıktı olarak [5,10,15] görmeyi bekleriz.
console.log('Map: --> ', sayilar);// Çıktı olarak [1,2,3] görmeyi bekleriz. Orijinal dizimiz aynı kalır.



/*
    some()      içinde kullandığımız koşulu sağlayan bir şey varsa true yoksa false dönüyor
*/
const sayilar2 = [4,5,6];

// sonucu görebilmek çıktıyı sonuc adlı değişkende tutalım:
const sonuc1 = sayilar2.some(function(sayi) {
    return sayi > 5 ;
});

console.log('Some(): -->  ', sonuc1);
// Dizi içerisinde 5'ten büyük bir eleman bulunduğu için çıktıda "true" görmeyi bekleriz.

const sonuc2 = sayilar2.some(function(sayi) {
    return sayi <3;
});

console.log(sonuc2);
// Dizi içerisinde 3'ten küçük herhangi bir sayı olmadığı için çıktıda "false" görmeyi bekleriz. 



/*
    every()  every metodu belirtilen bir koşulun dizideki tüm elemanlara uyup uymadığını kontrol ederiz.
             True dönebilmesi için dizideki tüm elemanların fonksiyondaki koşula uyması gerekir.
*/
const sayilar3 = [4,5,6];

const sonuc11 = sayilar3.every(function(sayi) {
    return sayi > 3;
});
console.log('Every(): --> ',sonuc11); // Dizideki tüm sayılar 3'ten büyük olduğu için bu sonucun true dönmesini bekleriz.

const sonuc22 = sayilar3.every(function(sayi) {
    return sayi > 5;
});
console.log(sonuc22);// Dizideki tüm sayılar 5'ten büyük olmadığı için sonucun false dönmesini bekleriz.

const sonuc3 = sayilar3.every(function(sayi) {
    return sayi > 7;
});
console.log(sonuc3); // Dizideki hiçbir sayı 7'den büyük olmadığı için sonucun false dömmesini bekleriz.


/*
    filter()  filter metodu bir dizi içerisindeki belirli bir koşulu sağlayan elemanlar ile yeni bir dizi oluşturmamıza 
                dolayısıyla dizi elemanlarını filtrelememize yarıyor.
*/
const sayilar4 = [1,2,3,4,5];

const filtrelenmisSayilar = sayilar4.filter(function(sayi) {
    return sayi >3;
});

console.log('Filter(): --> ',filtrelenmisSayilar);
// Orijinal diziyi 3'ten büyük olan sayılar için filtrelediğimizde yeni oluşacak dizi [4,5] olacaktır.

console.log(sayilar4);
// Orijinal dizi bozulmayacağından çıktıda [1,2,3,4,5] olarak görürüz.


/*
    find()    Bu metot belirtilen koşula uyum sağlayan dizi elemanını bulmamızı sağlar.
                Koşulu sağlayan birden fazla eleman varsa, bulduğu ilk elemanı döner.
                Koşulu sağlayan bir eleman bulamazsa undefined döner.
*/
const sayilar5 = [4,5,6,7];

const bulunacakEleman1 = sayilar5.find(function(sayi) {
    return sayi === 5;
});
console.log('Find(): --> ',bulunacakEleman1);
// Dizi içerisinde 5 eleman olarak bulunduğu için çıktıda elemanın kendisini yani 5 görmeyi bekleriz.

const bulunacakEleman2 = sayilar5.find(function(sayi) {
    return sayi > 5;
});
console.log(bulunacakEleman2);
// Dizi içerisinde 5'ten büyük birden fazla eleman olduğu için koşula uyan ilk elemanı yani 6'yı görmeyi bekleriz.

const bulunacakEleman3 = sayilar5.find(function(sayi) {
    return sayi < 3;
});
console.log(bulunacakEleman3);
// Dizi içerisinde 3'ten küçük bir eleman olmadığı için çıktıda undefined görmeyi bekleriz.




/*
    sort()   Bu metot, dizi içerisindeki elemanları sıralamaya yarar.
            Eğer parametre olarak bir fonksiyon verilmezse dizi elemanları string'e çevrilir ve UTF-16 değerlerine göre sıralanır.
*/
//Varsayılan haliyle (parametre vermeden) sıralamak yapmak istediğimizde:
const sayilar6 = [3,5,2,10,4];
console.log('Sort(): --> ',sayilar6.sort()); // Çıktı olarak [10, 2, 3, 4, 5] alırız. 


const sayilar7 = [3,5,2,10,4];

sayilar7.sort(function(a,b) {
    return b-a;
});
console.log(sayilar7);
// Çıktı olarak [10, 5, 4, 3, 2] alırız.


/*
    reduce()   Bu metot dizimizi yalnızca bir değere indirger.
*/

const sayilar8 = [10,20,30];

// Dizi içindeki sayıları toplayarak indirgeyecek bir fonksiyon yazalım:
function indirgeyici (akumulator, sayi) {
    return akumulator + sayi;
}
// Bu fonksiyonu ve toplamaya 0'dan başlayacağımızı belirten 0 sayısını metodumuza parametre olarak girelim ve sonucu bir değişkende tutalım:
const sonuc111 = sayilar8.reduce(indirgeyici,0);
console.log('reduce(): -->  ',sonuc111); //0 + 10 + 20 + 30 = 60 olacağından çıktı olarak 60 bekleriz.

// Eğer akümülatorümüzü 0 yerine 5'den başlatsaydık çıkabilecek sonucu görelim:

const sonuc222 = sayilar8.reduce(indirgeyici, 5);
console.log(sonuc222); // 5 + 10 + 20 + 30 = 65 olacağından çıktı olarak 65 bekleriz.




// ***************************************************************************************************************************** //


/* 1.Soru
let dizi = [2,5,8,11,15,17];

// Uygun dizi metotlarını kullanarak  yukarıda verilen dizinin elemanları içinde 10'dan büyük olan elemanların 5'er katından oluşan yeni bir dizi oluşturun. (sonuç [55, 75, 85] olmalı.)
*/



/* 2.Soru
let dizi = [3,6,9,14,16];

// Uygun dizi metotlarını kullanarak, yukarıdaki dizi için aşağıdaki şartları sağlayan myFunction fonksiyonunu yazın.
// Elemanların arasında 5'ten büyük olan olan bir eleman varsa konsola "Beşten büyük bir eleman mevcut." yoksa "5'ten büyük eleman mevcut değil." yazdır.

function myFunction (dizi){
// Kodunuzu buraya yazın.
}

myFunction(dizi);
*/




/* 3.Soru
let dizi = [2,3,4];

// Uygun dizi metodunu kullanarak yukarıda verilen dizinin elemanlarının çarpımının sonucunu (24) veren bir fonksiyon yazınız.

*/
