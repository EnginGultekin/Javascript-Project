// ********** css class eklemek veya cikartmak **********

// let greeting = document.querySelector('#greeting')
// console.log(greeting.classList)


// // class eklemek
//  greeting.classList.add("text-primary")
//  greeting.classList.add("title")
// // ya da 
// // birden fazla class eklemek
// greeting.classList.add("new-info","second-class", "third-class")  // şeklinde aynı anda 1 den fazla class ekliyebiliriz
//  console.log(greeting.classList)


// // Class Silmek
// greeting.classList.remove("title","second-class", "third-class")  // birden fazla class silmek
// console.log(greeting.classList)


// // item()
// console.log( greeting.classList.item(0) )

// // contains()
// console.log( 'title var mı yok mu: ', greeting.classList.contains('title') )
// console.log( 'new-info var mı yok mu: ', greeting.classList.contains('new-info') )

// // Toggle() : classList.add() ve classList.remove() yöntemini aynı anda çağırmak yerine classList.toggle() yöntemini kullanılabilir.
// // Anlamadım baaak


// // replace()
// console.log( 'Replace :', greeting.classList.replace('new-info' , 'last-change'),)
// console.log( 'Yeni Class Listesi', greeting.classList)





//Add
const div=document.getElementById("add");
div.classList.add("fancy","add","addMetod");

const classNames = div.classList;
document.getElementById("pAdd").innerHTML="Class ekledikten sonra liste: "+ classNames;

//Remove
div.classList.remove("addMetod");
document.getElementById("pRemove").innerHTML="Class sildikten sonra liste: "+ classNames;

//Item
 const firstClassName=div.classList.item(0);
 document.getElementById("pItem").innerHTML= "İlk class: "+ firstClassName;

//Contains
const result=div.classList.contains("add");
document.getElementById("pContainsTrue").innerHTML="'add' class'ını içeriyor mu? "+" --> "+ result;
const result2=div.classList.contains("addMetod");
document.getElementById("pContainsFalse").innerHTML="'addMetod' class'ını içeriyor mu? "+" --> "+ result2;

//Replace
div.classList.replace("add","newClass");
document.getElementById("pReplace").innerHTML=classNames;

//Toggle
const pToggle=document.getElementById("pToggle")
const button=document.getElementById("toggleButton");
button.addEventListener("click",function(){
pToggle.classList.toggle("colorp");
})
//Length
document.getElementById("length").innerHTML="Class names length:"+" "+div.classList.length;