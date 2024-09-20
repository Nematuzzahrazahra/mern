let fruits = ["mango","apple","banana","pineapple","grapes","kiwi"]
console.log(fruits)
console.log("----array methods------")
/*1. push()- add the elements at the end of array
2. pop()- remove elements from the end of the array
3. shift()- remove element from the begining of the array
4. unshift()- add element at thr begiginin of the array
5. concat() - merge two array
6. slice()- extract a portion of an array
7. splice()- add/remode elelment from yhe array
8. indexOf()- find the index of an array
9. forEach()- loop through the array
10. map()- create a new array from an existing array
11. filter() - create a new array with elements that pass the test*/

// Indexing and Slicing
console.log(fruits[3])
console.log(fruits.slice(1,5))
console.log("----------------")

let code = ["html","css","javascript","java","python","c++","c#","c"]
console.log(code.slice(2,5))
console.log(code.length)
console.log("----------------")
// 1. push()- add the elements at the end of array
code.push("react")
console.log(code)
console.log("----------------")
// pop()- remove elements from the end of the array
code.pop()
console.log(code)
console.log("----------------")
// shift()- remove element from the begining of the array
code.shift()
console.log(code)
console.log("----------------")

// concat() - merge two array

const name = ["maryam","tahniyat","mushaf"]
const newarr = code.concat(name)
console.log(newarr)
newarr.push("array")
console.log(newarr)
console.log("----------------")
// indexOf()- find the index of an array
const lang = newarr.indexOf("tahniyat")
console.log(lang)
// splice()- add/remode elelment from yhe array(chodna, hatana,delete)
newarr.splice(2,2, "taharat")
console.log(newarr)
console.log("------------")
// forEach()- loop through the array
const arr = [1,2,3,4,5,6,7,8,9]
arr.forEach((x) => {
    console.log(x)
})
const aee = [1,2,3,4,5,4,6,3,5,8,9,0,3,4,4,5]
aee.forEach((x) => {
    aee.push(x*3)
})
console.log(aee)
console.log("------------")
const even = arr.map((x) => x*2)
console.log(even)
console.log("------------")
const evenNum = arr.filter((x) => x%2==0)
console.log(evenNum)