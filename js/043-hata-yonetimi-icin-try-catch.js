// hata-yonetimi-icin-try-catch-kullanimi
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
// https://www.w3schools.com/js/js_errors.asp


let products;

try {
  products.forEach(element => console.log(element));
} catch (error) {
  console.log("ERROR: ", error)
  products = [1,2,3]
  products.forEach(element => console.log(element));
}

console.log("hata ayıklama düzgün çalışıyor")



// function reverseString(str) {
//   // Step 1. Use the split() method to return a new array
//   var splitString = str.split(""); // var splitString = "hello".split("");
//   // ["h", "e", "l", "l", "o"]

//   // Step 2. Use the reverse() method to reverse the new created array
//   var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
//   // ["o", "l", "l", "e", "h"]

//   // Step 3. Use the join() method to join all elements of the array into a string
//   var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
//   // "olleh"
  
//   //Step 4. Return the reversed string
//   return joinArray; // "olleh"
// }

// console.log(reverseString("hello"));