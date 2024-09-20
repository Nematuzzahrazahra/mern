// Types of Functions--
// 1- User Defined Functions
// 2- Built-in Functions

// 1-User Defined Functions

//Syntax--
//function functionName() {
// Code to be Executed 
// }
//function call()
//function name()

// Non Parameterized Functions 
function greet() {
    console.log("Hello, Good Morning");
}
greet()

console.log(".................")

// Parameterized Function 
function greet1(name) {
    console.log("Hello", name)
}
greet1("John")
greet1("")

// Function Without return statement--
function addNum1(a,b){
    return a+b
}
num1 = addNum1(10,20)
console.log(num1)
num2 = addNum1(20,30)
console.log(num2)

console.log("")
console.log("")


function square(num){
    return num**2;
}
console.log(square(3))

console.log("")


function myFunc(num,pow){
    return num**pow;
}
console.log(myFunc(3,3))
console.log("")



console.log("Arrow Functions-")


console.log("")


//Syntax for Arrow Functions
//const functionName = (parameter) => {
    // code to be executed  
    //}

    const double = (n) =>n*2
    console.log(double(5))

    console.log("")

    //Question--

    const evenOdd = (num) => {
        if (num % 2==0){
            return "Even"
        }
        else{
            return "odd"
        }
    }
    console.log(evenOdd(2))

    console.log("")


    const eveOdd = (num) => {
        if (num % 2==0){
            console.log(num,"is an Even Number")
        }
        else{
            console.log(num,"is an Odd Number")
        }
    }
    eveOdd(3)
    console.log("--------")

    const evenodd = (number) => {
        if (number % 2==0){
        console.log(number,"is an even no.")
        }
        else{
        console.log(number,"num is odd")
        }
    }    
    evenodd(12)
    console.log("-------")
    const EvenOdd = (num) => {
        if (num % 2==0){
            return "Even"
        }
        else{
            return "odd"
        }
    }
    console.log(EvenOdd(2))

    console.log("")
    console.log("-------")
    