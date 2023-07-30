const button = document.querySelector('#button');

const content = document.querySelector('#content');

console.log(button);

button.addEventListener("click", () =>{
    
    if(content.classList.toggle('content-hidden')){
        button.textContent = 'Open block';
    }
    else{
        button.textContent = 'Close block';
    }
})
