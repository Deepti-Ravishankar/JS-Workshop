
//Day 4 and day 5
let query = document.querySelector("input").value
let answerbox = document.querySelector("div")
async function gemini(){
    let response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyDvlRGovYsZc-2FX___sQGRnjn80mSg60Y",{
        method:"POST",              
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            contents:[{parts:[{text:query}]}]
        })
    })

    let data = await response.json()
    //console.log(data)
    answerbox.textContent = data.candidates[0].content.parts[0].text //path in response

}
gemini()

//Day 5

//DOM- Document object model

let heading = document.querySelector("h1")

function change(){
    heading.innerHTML = "Its day 5 already"
}
