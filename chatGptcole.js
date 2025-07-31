let query = "how are chatGPT, gemini and claude different from each other? answer in the perspective of a client who uses all three. Discribe all the comparision"
async function transformer(){
    let response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAlDDy8z9V3VMscLmKmu9VR1Z5YZembuzQ",{
        method:"POST",
        header:{"Content-type":"application:JSON"},
        body:JSON.stringify({
            contents:[{parts:[{text:query}]}]
        })
    })
    let data = await response.json()
    console.log(data)
    document.write(data.candidates[0].content.parts[0].text)
}
transformer()
