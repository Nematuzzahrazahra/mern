const student = {
    name :'Ali',
    age : 24,
    email : 'alihaider786@gmail.com',
    mobile : 25937684753 , 
}
// to access the values the object throught the key
console.log(student.name)
//  replacing the value of the object
student.email = 'ali786110@gmail.com'
console.log(student)
console.log(student.email)
// adding new data
student.city = 'banglore'
console.log(student)
console.log("-------------")
const smartphone = {
    brand : "oppo",
    model : "a37",
    price : 65843,
    color : ["white", "gray","black","blue"]
}
console.log(smartphone)
smartphone.color[0] = "green"
console.log(smartphone)
console.log("--------------")
const phone = [
    {brand: "oppo", model:"A37",price:"84657" ,color:["green","red","yellow","gray","blue"] },
    {brand: "samsung", model:"Ay7",price:"6437" ,color:["blue","red","orange","gray","green"] },
    {brand: "realme", model:"c11",price:"57483" ,color:["navyblue","pink","yellow","gray","blue"] },
]
console.log(phone)
console.log(phone[0].model)
console.log(phone[1].color[3])
console.log(phone[2].price)
console.log("--------------")

const employee = [
    {name:"zahra",department:"it",salary:80000},
    {name:"bhawna",department:"it",salary:80000},
]
console.log(employee[1])

console.log("===========")
