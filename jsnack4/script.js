//  Dato un array, 
const numbers = [1, 2 ,515 , 156, 151, 24];
// genera randomicamente due numeri:
// il primo numero che dovrà essere sempre minore del numero degli elementi dell'array
let number1 = randomInt(1, numbers.length - 1);
console.log(number1);
//    il secondo numero che dovrà essere sempre minore del primo numero
let number2 = randomInt(1, number1 - 1);
console.log(number2);

//function that generates a random integer between two values
function randomInt (min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}


// * Scrivi una funzione che accetti tre argomenti: l'array e i due numeri nell'ordine scritto prima.
// * La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra il primo numero e il secondo numero
function arrayBetweenTwoValues ( array, num1, num2) {
	const newArray = [];
	if ( (num1 >= array.length) || (num2 >= array.length)) {
		return false;
	} else {
		for ( let i = num2; i <= num1; i++) {
			newArray.push(array[i]);
		}
	}
	return newArray;
}

console.log(numbers);
console.log(arrayBetweenTwoValues(numbers, number1, number2));