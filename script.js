//Day1

console.log("This is in the separate JS file within the script.js")
document.write("This prints in the browser page <br>")
document.write("youtube<br>")

let myname = "Rahul"

document.write("I am "+myname+"<br>")
document.write(myname+ " is web developer<br>")
document.write(myname+ " is also my brother<br>")

// operators

let sum = 10 + 10
document.write(sum+"<br>")

let num1 = 867
let num2 = 65
let addition = num1 + num2
console.log(addition)
document.write("addition:"+addition+"<br>")

let subtraction = num1 - num2
document.write("subtraction:"+subtraction+"<br>")

let multiplcation = num1 * num2
document.write("multiplcation:"+multiplcation+"<br>")

let division = num1/num2
document.write("division:"+division+"<br>")

//Day2

let myarray = ["Raj", "Manish", "Harshini", "Rakesh", "Manju"]
// let myname1 = "Raj"
// let myname2 = "Manish"
// let myname3 = "Harshini"
// let myname4 = "Manjur"
//Its a tedious way to declare each variable to array members.
//array is used when the information is scattered and no grouping is done.
console.log(myarray[2])


let myobj= {
    name:"Rajdeep", 
    age:30, 
    education:"BCA", 
    exp:15}
//object is used when data is linked to each other. When there is a group of information
console.log(myobj.age,myobj.name)    //to access the object data

function dish(){
    console.log("Step1: puri of tomato and onion")
    console.log("step2: Egg")
    console.log("Step3: Boil")
    console.log("Step4: Tadka")
}
dish() //to display all steps.

//to make them dynamic 

function dish(ingredient){
    console.log("Step1: puri of tomato and onion")
    console.log("step2: "+ingredient)
    console.log("Step3: Boil")
    console.log("Step4: Tadka")
}
dish("potato") 
dish("Egg")

function login(id,password){
    console.log("id:"+id)
    console.log("Password:"+password)
}
login(101,2003)

let deepti = {
    maths: 98,
    science: 78,
    english: 90,
    history: 89,
    geography:100
}
function totalMarks(student){
    let total = student.english+student.geography+student.history+student.maths+student.science
    console.log(total)
}
totalMarks(deepti)

//Day3

async function getposts(){

    let response = await fetch("https://jsonplaceholder.typicode.com/users") //get response

    let posts = await response.json() //convert response to readable json format from raw data

    console.log(posts)   //print json data

}
getposts()

//logic building - its breaking down a problem into simpler steps.

//Day 4
let query = "what is the age of earth?"
async function gemini(){
    let response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyDvlRGovYsZc-2FX___sQGRnjn80mSg60Y",{
        method:"POST",              
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            contents:[{parts:[{text:query}]}]
        })
    })

    let data = await response.json()
    console.log(data)
    document.write(data.candidates[0].content.parts[0].text) //path in response

}
gemini()