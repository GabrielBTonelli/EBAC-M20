// Crie uma função que retorne a soma de todos os múltiplos de 5 ou 7 abaixo de 1000.

function somaMultiplos(a, b) {
  let soma = 0;
  let multiplos = [];

  for (let i = 1; i < 1000; i++) {
    if (i % a === 0 || i % b === 0) {
      soma += i;
      multiplos.push(i);
    }
  }
  //RETORNA A LISTA DOS MÚLTIPLOS E A SOMA DESTES ---> return `Os números múltiplos de ${a} e ${b} são:\n[${multiplos}]\n\nA soma destes múltiplos é: ${soma}` 
  return `A soma destes múltiplos é: ${soma}`
}

console.log(somaMultiplos(5,7))