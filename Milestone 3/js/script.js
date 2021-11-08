let fontList = [
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
const selectElement = document.querySelector('#select-font');

let newHtml = '';

for(let i = 0; i < fontList.length; i++){
	// intero array
	const singleFont = fontList[i]
	// console.log(singleFont);
	// nome
	const nameFont = singleFont.name;
	// console.log(nameFont);
	// prefisso
	const prefixFont = singleFont.prefix;
	// console.log(prefixFont);
	// tipo
	const typeFont = singleFont.type;
	// console.log(typeFont);
	// family
	const familyFont = singleFont.family;
	// console.log(familyFont);
	// color
	const colorFont = singleFont.color;
	// console.log(colorFont);


	// nuovo testo che si aggiunge 
	newHtml +=`
		<div class="boxAnimals">
			<i class="${familyFont} ${prefixFont}${nameFont} ${colorFont}"></i>
			<h6>${nameFont}</h6>
		</div>
	`;
}

container.innerHTML = newHtml;

// far cambiare la visualizzazione in base al value
selectElement.addEventListener('change', (event) => {

	newHtml = '';

	let sceltaFont = selectElement.value;
	// scelta value in LOG
	console.log(sceltaFont);
	
	// filtrare solo ciò che mi serve
	let newArray = fontList.filter(function (el) {
		return el.type === sceltaFont;
	});

	if(sceltaFont === 'all'){
		newArray = fontList;
	}
	
	console.log(newArray);
	
	for(let i = 0; i < newArray.length; i++){
		// intero array
		const singleFont = newArray[i]
		// console.log(singleFont);
		// nome
		const nameFont = singleFont.name;
		// console.log(nameFont);
		// prefisso
		const prefixFont = singleFont.prefix;
		// console.log(prefixFont);
		// tipo
		const typeFont = singleFont.type;
		// console.log(typeFont);
		// family
		const familyFont = singleFont.family;
		// console.log(familyFont);
		// color
		const colorFont = singleFont.color;
		// console.log(colorFont);


		// nuovo testo che si aggiunge 
		newHtml +=`
			<div class="boxAnimals">
				<i class="${familyFont} ${prefixFont}${nameFont} ${colorFont}"></i>
				<h6>${nameFont}</h6>
			</div>
		`;
	}

	// aggiungo il testo al container che ho creato prima
	container.innerHTML = newHtml;

});





