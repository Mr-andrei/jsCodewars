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


function countPositivesSumNegatives(input) {
  let polsum = 0
  let minusSum = 0
  if(input.length <= 0  ){
    return []
  }
  else{
  for(let i = 0; i < input.length; i++){
    if(input[i] !== 0 && input[i] > 0 ){
      polsum += 1
    }
    else if( input[i] !== 0 && input[i] < 0 ){
      minusSum += input[i]
    }

  }
  return [polsum, minusSum]}
}

console.log(countPositivesSumNegatives([]))

















