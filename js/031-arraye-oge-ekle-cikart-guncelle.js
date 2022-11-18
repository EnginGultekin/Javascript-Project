// Array yapisina oge eklemek ve Array icerisinden istenilen ogenin cikarilmasi
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array


let items = [10, 20, 30, 40, ]
console.log("items - ilk hali", items)

/*  Arrayin 
   - başına elaman ekleme:  ->   unshift(...)
   - sonuna elaman ekleme:  ->   push(...)

   - başından elaman silme  ->   shift()
   - sonundan elaman silme  ->   pop()

   - elemanlar arasına ->  splice(neyden sonra eklenecek, ondan sonra silinecek eleman varsa yoksa 0 , ...eklenecek veri) 

*/


// Array elamanlar arası ekleme 
var sports = ['basketball', 'football', 'tennis' ];
console.log(sports); // basketball, football, tennis
sports.splice(1,0,'waterPoll');  //  ->  
console.log(sports); // basketball, baseball, football, tennis


// Array: sona oge/eleman eklemek -> push
items.push(50)
console.log("items - push", items)

// Array: basa oge eklemek -> unshift
items.unshift('başaEkle')
console.log("items - unshift", items)


// Array: sondaki ogeyi cikarmak -> pop
  let lastPopItem = items.pop()  // son elemani lastPopItem icerisine ekledik
  console.log("items - pop", items)
  console.log("lastPopItem", lastPopItem)
  


// Array: bastaki ogeyi cikarmak -> shift
  let firstShiftItem = items.shift() // ilk elemani firstItem icerisine ekledik
  console.log("items - shift", items)
  console.log("firstShiftItem: ->", firstShiftItem)


// Array icindeki bir ogenin bilgisinin degistirilmesi:

// ilk ogenin degistirilmesi
items[0] = 5
console.log("items - First change", items)

// sonuncu ogenin degistirilmesi:
items[items.length-1] = 100
console.log("items - Last change", items)
