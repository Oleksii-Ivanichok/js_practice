const tabHeaders = document.querySelectorAll('[data-tab]');
console.log(tabHeaders);

const contentBoxes = document.querySelectorAll('[data-tab-content]')

console.log(contentBoxes);

tabHeaders.forEach(function(item){
    item.addEventListener('click', function(){
        console.log(this.dataset.tab);
        const contentBox = document.querySelector('#' + this.dataset.tab);
        console.log(contentBox);
        
        contentBoxes.forEach(function(item){
            item.classList.add('hidden');
        })

        contentBox.classList.toggle('hidden');
    })
})