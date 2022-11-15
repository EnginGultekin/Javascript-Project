// ********** Kosullarla Calismak **********
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else

//let userName = prompt("Kullanıcı adınızı giriniz","")
// eger kullanici bilgisi varsa ekrana ismini yazdir
// eger (username.length > 0) {console.log(username)} degilse {console.log("bilgi yok")}
// if (username.length > 0) {console.log(username)} else {console.log("bilgi yok")}

// if(userName.length > 0)
// {
//     console.log('Kullanıcı Adı: ', userName);
// } else
// {
//     alert('Kullanıcı Adı Bulunamadı ....')
// }




// var randomSayi = Math.floor(Math.random() * 10);

// //Girdiğimiz sayıyı aklında tutması için prompt değişkene atanır

// var tahmin = prompt("1-10'a kadar bir sayı gir ve rastgele sayıyı bulmaya çalış!");

// if (tahmin === randomSayi && tahmin != null) alert("Bildin!!!");
// else if (tahmin == "") alert("Boş giriş yaptınız!");
// else if (tahmin == null) alert("Giriş yapmaktan vazgeçtiniz!");
// else {
//   alert("Bir daha denee :(, Random sayi: " + randomSayi);
// }



//Kod satırını buraya ekleyiniz.


function vkiHesapla(weight, height) {
    var vki = weight / Math.pow(height,2)

    if (vki < 18.5) return alert(`Vücut kitle indeksiniz: ${vki}, değerleriniz düşüktür`);
    if (vki >= 18.5 && vki <= 24.9) return alert(`Vücut kitle indeksiniz: ${vki}, normal değerdesiniz`);
    if (vki >= 25.0 && vki <= 29.9) return alert(`Vücut kitle indeksiniz: ${vki}, kilolusunuz`);
    if (vki >= 30) return alert(`Vücut kitle indeksiniz: ${vki}, aşırı kilolusunuz`);
    return alert("Girdiğiniz değerleri kontrol ediniz");
}


vkiHesapla(62, 1.70)



// function deneme() {
//   let N = 18;
    
//     if(N%2 == 1) console.log('1 Weird')
//     else{
//         if(2 <= N && N <= 5) console.log('1 Not Weird');
//         else if (6 <= N  && N <= 20) console.log('2 Weird');
//         else if (20 < N ) console.log('2 Not Weird');
//         else console.log('3 Weird');
//     }
// }

// deneme()