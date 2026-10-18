//let btn = document.querySelector("i")
//btn.addEventListener("click", async () =>{
 //   let inp = document.querySelector("input")
 //   let inp_val = inp.value
//    url
//})
let ci= "Lahore";



let t = async()=>{
    let inp = document.querySelector("input")
    let city = inp.value
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=Khushab&count=1`;
    let fez = await fetch(url)
    let data = await fez.json()
    let lat = data.results[0].latitude
    let lon = data.results[0].longitude
    const weather = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m&hourly=temperature_2m&timezone=auto`
    let fe = await fetch(weather)
    let dat =  await fe.json()
    let wind = dat.current.relative_humidity_2m
    console.log(city)
}
let btn = document.querySelector("i")
btn.addEventListener("click",async ()=>{
        let inp = document.querySelector("input")
        let city = inp.value.trim()
        city = city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
        const url = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`;
        let fez = await fetch(url)
        let data = await fez.json()
        let lat = data.results[0].latitude
        let lon = data.results[0].longitude
        const weather = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code,is_day`;
        let fe = await fetch(weather)
        let dat =  await fe.json()
        let humd = dat.current.relative_humidity_2m
        let temp = dat.current.temperature_2m
        let wind = dat.current.wind_speed_10m
        let code = dat.current.weather_code
        let city_name = document.querySelector("#city")
        city_name.textContent= city
        let tem = document.querySelector("#temp")
        tem.textContent= temp+"°C"
        let hum = document.querySelector("#hum")
        hum.textContent= humd+"%"
        let win = document.querySelector("#wind")
        win.textContent= wind+"K/hr"
        console.log(dat)
        let img = document.querySelector("#img")
        if (code === 0) {
            img.src = "clear.png";
        } 
        else if (code >= 1 && code <= 3) {
            img.src = "clouds.png";
        } 
        else if (code >= 51 && code <= 82) {
            img.src = "rain.png";
        } 
        else if (code >= 95) {
            img.src = "dark.png";
        }
}

)