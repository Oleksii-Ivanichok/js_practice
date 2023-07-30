const headers = document.querySelectorAll('[data-name="accordeon-title"]')

console.log(headers)

headers.forEach((item)=>{
    item.addEventListener("click", showContent)
})

function showContent(){
    this.nextElementSibling.classList.toggle('hidden')
}