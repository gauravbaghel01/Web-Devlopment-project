const ting=new Audio('ting.mp3')
const gameinfo=document.querySelector(".info")
let Turn='x'
let isgameover=false
//taking user input and playing ting sound
let boxes=document.querySelectorAll(".box")
Array.from(boxes).forEach(Element=>{
    Element.addEventListener('click',(e)=>{
        Element.querySelector(".boxtext")
            Element.innerHTML=Turn
            Turn=changeTurn()
            ting.play()
            checkwin()
            gameinfo.textContent="Turn for "+Turn
    })
})

//change turn
const changeTurn=(turn)=>{
    return Turn==='x'?'0':'x';
};

//check for win
const checkwin=(()=>{
let boxtext=document.getElementsByClassName("boxtext")
let win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
win.forEach(e=>{
    if (boxtext[e[0]].innerText===boxtext[[e[1]]].innerText && boxtext[e[2]].innerText===boxtext[[e[1]]].innerText &&boxtext[e[0]].innerText !=='') {
        gameinfo.innerHTML= boxtext[e[0]].innerText + " win"
        isgameover=true
    }
})
});

if (!isgameover) {
    gameinfo.textContent="Turn for "+Turn   
}

