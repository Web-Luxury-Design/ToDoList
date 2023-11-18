const listTask=document.querySelector(".list-tache")
let Trash;

InputForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    if (InputText.value.length>=2) {
        const li=document.createElement("li")
    li.textContent= InputText.value
    listTask.appendChild(li)
    InputText.value=""

    Trash=document.createElement("img")
    Trash.src="icone/trash.svg"
    li.appendChild(Trash)
    Trash.classList.add("trash")
    } else {
        alert("veuiller entrez au moins deux lettres")
    }
})

listTask.addEventListener("click",(e)=>{
    let task= e.target
    task.classList.toggle("checked")
    if (task.classList.contains("trash")) {
        let trashTask=task.parentElement
        trashTask.remove()
    }
})
