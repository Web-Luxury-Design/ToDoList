const ListTache=document.querySelector(".list_tache")
const ContainerList=document.querySelector(".list_tache_container")
let checked=false

InputForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    ListTache.innerHTML+=`<li class="tache">${InputText.value}</li>`
    InputText.value=""
})
ListTache.addEventListener("click",(e)=>{
    if (checked){
        e.target.remove()
    }else{
        e.target.style.color="red"
        checked=true
    }
})