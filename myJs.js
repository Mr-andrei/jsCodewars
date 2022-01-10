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

function array(arr){
    let newArr = arr.replace(/[\s.,%]/g, '').split("")
    if(newArr.length <= 2){
        return null
    }
    else {
     newArr.pop()
        newArr.shift()
    }
  return newArr.join(" ")

}


console.log(array('4 f 2 e d f c e 3 e 2 d'))









