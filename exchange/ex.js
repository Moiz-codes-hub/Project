
let drop = document.querySelectorAll(".Country")
let right_image = document.querySelector("#rgimg")
let show = document.querySelector("#USD")


for(let select of drop){
    for(let curr in countryList){
        let newoption = document.createElement("option")
        newoption.textContent = curr
        newoption.value = curr
        select.append(newoption)
    }
    select.addEventListener("change",(evt)=>{
        update(evt.target)
    })
}
let update = (Element)=>{
    let curr = Element.value
    let main = countryList[curr]
    let src = `https://flagsapi.com/${main}/shiny/64.png`
    let img = Element.parentElement.querySelector("img")
    img.src = src

}

let btn = document.querySelector("button")
btn.addEventListener("click", async (evt)=>{
    evt.preventDefault()

    let input = document.querySelector("input")
    let amount = input.value
    if(amount < 1 ){
        amount = "1"
        amount = 1
        input.value =  amount
    }
    let form = drop[0].value
    let to  = drop[1].value
    let url = `https://open.er-api.com/v6/latest/${form}`
    let fet= await fetch(url)
    let data = await fet.json()
    let re = data.rates[to]
    let result = amount * re
    show.textContent = result
    
    })
