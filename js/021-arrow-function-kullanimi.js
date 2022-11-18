// Arrow function Kullanimi
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions


function hello(firstName) {
    console.log(`Merhaba ${firstName}`)
}
hello('javascript')

// **************************************************** Arrow Function ****************************************************


const helloFuncV1 = (firstName) => { console.log(`Merhaba ${firstName}`) }
helloFuncV1('helloFuncV1')


const helloFuncV2 = firstName => console.log(`Merhaba ${firstName}`)
helloFuncV2('helloFuncV2')


const helloFuncV3 = (firstName, lastName) => console.log(`Merhaba ${firstName}   ${lastName}`)
helloFuncV3('helloFuncV3', 'Second params')


const helloFuncV4 = (firstName, lastName) => {
    let info = `Merhaba ${firstName}   ${lastName}`
    console.log(info)
    return info
}
helloFuncV4('helloFuncV4', 'Second info')


const noParams = () => console.log(`Merhaba No Params`)
noParams()



const seriesList = list => {

    list.forEach((series, index) => {
        console.log(`${index + 1}. ${series}`)
    });
};
seriesList(["Firefly", "The Mandalorian", "Breaking Bad"]);



// 1.*************************************
const arrayList = array => {
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            array[i] *= 2
        } else {
            array[i] *= 3
        }
    }
    return array
}
console.log(arrayList([1, 2, 3, 4, 5]))




// 2.*************************************
const newArray = (nums) => {
    const newNums = nums.map(e => {
        if (e % 2 == 0) {
            return e * 2
        } else {
            return e * 3
        }
    });
    return newNums
}
console.log(newArray([1, 2, 3, 4, 5]));  // output: [3,4,9,8,15]