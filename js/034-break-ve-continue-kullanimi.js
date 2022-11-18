// Break & Continue
// https://www.w3schools.com/js/js_break.asp

const LOREM_LIST = [
  'lorem', 'ipsum', 'dolor', 'amet', 'consectetur,', 'adipisicing', 'elit'
]

let counter = 0;
// for(; counter<10; counter++){
//   if(counter === 5){    // counter == 5 olunca çıkacak
//     break;
//   }
//   console.log(counter)
// }

// for(; counter<10; counter++){
//   if(counter === 3){    // index == 3 olunca yazma onu döngünün başına dön
//     continue;            // Yani 3'ü yazmıyacak devam edecek
//   }
//   console.log(counter)
// }


const ulDOM = document.querySelector('#userList')

let index = 0

// for (; index < LOREM_LIST.length; index++) {
//   if (LOREM_LIST[index] == 'amet') {
//     break
//   }
//   let liDOM = document.createElement('li')
//   liDOM.innerHTML = LOREM_LIST[index]
//   ulDOM.appendChild(liDOM)
// }


for (; index < LOREM_LIST.length; index++) {
  if (LOREM_LIST[index] == 'amet') {        // sadece amet'i yazmayacak
    continue
  }
  let liDOM = document.createElement('li')
  liDOM.innerHTML = LOREM_LIST[index]
  ulDOM.appendChild(liDOM)
}