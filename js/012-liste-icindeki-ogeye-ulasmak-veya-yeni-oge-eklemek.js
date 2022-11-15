// ********** liste icerisindeki son elemana ulasmak veya eleman eklemek **********



// let lastChild = document.querySelector('ul#list>li:last-child')
// console.log('lastChild: ', lastChild.innerHTML)

// lastChild.innerHTML = 'Son oge degisti'

// let firstChild = document.querySelector('ul#list>li:first-child')
// console.log('firstChild: ', firstChild.innerHTML)

// firstChild.innerHTML = 'ilk öge değişti'



// Öğe Ekleme
// let ulDOM = document.querySelector('ul#list')
// let liDOM = document.createElement('li') 

// liDOM.innerHTML = 'Kendi Oluşturduğumuz öğe'

// // ulDOM.append(liDOM)  // en sona ekler

// ulDOM.prepend(liDOM)  // en başa ekler






// Stillerini değiştirdik
var one = document.getElementById("walterwhite");

var two  = document.getElementsByClassName("alternate");

for (var i = 0; i < two.length; i++) { 
     two[i].style.color  = "red"; 
}


// Gelelim şimdi ekleme yapmaya
var ulDOM = document.querySelector("ul.liste");

// input 
var urun = document.querySelector("#veri"); 
// button
var ekle = document.querySelector("#ekle");

// burası dinliyor butona basılınca li itemini oluşturuyor
ekle.addEventListener("click",function()
{
  // createElement ile yeni bir listItem (li) oluşturuyoruz
  var liDOM=document.createElement("li"); 
  
  // Input ile gelen veriyi "li" içerisine metin olarak giriyoruz.
  // li.textContent = urun.value;  şeklinde de olabilir
  liDOM.innerHTML=urun.value; 
  
  // appendChild ile oluşturduğumuz elementi "liste" isimli değişkenimizin içerisine ekliyoruz.
  // ister ulDOM.prepend(liDOM) başa ekleriz istersekte aşağıdaki gibi
  ulDOM.append(liDOM);
              
  // Veri inputu içerisindeki metni siliyoruz.
  urun.value = "";
});


// Önce elimizdeki listeye ulaşıyoruz
// butonu dinliyoruz ve tıklandığında 
// bir li oluşturuyoruz
// oluşturduğumuz li'nin textini
// elimizde tuytmuş olduğumuz inputun valuesini atıyoruz
// ve listeye append edip ekliyoruz 
// daha sonra input içindeki value yi temizliyoruz

