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

//
// function minMax(arr){
//     let min = Math.min(...arr)
//     let max = Math.max(...arr)
//     return [min,max]; // fix me!
// }
//
// console.log(minMax([1,2,3,4,5]))

// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

// function sumTwo (a){
//     return function (b){
//         return a+b
//     }
// }
// console.log(sumTwo(3)(6))

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3
// function makeCounter (value){
//
//     return function increase (){
//        return  ++value
//     }
// }
// let counter = makeCounter(10)
// let counter2 = makeCounter(10)
// console.log(counter())
// console.log(counter2())
// console.log(counter())
// console.log(counter2())
// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

//
// function superSum(arg) {
//     if (arg <= 0) return 0
//     if (arg === 1) return arg
//     let arr = []
//     return function helper (...args) {
//         arr = [...arr, ...args]
//       if(arr.length === arg) {
//        return  arr.reduce((a,b) => a + b )
//       }
//           else return helper
//     }
// }

// console.log(superSum(3)(2)(5)(3))
//
//

// function sumRec (x, n){
//     if (n <= 1) return x
//     else{
//    return      x * sumRec(x, n-1)
//     }
// }
//
// console.log(sumRec(2,10))

//
// let company = { // тот же самый объект, сжатый для краткости
//     sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
//     development: {
//         sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
//         internals: [{name: 'Jack', salary: 1300}]
//     }
// };
//
// // Функция для подсчёта суммы зарплат
// function sumSalaries(department) {
//     if (Array.isArray(department)) { // случай (1)
//         return department.reduce((prev, current) => prev + current.salary, 0); // сумма элементов массива
//     } else { // случай (2)
//         let sum = 0;
//         for (let subdep of Object.values(department)) {
//             sum += sumSalaries(subdep); // рекурсивно вызывается для подотделов, суммируя результаты
//         }
//         return sum;
//     }
// }

// console.log(sumSalaries(company))
//

// function  sumTo(n) {
//     if(n <= 1) return 1
//     return n + sumTo(n-1)
// }
//
// console.log(sumTo(100))
//  function sumTo (n){
//     let value = 0
//     for(let i = 0; i <= n; i++){
//         value +=i
//     }
//     return value
//  }
//
//
// console.log(sumTo(100))
//
// function factorial (n){
//     if (n <= 0) return 1
//     return n * factorial(n-1)
// }
//
// console.log(factorial(5))
//
//Fn = Fn-1 + Fn-2
//
// function fib (n){
//     return n <= 1 ? n : fib(n - 1) + fib(n - 2)
// }
//
// console.log(fib(10))

// function mygcd(x,y){
//    return  y == 0 ? x : mygcd(y, x % y)
// }
//
// console.log(mygcd(500,1000))

//
// function bump(x){
//     let newArr = []
//    let a = x.split("")
//     for(let i = 0; i < a.length;i++){
//         if(a[i] === "n"){
//             newArr.push(a[i])
//         }
//     }
//     return newArr.length>= 15 ? "Car Dead" : "Woohoo!"
// }
//
// console.log(bump("_nnnnnnn_n__n______nn__nn_nnn"))
//
//

// function diffBig2(arr) {
//   let newArr = [...arr]
//   let a = Math.max(...newArr)
//   let index =  newArr.indexOf(a)
//   newArr.splice( index,1)
//   let b = Math.max(...newArr)
//
//     return a-b
// }
//
//
// console.log(diffBig2([1, 8, 3]))


// function part(x){
//   let newArr = ['Mine\'s a Pint']
//   let pravda = false
//   for(let i = 0; i < x.length; i++){
//     if(x[i] === "Partridge" || x[i] === "PearTree" || x[i] === "Chat" || x[i] === "Dan" || x[i] === "Toblerone" || x[i] === "Lynn" || x[i] === "AlphaPapa" || x[i] === "Nomad"   ){
//       newArr.push("!")
//       pravda = true
//     }
//   }
//   return pravda ? newArr.join("") : 'Lynn, I\'ve pierced my foot on a spike!!'
// }


// function part(x){
//   let arr = ['Partridge','PearTree','Chat','Dan','Toblerone','Lynn','AlphaPapa','Nomad']
//   let count = x.filter(item => arr.includes(item)).length
//  return (count > 0) ? 'Mine\'s a Pint!' + '!'.repeat(count-1) : 'Lynn, I\'ve pierced my foot on a spike!!'
// }
//
//
//
// console.log(part(['Grouse', 'Partridge', 'Pheasant']))
// console.log(part(['Pheasant', 'Goose', 'Starling', 'Robin']))

// function flattenAndSort(array) {
//
//   return  array.reduce((a,b)=> [...a, ...b]).sort((a,b) =>  a-b)
// }
//
// console.log(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]))

// function gooseFilter (birds) {
//     let  geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//     return   birds.filter(b => !geese.includes(b))
//
//
//
// };
// console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]))
//

//
// function digitize(n) {
//     let a = String(n).split("").reverse()
//   return    a.map( m => Number(m))
// }
// // String(n).split(" ").reverse()
// console.log(digitize(35231))

// function multipleOfIndex(array) {
//     return array.filter( (m,i) => m%i === 0 )
// }
//
//
// console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]))

// function noSpace(x){
//     return x.split(" ").filter(f => f !== "").join("")
// }
//
// console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))
// function findShort(s){
//
//  return  Math.min(...s.split(" ").map(m => m.length ))
// }
//
// console.log(findShort("bitcoin take over the world maybe who knows perhaps"))

//
// const getValue = (arr) => {
//     return arr.reduce((a,b) =>  a < b ? a: b)
// }
//
//
// console.log(getValue([1,23,12,34,56,19,22,-5,100]))


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


// export function getBanknoteList(amountOfMoney) {
//     const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
//     return
// }
// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

//
//  const isEvenIndexSumGreater = (arr)=> {
//     let  a = arr.filter((f,i) => i%2 === 0  ).reduce((a,b) => a+b )
//     let  b = arr.filter((f,i) => i%3 === 0  ).reduce((a,b) => a+b )
//      return a > b
// }
//
// console.log(isEvenIndexSumGreater([100, 1, 200, 2]))


// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив.
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


// function getSquarePositiveIntegers(array) {
// return array.filter( f => Number.isInteger(f) && f > 0 ).map(m => m*m)
//
// }
//
// console.log(getSquarePositiveIntegers([4, 5.6, -9.8, 3.14, 10, 6, 8.34, -2]))
//
// function twoOldestAges(ages) {
//   let newArr = [...ages]
//   let a = Math.max(...newArr)
//   let index =  newArr.indexOf(a)
//   newArr.splice( index,1)
//   let b = Math.max(...newArr)
//
//     return [a,b]
// }
//
//
// console.log(diffBig2([1, 8, 3]))

// function evenNumbers(array, number) {
//     let newArr = array.filter (f=> f%2 === 0)
//     let c =  newArr.length - number
//     return  newArr.splice(c,number)
// }
//
//
// console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))
//
//
// function doubleEveryOther(a) {
//     return a.map((m,i) => (i+1)%2 === 0 ? m*2 : m);
// }
//
// console.log(doubleEveryOther([1,2,3,4]))

// function nthSmallest(arr, pos){
//    return arr.sort((a,b) => a-b)[pos-1]
// }
//
//
// console.log(nthSmallest([3,1,2],2))
// function maxProduct(numbers, size){
//   let a =  numbers.sort((a,b) => b-a)
//     let c = 1
//     for(let i = 0; i < size; i++){
//     c *= a[i]
//     }
//    return  c
// }
//

// let arrayLeaders = numbers => {
//     let abc = []
//     let leng =  numbers.length
//     for(let i = 0; i < leng;i++){
//         let a = numbers.shift()
//         let ter = numbers.reduce((a,b) => a+b,0)
//         if(a > ter){
//             abc.push(a)
//         }
//     }
//     return abc
// }

// pow(2, 3) = 8


// function arraySum(arr){
//     let result = 0
//     for (let i = 0; i < arr.length ; i++) {
//         if(Array.isArray(arr[i])){
//             result += arraySum(arr[i])
//             }
//         else result += arr[i]
//         }
//     return result
//     }
// console.log(arraySum([1, 2, [1, 2]]))

// function sumOfIntegersInString(s){
//     return parseInt(s.replace(/\D+/g,"")).toString()
// }
// console.log(sumOfIntegersInString("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog"))
//


// function arraySum(arr){
//     return arr.reduce((a,b) => Array.isArray(b) ?  a + arraySum(b) : a + b ,0)
// }
// console.log(arraySum([1, 2, [1, 2],[2,2,[1,3]],[1,2]]))
//
// function mygcd(x,y){
//     let arr = []
//     for (let i = 1; i < 10000; i++) {
//         if ( x%i === 0 && y%i === 0 ){
//             arr.push(i)
//         }
//     }
//     return Math.max(...arr)
//
// }
// console.log(mygcd(30,12))
// function stray(numbers) {
//    return +numbers.filter( (value) => { return numbers.indexOf(value) == numbers.lastIndexOf(value) } )
// }
// let valueA = Math.max(...numbers)
// let valueB = Math.min(...numbers)
// let arrA = []
// let arrB = []
// for (let i = 0; i < numbers.length ; i++) {
//     if(numbers[i] === valueA){
//         arrA.push(numbers[i])
//     }
//     if(valueB === numbers[i]) arrB.push(numbers[i])
// }
//
// return arrA.length === 1 ? arrA[0] : arrB[0]

// console.log(stray([ 0, 1, 0 ]))
// console.log(stray([ 0, 1, 1, 1, 1, 1, 1, 1 ]))
// console.log(stray([ 8, 8, 8, 8, 8, 8, 8, 7 ]))


//
// function sumOfMinimums(arr) {
//  return   arr.reduce((a,b)=> a + Math.min(...b),0)
// }
//
//
// console.log(sumOfMinimums( [[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]))


// function lastDigit(n, d) {
//     if (d <= 0) return []
//     let arr = Array.from(String(n), Number)
//     let leng = arr.length
//     if (d >= 0 && d <= leng) {
//         let a = leng - d
//         return arr.slice(a)
//     }
//     if (d > leng) return arr
// }
//
// console.log(lastDigit(123767, 4))
// console.log(lastDigit(1343, 5))
// console.log(lastDigit(1, 1))

// function cubeSum(n, m){
//     if (n === m ) return 0
//     let sum = 0
//     for (let i =( n < m ? n : m) + 1; i <= (n > m ? n : m); i++) {
//         sum+= i**3
//     }
//     return sum
// }
// console.log(cubeSum(2, 3))
//
// const prevMultOfThree = n => {
//     if (n % 3 === 0) return n
//      let arr = Array.from(String(n), Number)
//     let leng = arr.length
//     let value = 0
//     for (let i = 0; i < leng ; i++) {
//      arr.length = leng-1
//         if(arr.join("") % 3 === 0) {
//           value =  arr.join("")
//         }
//      return value
//     }
//
//
// }
//
//
// console.log(prevMultOfThree(1244)) //12
//
//


// const fruit = ['apple','banan','orange','banan','banan','apple','orange','banan','orange','banan','orange','apple']
//
// // const sortFruit = (arr) => {
// //     let newOnj = {}
// //     for (let i = 0; i < arr.length; i++) {
// //         newOnj[arr[i]] += i
// //     }
// //     return newOnj
// // }
//
// // console.log(sortFruit(fruit))
//
// let newArr = fruit.reduce((a,b) => a[b] = (a[b] || 0) + 1 ,{})
// console.log(newArr)


// реализовать счетчик counter в виде объекта со следующими методами:
// get current count; - выводит текущее значение счетчика
// increment; - увеличивает значение счетчика на 1
// decrement; - уменьшает значение счетчика на 1
// set current count; - принимает и присваивает значение счетчику
// rest current count - устанавливает значение счетчика равным 0
// все методы должны ссылаться на сам объект

// let counter = {
//     count : 0,
//     getCurrentCount (){
//         console.log(this.count)
//     },
//     increment() {
//         ++this.count
//        return  this
//     },
//     decrement(){
//         --this.count
//        return  this
//     },
//     setCurrentCount (value) {
//        this.count = value
//         return this
//     },
//     restCurrentCount () {
//         this.count = 0
//     }
// }
//
// counter.setCurrentCount(10).increment().increment().increment().decrement().getCurrentCount()
//
//// Написать функцию конструктор myFirstConstructorFunc которая принимает 2 параметра name и age и возвращает объект
// // у которого будут эти свойства и метод greeting из Task 01
//

// function MyFirstConstructorFunc (name,age) {
//     this.name=name
//     this.age=age
// }
// let  fn = new MyFirstConstructorFunc("Andrei",25)
// console.log(fn)

// let One = {name: 'One'};
// let Two = {name: 'Two', sayHello: function() {console.log(`Hello, my name is ${this.name}`)}};
//
// Two.sayHello.bind(One)()


// создайте объект helperObj у которого есть следующие методы:
// changeName - меняет значение у свойства name объекта на полученное значение
// setAge - устанавливает полученное значение в свойство age объекта
// greeting - используется функция sayHello из Task 05
// можно использовать @ts-ignore

// let helperObj = {
//     changeName(valueName){
//         this.name = valueName
//     },
//     setAge (valueAge) {
//         this.age = valueAge
//     },
//     greeting :
//         function() {console.log(`Hello, my name is ${this.name}`)}
//
// }

// f([1, 2, null, 7, 8, null, 3]); // => [2, 4, 14, 16, 6]

// function f (arr) {
//     let newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] ) {
//             newArr.push(arr[i]*2)
//         }
//     }
//     return newArr
// }
//
// console.log(f([1, 2, null, 7, 8, null, 3]))


// for (var i = 0; i < 10; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, 100);
// }


// // Есть некоторая строка (const str = 'fgfggg';), что будет, если мы возьмем str[0]
// const str = 'fgfggg'
// console.log(str[0])
//
// // Task 2
// // Реализуйте необходимый код, что бы выражение (2).plus(3).minus(1) сработало и вернуло 4
//
//
//
//
//
//
// // Task 3
// // Реализуйте функцию, которая принимает следующие аргументы (строки) '*', '1', 'b', '1c', и возвращает строку '1*b*1c'
//
// function someFn (a, ...args) {
//     console.log(args.join(""))
// }
//
// someFn('*', '1', 'b', '1c')

// Напишите функцию которая найдет сумму всех вершин в структуре данны типа tree
// Рекурсивно
// В цикле

// const tree = {
//     valueNode: 3,
//     next: [{
//         valueNode: 1,
//         next: null
//     },
//         {
//             valueNode: 3,
//             next: null
//         },
//         {
//             valueNode: 2,
//             next: null
//         },
//         {
//             valueNode: 2,
//             next: [
//                 {
//                     valueNode: 1,
//                     next: null
//                 },
//                 {
//                     valueNode: 5,
//                     next: null
//                 }
//             ]
//         }]
// };
//
//
// function sumFn ( obj ) {
//     let value = 0
//     for (let key in obj){
//         if
//     }
//
// }
//
// Реализовать функцию f: f(2, 3) -> 5, при вызове f(2)(3), тоже вернет 5

// function somFn (a){
//     return function (b) {
//         return a+b
//     }
// }
//
// console.log(somFn(2)(3))
//

// Реализовать функцию f: f(1)(2)(3)() -> 6, f(0)(3)(1)(5)() -> 8


// function somFn (a){
//     return function (b) {
//         return function (c){
//            return function (){
//               return  a+b+c
//            }
//         }
//     }
// }

// console.log(somFn(1)(2)(3)())
//
// function somFn (a){
//     return function (b) {
//         return function (c){
//            return function (d){
//               return  function (){
//                   return b+d+(a/c)
//               }
//            }
//         }
//     }
// }
//
// console.log(somFn(0)(3)(1)(5)())

// Необходимо написать функцию, принимающую в аргументах массив целых чисел и возвращающую новый массив, состоящий только из уникальных значений первого массива.

// let arrr = [1, 2, 2, 1, 4, 5, 6, 7, 3, 4, 6, 7, 8, 4, 2, 4, 5, 6, 7, 8, 9]
//
//
// function sortArr(arr) {
//     let newArr = {}
//
//     arr.forEach(item => {
//         newArr[item] = item
//     })
//     return Object.keys(newArr)
// }
// console.log(sortArr(arrr))


function findRoutes(routes) {
    let newArr = {}
    routes.reduce((a,b)=>  a.concat(b),[]).forEach(item => {
        newArr[item] = item
    })
     return Object.keys(newArr).join(",")

}


console.log(findRoutes([["MNL", "TAG"], ["CEB", "TAC"], ["TAG", "CEB"], ["TAC", "BOR"]]))























