let boxs = document.querySelectorAll(".cell")
let reset = document.querySelector(".rep")
let h1 = document.querySelector("h1")
let winner = document.querySelector("#h1")
const partten = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
let count = 0
let turn = true
boxs.forEach((box) =>{
   box.addEventListener("click", function(){
    if(turn === true){
        box.textContent="X"
        turn=false
        count+=1
        box.style.color = "#00f3ff"
    }else{
        box.textContent="O"
        turn=true
        count+=1
        box.style.color="red"
    }
    box.disabled = true;
    checkwinner()
   })
});
let dis = ()=>{
    for(kkk of boxs){
        kkk.disabled=true
    }
}
let esi = () => {
    for(let kkk of boxs){
        kkk.disabled = false
        kkk.textContent = ""
    } 
}



let checkwinner = () =>{
    for(let par of partten){
        let val1 = boxs[par[0]].textContent
        let val2 = boxs[par[1]].textContent
        let val3 = boxs[par[2]].textContent
        if(val1!=""&&val2!=""&&val3!=""){
            if(val1===val2&&val2===val3){
                dis()
                winner.style.display = "block"
                winner.textContent=`the winner is ${val1}`

            
            }
        }
    }
    if(count===9){
        dis()
        winner.style.display = "block"
        winner.textContent="tie"
                
    }
}
let rest = () => {
    turn = true
    esi()
    winner.style.display="none"
    
}
reset.addEventListener("click",rest)