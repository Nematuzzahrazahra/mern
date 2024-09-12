console.log("hello")
console.log("hiinode")
// types of variables
// 1.var
// 2.let
// 3.const
var a = 10
console.log(a)
let b = 20
console.log(b)
const c = 30
console.log(c)
var d = 10
console.log(a)
let e = 20
console.log(b)
const f = 30
console.log(c)

// there are three types
// is statement
// if-else
// if-else-if
// switch

// if-else statement
let age = 19
if(age%2==18)
{
    console.log("you are eligible for vote")
} else{
    console.log("yor are not eligible for vote")
}

console.log("------------")

let n = 5
if(n%2==0)
{
    console.log("no is even")
} else{
    console.log("no is odd")
}


// loops 
// 1. for loops
for(i=0; i<=10; i++)
    console.log(i)
console.log("------------")

for(i=1; i<=10; i++)
    console.log(i*2)

console.log("------------")

for(i=0; i<=5; i++){
    console.log("zahra")
}
console.log("------------") 
// for of loop
let names = ["mushaf", "tahniyat", "maryam"]
for(let name of names) {
    console.log(names)
}
console.log("------------")
// for in loop
let person = {
    name: "Ali",
    age: 25,
    city: "xyz"
} 
for(let k in  person) {
    console.log(k)
   

} 
console.log("------------")
// for in loop
let p = {
    name: "Ali",
    age: 25,
    city: "xyz"
} 
for(let k in p) {
    console.log(p,":", person[k])
} 
console.log("------------")

// let w = 0;
// while(w < =10) 
//  {
    // console.log(w);
    // i++
// }