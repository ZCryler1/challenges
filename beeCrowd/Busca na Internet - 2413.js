var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

//                             Problema: Busca na Internet - 2413

/**
 * 
João fez uma pesquisa em seu site de busca predileto, e encontrou a resposta que estava procurando no terceiro link listado. Além disso, ele viu, pelo site, que t pessoas já haviam clicado neste link antes. João havia lido anteriormente, também na Internet, que o número de pessoas que clicam no segundo link listado é o dobro de número de pessoas que clicam no terceiro link listado. Nessa leitura, ele também descobriu que o número de pessoas que clicam no segundo link é a metade do número de pessoas que clicam no primeiro link.

João está intrigado para saber quantas pessoas clicaram no primeiro link da busca, e, como você é amigo dele, quer sua ajuda nesta tarefa.
Entrada

Cada caso de teste possui apenas um número, t (1 ≤ t ≤ 1000), que representa o número de pessoas que clicaram no terceiro link da busca.
Saída

Para cada caso de teste imprima apenas uma linha, contendo apenas um inteiro, indicando quantas pessoas clicaram no primeiro link, nessa busca.
Exemplos de Entrada 	Exemplos de Saída

2 ==> 8
25 ==> 100
 */


let t = parseInt(lines.shift());
// O número de pessoas que clicaram no primeiro link é o dobro do segundo
// O número de pessoas que clicaram no segundo link é o dobro do terceiro
// Ou seja o dobro do dobro é quatro vezes o número de pessoas que clicaram no terceiro link
let primeiroLink = t * 4;
console.log(primeiroLink);