async function getData(){
    let response = await fetch("https://dummyjson.com/quotes")
    let data = await response.json()
    console.log(data)

}
getData() 

