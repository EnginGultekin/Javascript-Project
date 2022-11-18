// ** Ilk Fonksiyonumuzu Tanimlamak:

function helloWorld() {
    console.log("Hello World")
}

function hello() {
    console.log("Merhaba")
    helloWorld()
}


// hata alabiliriz...
// function userCheck () {
//     if (userName && age >= 18) {
//         info.innerHTML = "ehliyet alabilirsiniz"
//     } else if (!userName) {
//         info.innerHTML = "Kullanici Adiniz Yok"
//     } else if ( !(age >= 18) ) {
//         info.innerHTML = "Yas Bilginiz Yok veya 18 Yasindan Kucuksunuz"
//     }
// }


hello() // calistir


// --------------------------------------------------------//

function printHello(name) {                		 //name adında bir parametre aldı
    console.log("Merhaba " + name);
}
printHello("Şafak");


function addition(sayi1, sayi2) {  //function name and parameters
    console.log(sayi1 + sayi2);     //body
}
addition(85, 36)




// ***************************************** Anonymous Functions ***************************************** //

var add = function (sayi1, sayi2) {  //Anonim bir fonksiyon oluşturduktan sonra bu 
    //fonsksiyonu bir değişkene atadık
    return sayi1 + sayi2;
}

console.log('Anonymous Functions: ', add(3, 5));


// ***************************************** Return Value Functions ***************************************** //

function addition2(sayi1, sayi2) {
    return (sayi1 + sayi2);
}

var add = addition2(1, 2);   //add değişkenine 1+2 değerini fonksiyon kullanarak atadık.
console.log(add)



// ********************************* Callback Fonksiyonlar ve Asenkron Çalışma ********************************* //



function printScreen1() {
    console.log("İlk ekran çıktısı");
}


// Burda bekleme söz konusudur o yüzden ekran çıktısınız hemen göremeyiz
// 3000 milisaniye yani 3 saniye
function printScreen2() {
    setTimeout(function () {
        console.log("İkinci ekran çıktısı")
    }, 3000);
}

function printScreen3() {
    console.log("Üçüncü ekran çıktısı");
}
printScreen1();
printScreen2();
printScreen3();



function printScreen11() {
    console.log("\nİlk ekran çıktısı");
}

function printScreen22(callback1, callback2) {
    setTimeout(function () {
        callback1();
        console.log("İkinci ekran çıktısı")
        callback2();
    }, 3000);
}

function printScreen33() {
    console.log("Üçüncü ekran çıktısı");
}


// Bu şekilde beklemesi gereken süreyi bekler ve içinde çağırılmış olan fonsksyonları çalıştırır
printScreen22(printScreen11, printScreen33);


// ******************************************** Arrow Functions ******************************************** //

const carpim = (sayi1, sayi2) => sayi1 * sayi2;
/*
    // Daha uzun hali ise;
    const carpim = function(sayi1,sayi2){
      return sayi1 * sayi2;
    }
  */

console.log('Expressions', carpim(3, 5));


// Tek parametreli
const karesiniAl = (sayi) => sayi * sayi;
console.log('Karesini Al: ', karesiniAl(8))

//Hiç parametre olmadığı zaman ise
const hellosWorld2 = () => console.log('Hello World')
hellosWorld2()


// parantezler bize birden fazla statement yazmamızı sağlar.
let toplam = (a, b) => {
    let result = a + b;
    return result;
};




// ******************************************** Recursion Functions ******************************************** //

// bir fonksiyon yazalım bu fonksiyon sayının kuvvetini alsın.
// pow(2,2) = 4
// pow(2,3) = 8
// pow(2,4) = 16 değerlerini verecek şekilde diyelim.

// 1.ci yol (recursion patterni ile düşünmeden)
function powNormal(x, n) {
    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}

console.log("1.POW: ", powNormal(2, 3)); // 8

// recursion ile
function pow(x, n) {
    if (n == 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}

console.log("2.POW: ", pow(2, 3)); // 8




let ustalma = function pow2(x, n) {
    return n == 1 ? x : x * pow2(x, n - 1)
}

console.log("POW3: ", ustalma(5, 3))




// ******************************************** Nested Functions ******************************************** //

function programDetayi(bootcamp, organizasyon) {
    // nested yardımcı fonk
    const tumProgram = () => bootcamp + ' ' + organizasyon;

    console.log('Basladi, ' + tumProgram());
    consol.log('Bitti, ' + tumProgram());
}

programDetayi('bootcamp', 'organizasyon')
