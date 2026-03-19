let inpEl=document.getElementById("input-El")
let arr=[]
let btnEl=document.getElementById("inp-btn")
let delEl=document.getElementById("del-btn")
let list=document.getElementById("unorder")
let tab=document.getElementById("tab-btn")
let localstorage1=JSON.parse(localStorage.getItem("arr"))
console.log(localstorage1)
if (localstorage1){
    arr=localstorage1
    renderit()
}

delEl.addEventListener("dblclick",function(){
    localStorage.clear()
    arr=[]
    renderit()
})
tab.addEventListener("click",function(){
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    console.log(tabs[0].url);
    arr.push(tabs[0].url)
    localStorage.setItem("arr",JSON.stringify(arr))
    renderit()
})
})

btnEl.addEventListener("click",function(){
    arr.push(inpEl.value)
    inpEl.value=""
    localStorage.setItem("arr",JSON.stringify(arr))
    renderit()
    console.log(localStorage.getItem("arr"))

})
function renderit(){
    let listitems=""
    for(let i=0;i<arr.length;i++){
        listitems+=`<li><a target="_blank" href='#'>${arr[i]}</a></li>`
    }
    list.innerHTML=listitems
}
