// ********** Template Literals Kullanimi ********** 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
let username = "Engin"
const DOMAIN = "kodlasakiyiolur.org"

let email = username + "@" + DOMAIN
//console.log("Hey", username , "Sitemize Neden Geldin", "Mail Adreside: ", email)


// Template Literals
let info =
    `
Hey ${username} neden geldin .. Bak Bak mail adreside : ${email}
mail adresi uzunluğu: ${email.length}
Kısa isminiz: ${username[0]}.
bocunuz: ${(2 + 9) * 10}
gunun saat bilgisi: ${new Date().getHours()}

`

console.log(info)


//-------------------------
let a = 99;
let b = 999;

console.log(`${a} çarpı ${b} eşittir ${a * b}`);



//-------------------------
const ad = `Aycan`
const soyad = `Yerdelen`
const gozRengi = `Kahverengi`
const yas = 2

const kisi = `
<p>${ad}</>
<p>${soyad}</>
<p>${gozRengi}</>
<p>${yas}</>
`;

document.body.innerHTML = kisi;


//-------------------------

const kitap = {
    ad: "Fırtına",
    yazar: "Shakespeare",
    tarih: 1610
}
const bookTable = `
  <table border>
    <tbody>
      <tr>
        <td>Kitap</td>
        <td>${kitap.ad}</td>
      </tr>
    <tr>
        <td>Yazar</td>
        <td>${kitap.yazar}</td>
      </tr>
        <tr>
        <td>Tarih</td>
        <td>${kitap.tarih}</td>
      </tr>
    </tbody>
  </table>
  `

 // bunu kullanınca bunun bir önceki kullanımı düşüyor 
document.body.innerHTML = bookTable