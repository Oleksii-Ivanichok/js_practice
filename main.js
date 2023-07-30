const div = document.createElement('div');
div.classList.add('wrapper');
const body = document.body;
// console.log(body);
body.appendChild(div);
const header = document.createElement('h1');
header.textContent = 'DOM';

div.insertAdjacentElement('beforebegin', header)

const ul = `
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
`;

div.innerHTML = ul;

const img = document.createElement('img');
img.src = 'http://picsum.photos/120';
img.width = 240;
div.appendChild(img);
// console.log(img);

const elemHTML = `<div class='pDiv'>
    <p>paragrahp 1</p>
    <p>paragrahp 2</p>
</div>  `;

const ulList = div.querySelector('ul');

ulList.insertAdjacentHTML('beforebegin', elemHTML);

const pDiv = document.querySelector('.pDiv');
pDiv.children[1].classList.add('text');
// console.log(pDiv.children);

pDiv.firstElementChild.remove();

const generateAutoCard = (brand, color, year) => {
    const curDate = new Date();
    const curYear = curDate.getFullYear();
    return `
    <div class="autoCard">
        <h2>${brand} ${year}</h2>
        <p> Auto age ${curYear - year} </p>
        <p> color: ${color} </p>
        <button class='btn' type='button'>Delete</button>
    </div>`
}


const cardDiv = document.createElement('div');
cardDiv.classList.add('autos')
// console.log(cardDiv);

const carsList = [
    {brand: 'Tesla', year: '2002', color: 'red'},
    {brand: 'BMW', year: '2004', color: 'red'},
    {brand: 'Mercedes', year: '2015', color: 'blue'},
]
const carsHTML = carsList.map(car => {
    return generateAutoCard(car.brand, car.color, car.year);
}).join('');

cardDiv.innerHTML = carsHTML;

div.insertAdjacentElement('beforebegin', cardDiv);

// console.log(carsHTML)


const buttons = document.querySelectorAll('.btn');

console.log(buttons);

function handleClick(e){
    const currentButton = e.currentTarget;
    console.log(currentButton.closest('.autoCard'));

    currentButton.closest('.autoCard').remove();
}

buttons.forEach(button => {
    button.addEventListener('click', handleClick);
})