// Exercício 1: Calcule o MDC (máximo divisor comum) entre dois números.

function mdc(a, b) {
    let resto = a % b;
    a = b;
    b = resto;
  return `O máximo divisor comum é ${a}!`;
}

console.log(mdc(20, 28));