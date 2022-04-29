
const btn=document.querySelector(".btn");
const modal=document.querySelector(".modal");
const close=document.querySelector(".close");
let show=true;

btn.addEventListener("click",(e)=>{
    if(show===true){
        show=false;
        modal.style.transform="translateY(0)";
    }else{
        show=true;
        modal.style.transform="translateY(-320px)";
    }
})
close.addEventListener("click",(e)=>{
    modal.style.transform="translateY(-320px)"
})