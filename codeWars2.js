// Task 02
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

// function makeCounter(num) {
//
//     const counterObj = {
//         count: num,
//         increase() {
//             return this.count += 1
//         },
//         decrease() {
//             return this.count -= 1
//         },
//         reset() {
//             return this.count = 0
//         },
//         set(value) {
//             return this.count = value
//         },
//     }
//     return counterObj
// }
//
// let obj = makeCounter(5)
// console.log(obj.increase())
// console.log(obj.decrease())
// console.log(obj.reset())
// console.log(obj.set(10))

// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10


// function superSum (num) {
//     if(num <= 0) return 0
//     if(num === 1 ) return  (n) => n
//
//     let argument = []
//
//     function helper (...args) {
//         argument = [...argument, ...args]
//         if(argument.length >= num){
//             argument.length =  num
//           return argument.reduce((a,b) => a + b)
//         }
//         else{
//             return helper
//         }
//     }
//     return helper
// }

// console.log(superSum(3)(2,5,3))
// console.log(superSum(3))
// console.log(superSum(3)(2,5)(3,9))

//
// let arr = [1,2,[1,2,[2,[1],[2]]],2]
// let arrFlat =  []
//
// function flatArr (array) {
// //     for (let i = 0; i < array.length ; i++) {
// //         if(Array.isArray(array[i]))flatArr(array[i])
// //         else arrFlat.push(array[i])
// //     }
// // return arrFlat
//     return array.reduce((acc,num) =>Array.isArray(num) ? acc + flatArr(num) :  acc + num  ,0 )
// }
//
// console.log(flatArr(arr))


// function sum (num) {
//     if(num <= 1) return num
//     else  return sum(num-1) + sum(num - 2)
// }
//
// console.log(sum(7))

// let list = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: null
//             }
//         }
//     }
// };
// let sumValue = 0
// function sunValue(obj) {
//
//     for (let value in obj) {
//         if ( value === "value") sumValue += obj[value]
//              else sunValue(obj[value])
//     }
//
// return sumValue
// }
//
// console.log(sunValue(list))


// const sequenceSum = (begin, end, step) => {
// let value = 0
//     for (let i = begin; i <= end ; i+=step) {
//         console.log(value+=i)
//     }
//  return value
// };
// console.log(sequenceSum(2,6,2))

function replicate(times, number) {
    let arr = []
    for (let i = 0; i < times ; i++) {
        arr.push(number)
    }
    return arr
}

console.log(replicate(5,1))















