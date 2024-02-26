let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset-btn");
let newbtn=document.querySelector("#new-button");
let messagec=document.querySelector(".message-container");
let message=document.querySelector("#message")
let turnO= true// player x and player y


const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],    
    [3,4,5],
    [6,7,8],];


    boxes.forEach((box)=>{
        box.addEventListener("click",()=>{
        console.log("box was clicked"); 
       
        if (turnO) {
           box.innerText= "O";
           turnO=false; 
        }else{
            box.innerText="x";
            turnO=true;
        }
        box.disabled=true;
        checkwinner();
        })
    })


    

    let resetgame=()=>{
        turnO=true;
        enabledbox();
        messagec.classList.add("hide");
    }

    const enabledbox=()=>{
        for (const box of boxes) {
         box.disabled=false;
         box.innerText="";
        }
     }
    const disabledbox=()=>{
       for (const box of boxes) {
        box.disabled=true;
       }
    }
    const showwinner=(winner)=>{
        message.innerText=`Congratulation winner is ${winner}`;
        messagec.classList.remove("hide");
        disabledbox();
    }

    const checkwinner=()=>{
     for (const pattern of winPatterns) {
        let position1=boxes[pattern[0]].innerText;
        let position2=boxes[pattern[1]].innerText;
        let position3=boxes[pattern[2]].innerText;
if (position1!=""&& position2!=""&&position3!="") {
   if (position1===position2&& position2===position3) {
    console.log("winner",position1)
    showwinner(position1);
   }
}

     }
    }


    newbtn.addEventListener("click",resetgame)
    reset.addEventListener("click",resetgame)