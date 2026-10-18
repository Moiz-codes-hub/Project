let myscore =document.querySelector("#counting")
let sign = ["rock", "paper", "scissor"];
let rock = document.querySelector("#rocky")
let wins = document.querySelector("#wins")
let computer = document.querySelector("#score")
let computerscore= 0
let mescore = 0
let paper = document.querySelector("#paper")
let ses= document.querySelector("#ses")
let ol = document.querySelectorAll(".ol")
let reset = document.querySelector(".rep")

rock.addEventListener("click",function(){
    let randomWord = sign[Math.floor(Math.random() * sign.length)];
    if(randomWord==="paper"){
        wins.textContent="computer win"
        computerscore+=1
        computer.textContent=computerscore
        if(computerscore === 5){
            wins.textContent="computer win the game"
            ol.forEach(function(item){
                item.style.pointerEvents = "none"
            })
        }
        else{
             wins.textContent="computer win"
        }
    }
    else if(randomWord==="scissor"){
        wins.textContent="You win"
        mescore+=1
        myscore.textContent=mescore
        if(mescore === 5){
            wins.textContent="You win the game"
            ol.forEach(function(item){
                item.style.pointerEvents = "none"
            })
            
        }
        else{
             wins.textContent="You win"
        }
        
    }
    else{
        wins.textContent="tie"
    }
    
})







paper.addEventListener("click",function(){
    let randomWord = sign[Math.floor(Math.random() * sign.length)];
    if(randomWord==="scissor"){
        wins.textContent="computer win"
        computerscore+=1
        computer.textContent=computerscore
        if( computerscore=== 5){
            wins.textContent="computer win the game"
            ol.forEach(function(item){
                item.style.pointerEvents = "none"
            })
            
        }
        else{
             wins.textContent="computer win"
        }
    }
    else if(randomWord==="rock"){
        wins.textContent="You win"
        mescore+=1
        myscore.textContent=mescore
        if(mescore === 5){
            wins.textContent="You win the game"
            ol.forEach(function(item){
                item.style.pointerEvents = "none"
            })
            
        }
        else{
             wins.textContent="You win"
        }
        
    }
    else{
        wins.textContent="tie"
    }
    
})





ses.addEventListener("click",function(){
    let randomWord = sign[Math.floor(Math.random() * sign.length)];
    if(randomWord==="rock"){
        wins.textContent="computer win"
        computerscore+=1
        computer.textContent=computerscore
        if( computerscore=== 5){
            wins.textContent="computer win the game"
            ol.forEach(function(item){
                item.style.pointerEvents = "none"
            })
            
        }
        else{
             wins.textContent="computer win"
        }
    }
    else if(randomWord==="paper"){
        wins.textContent="You win"
        mescore+=1
        myscore.textContent=mescore
        if(mescore === 5){
            wins.textContent="You win the game"
            ol.forEach(function(item){
                item.style.pointerEvents = "none"
            })

        }
        else{
             wins.textContent="You win"
        }
        
    }
    else{
        wins.textContent="tie"
    }
    
})

reset.addEventListener("click",function(){
    myscore.textContent=0
    computer.textContent=0
    wins.textContent="Make your Move"
    mescore=0
    computerscore=0

    ol.forEach(function(item){
            item.style.pointerEvents = "auto"
           })
})