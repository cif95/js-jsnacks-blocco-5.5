/**
 * 
	A - Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)
	B - Scrivi una funzione che accetti un numero come argomento e ritorni il suo opposto (inverso additivo) es (34 -> -34)
	C - Data una lista di 10 numeri e 10 stringhe, restituisci una copia della lista con tutte le stringhe girate e i numeri opposti.
    * 
 */

function reverseString (string) {
	return string.split('').reverse().join("");
}

function reverseNumber (number) {
	return -number;  
}

const list = [ 11, 52, 20, 19, 81, 48, 29, 64, 5, 41, 'avventura', 'giardino', 'hotel', 'viaggiare', 'aereo', 'valigia', 'emozione', 'polaroid', 'profumi', 'colori'];

const reversedList = list.map((element)=>{
	if ( isNaN(parseInt(element))){
		return reverseString(element);
	} else {
		return reverseNumber(element);
	}
})

console.log(list);
console.log(reversedList);

