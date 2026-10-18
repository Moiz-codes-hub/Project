let mainbtn = document.querySelector("#gen")
let ans = document.querySelector("h2")
let password = "";
mainbtn.addEventListener("click",()=>{
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";

    

    let length = 8 + Math.floor(Math.random() * 13);

    for (let i = 0; i < length; i++) {
      password += chars[Math.floor(Math.random() * chars.length)];
    }
    ans.textContent = password

    
})
let copy = document.querySelectorAll(".opy")

copy.addEventListener("click", async () => {
    await navigator.clipboard.writeText(password);
    console.log("Text copied!");
})