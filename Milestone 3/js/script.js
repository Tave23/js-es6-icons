const fontList = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

const container = document.querySelector('#container-fontBox');
let newHtml = '';

const selectElement = document.querySelector('#select-font');


// far cambiare la visualizzazione in base al value
selectElement.addEventListener('change', (event) => {

	console.log(selectElement.value);

	const fontScelti = document.querySelector('#container-fontBox');
	fontScelti.textContent = ``;
});



// for(let i = 0; i < fontList.length; i++){
//    // intero array
//    const singleFont = fontList[i]
//    // console.log(singleFont);
//    // nome
//    const nameFont = singleFont.name;
//    console.log(nameFont);
//    // prefisso
//    const prefixFont = singleFont.prefix;
//    console.log(prefixFont);
//    // tipo
//    const typeFont = singleFont.type;
//    console.log(typeFont);
// 	// family
//    const familyFont = singleFont.family;
//    console.log(familyFont);
// 	// color
//    const colorFont = singleFont.color;
//    console.log(colorFont);

// 	console.log('-----');

// 	// nuovo testo che si aggiunge 
//    newHtml +=`
// 	<div class="boxAnimals">
//       <i class="${familyFont} ${prefixFont}${nameFont} ${colorFont}"></i>
//       <h6>${nameFont}</h6>
//    </div>
// 	`;
// }

// aggiungo il testo al container che ho creato prima
container.innerHTML = newHtml;
