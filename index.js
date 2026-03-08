let inpEl=document.getElementById("input-El")
let arr=[]
let btnEl=document.getElementById("inp-btn")
let list=document.getElementById("unorder")

btnEl.addEventListener("click",function(){
    arr.push(inpEl.value)
    inpEl.value=""
    renderit()

})
function renderit(){
    let listitems=""
    for(let i=0;i<arr.length;i++){
        listitems+=`<li><a target="_blank" href='#'>${arr[i]}</a></li>`
    }
    list.innerHTML=listitems
}