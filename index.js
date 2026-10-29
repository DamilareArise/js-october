// console.log(4);

// Datatypes in JS
// 1. Stings 
// console.log("how are you");

// 2. Number types
// console.log(parseFloat("2.1"));
// console.log(parseInt("2.1"));
// console.log(Number("2.12"));
// console.log(-24);

// 3. Boolean: true or false
// console.log(false)

// 4. null type
null

// 5. undefined 

// array 
let students = ["jamie", "Temi", 'Juwon', 45, true, null, 4.67]
// console.log(students);
// console.log(students.length);
// console.log(students[2]);

// object
let student = {
    name: "Ade ola",
    gender: "Male",
    is_brilliant: true
}

// console.log(student['name']);
// console.log(student.gender);




// variable
// variables are container user to temporarily store values
// var, let, const

// var bottle = null;
// var bottle = "water"

// let bottle = "water"
// bottle = "oil"

// const bottle = "water"
// bottle = "oil"

// console.log(bottle);

// rules guiding variable declaration

// let _1stname =  
// pascal casing
let FirstNameOfTheStudent;
// camel casing
let firstNameOfTheStudent;
// snake casing
let first_name_of_the_student = 10;



// Concatenation
let user = "Jamie"
let age = 20
// console.log("Welcome to class", user);
// console.log("I am "+age +"years old");

// Template literal

// console.log(`I am here ${user}`);


// JS Operator 

// 1. Arithmetic Operator : +, -, *, /, %, **, //
// console.log(Math.floor(5/2));

// 2. Assignment operator: =, +=, -=, ++, --, /=, *=
let num = 5
// num += 5
// num -= 2
// num *= 2

// num--
// console.log(num);

// 3. comparison operator: ==, ===, >, <, <=, >=, !=
let num2 = "5"
// console.log(num != num2);

// 4. logical operator: &&, ||, !

let is_tall = true
let is_Godfearing = false
let is_rich = false

let my_man = is_tall && is_Godfearing || is_rich
// console.log(my_man);


// if/else statement

// if (num == 5) {
//     console.log("Correct");

// }
// else {
//     console.log("not correct");

// }

// if (is_tall && is_Godfearing) {
//     console.log("I will marry");

// }
// else if (is_rich) {
//     console.log("Na because you money oo. I will manage");

// }

// else {
//     console.log("Never never!");

// }


// let email = ""
// let email;
// let email = null;
// let email = prompt("Email")
// let passw = prompt("Password")

// if (!email){
//     console.log("email required"); 
// }
// else if (!passw){
//     console.log("password required");

// }
// else if (email =="dami@gmail.com" && passw=="12345"){
//     console.log("Welcome back");

// }
// else{
//     console.log("email or password incorrect");

// }





// let user_no = Number(prompt("Number: "))
// console.log(user_no);

// if (user_no % 2 > 0){
//     console.log(`${user_no} is an Odd Number`);

// }else{
//     console.log(`${user_no} is an Even Number`);
// }


// DOM - document object model

// let email = document.getElementById("email_inp")
// console.log(email.value);


// console.log(email_inp.value)

// let email = document.getElementById("email_inp")



function login() {
    let email = email_inp.value
    let password = password_inp.value
    if (!email) {
        // console.log("Email required");
        alertScreen.innerHTML = "Email required"
    }
    else if (!password) {
        alertScreen.innerHTML = "Password required"

    }
    else if (email == "dami@gmail.com" && password == "12345") {
        // console.log("welcome back");
        alertScreen.innerHTML = "Welcome back"

    }
    else {
        // console.log("Email or password invalid");
        alertScreen.innerHTML = "Email or password invalid"

    }
}

// login()

function doSomething() {
    //    console.log(password_inp.value);
    console.log(alertScreen.innerHTML);



}


// calculator

function getResult() {
    let val1 = Number(value1_inp.value)
    let val2 = Number(value2_inp.value)
    let operator = operatorSyntax.value
    let res = eval(`${val1} ${operator} ${val2}`)
    resultScreen.innerHTML = res

    console.log(operator);


}