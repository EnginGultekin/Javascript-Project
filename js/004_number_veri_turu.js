// ********** Number Veri Turu ile Calismak ********** 
// number veri turu tanimlamak:
let price = 100
let tax = 0.18
let priceTax = price * tax
let total = price + priceTax
console.log(
    "Fiyat:", price,
    "KDV Oranı:" , tax,
    "KDV Tutarı:", priceTax,
    "Fiyat:", total  
)

let stringNumber = "12"
console.log("String :" ,stringNumber) 

let newNumber = Number(stringNumber)
console.log("integer :", newNumber)

console.log("Number Constructor içine bilgi gönderildi:", Number("1111"))

// arttirma ve azaltma islemleri:
let counter = 320
counter = counter +1
console.log(counter)  // 1. uzun yöntem

counter += 1;            
console.log(counter)  // 2.normal 

counter++               
console.log(counter)  // 3. Kısası

counter--
console.log(counter)


counter *= 10
console.log(counter)


counter /= 10
console.log(counter)

// islem onceligi:
// https://tr.wikipedia.org/wiki/%C4%B0%C5%9Flem_s%C4%B1ras%C4%B1
 console.log(2+3*10) 
 console.log((2+3)*10)

// mod(kalan) alma %:
// sayi tek mi cift mi ???
// 0 ise cift, 1 ise tek
console.log(15%2)
console.log(15%2)
// 8 urun alan koliye tum urunler sigiyor mu ?
console.log("Koli Kalan Koli Örneği: " , 18%8 )


// us alma **:
console.log(2*2*2*2)
console.log("Üst alma:" ,2**4)

// asagi yuvarlama islemi -> Math.floor:
 console.log("Aşağıya Yuvarlama:", Math.floor(1.7) )  // -> 1

// yukari yuvarlama islemi -> Math.ceil :
 console.log("Yukarı Yuvarlama:", Math.ceil(1.3))  // -> 2

// yakina yuvarlama islemi -> Math.round :
 console.log('Yakına Yuvarlama :', Math.round(1.2)) // 1
 console.log('Yakına Yuvarlama :', Math.round(1.5)) // 2 ye yuvarladı
 console.log('Yakına Yuvarlama :', Math.round(1.7)) //2