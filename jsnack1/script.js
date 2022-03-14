/**
 * Crea un array di 10 oggetti che rappresentino una zucchina.
 * indicando per ognuna varietà, peso e lunghezza.
 *
 * A - Calcola quanto pesano tutte le zucchine
 * B - Dividi in due array separati le zucchine che misurano più o meno di 15cm
 * C - Stampa separatamente quanto pesano i due gruppi di zucchine
 *
 * */


const zucchine = [
	{
		varietà: 'nera',
		peso: 100,
		lunghezza: 10,
	},
	{
		varietà: 'gialla',
		peso: 70,
		lunghezza: 18,
	},
	{
		varietà: 'napoletana',
		peso: 65,
		lunghezza: 15,
	},
	{
		varietà: 'rossa',
		peso: 85,
		lunghezza: 20,
	}
];

const zucchineLunghe = [];
const zucchineCorte = [];
let pesoTotale = 0;
let pesoZucchineLunghe = 0;
let pesoZucchineCorte = 0;


zucchine.forEach((element)=> {
	pesoTotale += element.peso;

	if (element.lunghezza >= 15 ){
		zucchineLunghe.push(element);
		pesoZucchineLunghe += element.peso;
	} else {
		zucchineCorte.push(element);
		pesoZucchineCorte += element.peso;
	}
	
});

console.log(pesoTotale, zucchineCorte, zucchineLunghe, pesoZucchineCorte, pesoZucchineLunghe);



