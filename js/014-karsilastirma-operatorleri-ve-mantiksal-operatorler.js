// ********** Karsilastirma Operatorleri ve Mantiksal Operatorler **********
// https://www.w3schools.com/js/js_comparisons.asp

let price = '100'
let user = 'Engin'


// == Eşitse
console.log("==: ", price == 10 )
console.log("==: ", price == 100 )  // 100 eşit mi ona baktı tipi önemsemeden

// === Hem değeri hem de türü eşitse
console.log("===: ", price === 1 )
console.log("===: ", price === 100 )   // tipinin ve değerin eşit olması gererkir ancek değil
console.log("===: ", price === "100" )

// != Eşit değilse
console.log("!=: ", price != 1 )
console.log("!=: ", price != 100 )
console.log("!=: ", user != 'guest' )


// !== Eşit değilse    ==> tipinede bakıyor
console.log("!== ", price !== 1 )        // tipide değeride aynı değil o yüzden true
console.log("!== ", price !== '100' )     // tipide değeride aynı o yüzden false   
console.log("!== ", user !== 'guest' )      // aynı değil true



// < Küçükse
console.log("< ", price < 1000 )
console.log("< ", price < 10 )

// <= Küçük veya eşitse
console.log("<= ", price <= 100 )
console.log("<= ", price <= 10 ) 
console.log("<= ", price <= 100 )


// > Büyükse
console.log("> ", price > 10)
console.log("> ", price > 1000)

// >= Büyük veya eşitse
console.log(">= ", price >= 100 )
console.log(">= ", price >= 1000 )
console.log(">= ", price >= 10 )

// && ve
console.log("&&: ", price && user != 'guest')
price = 0;
console.log("&&: ", price > 0 && user != 'guest')

// || veya
console.log("||: ", price > 0 || user != 'guest')
console.log("||: ", price > 0 || user == 'guest')

// ! degil (tersi)
console.log("! ", !price)            // normalde false ama true olur
console.log("! ", !(user != 'guest'))  // normalde true ama false olur 



console.log(!!2);