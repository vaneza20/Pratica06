// 1. Dado um array de inteiros na entrada, calcule o quadrado de cada elemento e salve em um novo array
const arr1 = [2,3,4,5];
const arrSub = arr.map((num) => Math.pow(num,2));
console.log(arrSub);

// 2. A partir de um array informado, mostre a soma de todos os elementos positivos
let arr2 = [1, 2, 3, 4, 5, 6];
let result1 = arr2.reduce((acumulador, valorAtual) => {
if(valorAtual > 0) {
return acumulador + valorAtual
} else {
return acumulador
}
});
console.log(result1)

// 3. Ordene o array de inteiro informado em ordem decrescente.
const arr3 = [1,2,3,4,5]
const result2  = arr3.short((a,b) => b - a);
console.log(result2);

// 4. Calcule a média dos elementos de um array de inteiro.
const arr4 = [1, 2, 3, 4, 5];
const average = arr4.reduce((a, b) => a + b, 0) / arr4.length;
console.log(average);

// 5. Gerador de iniciais: a partir do nome completo do usuário, mostre as iniciais do seu nome.
var nome = 'Cristina';
for (var i = 0; i < nome.length; i++) {
console.log(nome.charAt(i));
}

console.log(fatorial(5));

//[Extra] Dado um array de 2 dimensões, conte e mostre quantos elementos são distintos.
const arr5 = ["a","b","a","d","b"];
const uniqueCount = new Set(arr5).size;
console.log(uniqueCount);