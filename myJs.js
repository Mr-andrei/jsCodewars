// let arr = [[1, 2, 3], [4, 5], [6], 8,10,12]
// let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]
// let sum = 0
// for (let subArr of arr) {
//     for (let elem of subArr) {
//         sum += elem;
//     }
//
// }
//
// console.log(sum)


//console.log(Array.isArray(arr[1]))
//
// for(let i = 0; i < arr.length; i++){
//     for(let j = 0; j < arr[i].length; j++ ){
//         for (let a = 0; a < arr[i][j].length; a++){
//         sum += arr[i][j][a]
//     }}
// }
//
// console.log(sum)


// let arr = []
//
// for (let i = 0; i < 3; i++){
//     arr[i] = []
//     for(let j = 0; j < 2; j++){
//         arr[i][j] = []
//         for (let a = 0; a < 5; a++){
//             arr[i][j].push(a)
//
//         }
//     }
// }
//
// console.log(arr)
//
//
//
// let arr = []
// let k = 1
//
// for (let i = 0; i < 3; i++){
//     arr[i] = []
//     for(let j = 0; j <= 2; j++){
//         arr[i][j] = k
//         k++
//     }
// }
//
// console.log(arr)


// function fakeBin(x) {
//     return x.split('').map(n => n < 5 ? 0 : 1).join('')
// }
//
// console.log(fakeBin('45385593107843568'))


// function smash (words) {
//
//     return words.join(" ")
// };
//
// console.log(smash(["hello", "world"]))


// function countSheeps(arrayOfSheep) {
//     let sum = 0
//     arrayOfSheep.map(m=> m === true ? sum+=1 : m)
//     return sum
// }
//
//
// console.log( countSheeps([true,  true,  true,  false,
//     true,  true,  true,  true ,
//     true,  false, true,  false,
//     true,  false, false, true ,
//     true,  true,  true,  true ,
//     false, false, true,  true ]))

// function array(arr){
//     let newArr = arr.replace(/[\s.,%]/g, '').split("")
//     if(newArr.length <= 2){
//         return null
//     }
//     else {
//      newArr.pop()
//         newArr.shift()
//     }
//   return newArr.join(" ")
//
// }
//
//
// console.log(array('4 f 2 e d f c e 3 e 2 d'))
//
//

// function arrayPlusArray(arr1, arr2) {
//     let newArr = [...arr1, ...arr2]
//     newArr.reduce((acc, item)=> acc + item)
//     return  newArr.reduce((acc, item)=> acc + item)
// }
// console.log( arrayPlusArray([1, 2, 3], [4, 5, 6]))
//
// function stringToArray(string){
//  return string.split(" ")
// }
// console.log(stringToArray("Robin Singh"))

// function check(a, x) {
//   return a.includes(x)
// }
// console.log(check([101, 45, 75, 105, 99, 107], 107))
//


// function digitize(n) {
//   let newArr = String(n).split("").reverse().join()
//   let b =[]
//   for(let i = 0; i < 5; i++)
//   return Number(newArr)
// }
//
// console.log(digitize(35231))


// function positiveSum(arr) {
//   let  sum  = 0
//   for (let i =0; i < arr.length; i++){
//     if ( arr[i] > 0 ){
//       sum +=arr[i]
//     }
//   }
//   return sum
// }
// console.log(positiveSum([1,2,3,4,5]))
//

// function maps(x){
//   return x.map( m => m + m )
// }
// console.log(maps([1, 2, 3]))

// function firstNonConsecutive (arr) {
//   let newArr = []
//   for(let i = 0; i < arr.length; i++){
//     let a = arr[i+1]
//     if(arr[i] > arr[i+1] && arr[i] < arr[i-1] ){
//
//      newArr.push(arr[i])
//     }
//
//     else return newArr
//   }
//   console.log(newArr)
// }
//
// console.log(firstNonConsecutive([-9,-8,-7,-6,-5,-4,-3,-2,-1,0]))


// function getAverage(marks){
// let b = marks.reduce((acc, elm) => (acc + elm) )
//
//   return Math.floor(b / marks.length)
// }
//
// console.log(getAverage([1,2,3,4,5,]))
//

//
// function countPositivesSumNegatives(input) {
//   let polsum = 0
//   let minusSum = 0
//   if(input.length <= 0  ){
//     return []
//   }
//   else{
//   for(let i = 0; i < input.length; i++){
//     if(input[i] !== 0 && input[i] > 0 ){
//       polsum += 1
//     }
//     else if( input[i] !== 0 && input[i] < 0 ){
//       minusSum += input[i]
//     }
//
//   }
//   return [polsum, minusSum]}
// }
//
// console.log(countPositivesSumNegatives([]))
//
//
// function paul(x) {
//     let value = 0
//     for(let i = 0; i < x.length; i++){
//         if(x[i] === "kata"){
//             value += 5
//         }else if(x[i] === "Petes kata" ){
//             value += 10
//         }
//         else if(x[i] === "life"){
//             value += 0
//         }
//         else if(x[i] === "eating"){
//             value += 1
//         }
//     }
//    if(value < 40){
//        return 'Super happy!'
//    }
//    else if( value >= 40 && value < 70){
//        return 'Happy!'
//    }
//    else if(value >= 70 && value < 100){
//        return 'Sad!'
//    }
//    else if (value > 100) return "Miserable!"
//
//
// }
//
// console.log(paul(['life', 'Petes kata', 'Petes kata', 'Petes kata', 'eating']))
//

// kata = 5
// Petes kata = 10
// life = 0
// eating = 1
// < 40 = 'Super happy!'
// < 70 >= 40 = 'Happy!'
// < 100 >= 70 = 'Sad!'
// > 100 = 'Miserable!'

//
// function pairZeros(arr) {
//     let  seenZero = 0;
//     return arr.filter(function(num){
//         return num != 0 || seenZero++ % 2 == 0;
//     });
// }
//
// console.log(pairZeros([1,0,1,0,2,0,0,3,0]))    //[1,0,1,2,0,3,0]

//
// function getMaxValue (arr) {
//     let max = arr[0]
//     for (let i = 0; i < arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i]
//         }
//     }
//     return max
// }
//
// console.log(getMaxValue([1222,22,12,123,11,1111]))


// function strong(n) {
//      if( n <= 1){
//          return 1
//      }
//       else return n * strong(n-1)
//         }
//
//
// console.log(strong(5))
//  console.log(strong(14))



// let arr = [21111,10,123,12333,123]
//
// console.log(arr.reduce((a,b) => a > b ? a : b ))
// //
//
//
// let arr = [1,22,12,323]
// let newArr = []
//   arr.forEach( f => {
//      return newArr.push(f + 10)
//  })
//
// console.log(newArr)


// function getEvenNumbers(numbersArray){
//    return numbersArray.reduce((a,b) => {
//        if(b % 2 ===0){
//            a.push(b)
//        }
//        return a
//    },[])
// }
//
// console.log(getEvenNumbers([1,2,3,6,8,10]))
//
// function mergeArrays(a, b) {
//     let newArr = []
//     let lenght = a.length > b.length ? a.length : b.length
//     for (let i = 0; i < lenght; i++) {
//         if (a[i] !== undefined && b[i] !== undefined){
//             newArr.push(a[i], b[i])}
//         else if(a[i] === undefined) newArr.push(b[i])
//         else if(b[i] === undefined) newArr.push(a[i])
//     }
//
//    return newArr
// }
//
// console.log(mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ['a', 'b', 'c', 'd', 'e']))


// function last(x){
// return  x.split(" ").sort(function(a,b){
//         return +( /\d{1}$/.exec(a) || [0] )[0] -
//             +( /\d{1}$/.exec(a) || [0] )[0];
//     }
// )
//
//
// }
//
// console.log(last('man i need a taxi up to ubud'))

// function numbers (...value) {
// let b =  value
//     return  b
// }

//
// const numbers = (...arr) => arr.every(x => typeof x === 'number')
// console.log(numbers((1, "a", 3)))
//

// function makeArmy() {
//     let shooters = [];
//  let globalscoup = {
//      i: undefined,
//
//  }
//     let i = 0;
//  let x = i
//     while (i < 10) {
//         let shooter = function() { // функция shooter
//             console.log( x ); // должна выводить порядковый номер
//         };
//         shooters.push(shooter);
//         i++;
//     }
//
//     return shooters;
// }
//
// let army = makeArmy();
//
// army[0](); // у 0-го стрелка будет номер 10
// army[5](); // и у 5-го стрелка тоже будет номер 10
// // ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...

//
// function swap (string) {
//
//     return string.split("").map(m => /[aeiou]/.test(m) ? m.toUpperCase() : m  ).join("");
// }
//
// console.log(swap("HelloWorld!"))


function minMax(arr){
    let min = Math.min(...arr)
    let max = Math.max(...arr)
    return [min,max]; // fix me!
}

console.log(minMax([1,2,3,4,5]))