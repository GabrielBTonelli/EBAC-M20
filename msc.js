// Exercício 1: Calcule o MDC (máximo divisor comum) entre dois números.

function mdc(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return `${a}`;
}

// console.log(mdc(20, 28));

module.exports = { mdc }