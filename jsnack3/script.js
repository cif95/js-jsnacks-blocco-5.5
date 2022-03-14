/**
 * 
 * 
	Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall'altro
	es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

 * 
 */

const letters = ['a', 'b', 'c', 'd'];
const numbers = [1, 2, 3, 4];

function mergeArrays (array1, array2) {
	let mergedArray = array1.map((element, index) => [element, array2[index]]).flat();
	return mergedArray;
}

console.log(mergeArrays(letters, numbers));
