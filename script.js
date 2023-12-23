const btn=document.getElementById('btn')
const btnx=document.getElementById('btnX')
const main=document.getElementById('main')

btn.addEventListener('click',()=>{main.style.left='0px'})
btnx.addEventListener('click',()=>{main.style.left='-180px'})
// btn.onclick(main.style.left='180px')



// btn.addEventListener("click", function () {
//     name.style.color = "blue";
// });