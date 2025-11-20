// Exercício 2: Dado um array numérico qualquer sem valores repetidos, descubra qual é o índice do maior valor e o índice do menor valor.

const indice = (arr) => {
  let indiceMaior = 0;
  let indiceMenor = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[indiceMaior]) indiceMaior = i;

    if (arr[i] < arr[indiceMenor]) indiceMenor = i;
  }

  return `Da lista ${arr},\no índice menor é o número da posição ${indiceMenor} e o maior é o número da posição ${indiceMaior}`

}

lista = [10, 5, 22, 3, 7] // exemplo de array

console.log(indice(lista))
