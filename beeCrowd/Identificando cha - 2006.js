var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

//                                         PROBLEMA: Identificando o Chá
/**
 * 
    Degustação de chá às escuras é a habilidade de identificar um chá usando apenas seus sentidos do olfato e paladar.
    Isto faz parte da Competição Ideal de Consumidores de Chá Puro (da sigla em inglês ICPC), que um programa de TV local está organizando. Durante o show, um bule de chá completo é preparado e são entregues uma xícara de chá para cada um dos cinco competidores. Os participantes devem cheirar, saborear e avaliar a amostra, de modo a identificar o tipo de chá, que pode ser: (1) o chá branco; (2) chá verde; (3) chá preto; ou (4) chá de ervas. No final, as respostas são verificadas para determinar o número de suposições corretas.

    Dado o tipo de chá real e as respostas fornecidas, determinar o número de participantes que receberam a resposta correta.
    Entrada

    A primeira linha contém um inteiro T representando o tipo de chá (1 ≤ T ≤ 4). A segunda linha contém cinco inteiros A, B, C, D e E, que indica a resposta dada por cada competidor (1 ≤ A, B, C, D, E ≤ 4).

 */

// Respostas são 4 valores de 1 a 4
let TipoDeCha = lines[0]
let Respostas = lines[1]

// Transformando as respostas em um array de inteiros
let RespostasArray = Respostas.split(' ').map(Number)

// Contando quantas respostas estão corretas
let acertos = RespostasArray.filter(resposta => resposta == Number(TipoDeCha)).length
// .filter(item => item === TipoDeCha).length
// .filter(resposta para cada integrante => reposta == (igual ao tipo de chá) 
// Imprimindo o número de acertos
console.log(acertos)

