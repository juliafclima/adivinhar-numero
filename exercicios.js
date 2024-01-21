/* Criar uma função que exibe "Olá, mundo!" no console.

Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

Criar uma função que recebe três números como parâmetros e retorna a média deles.

Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo */

function mensagem(nome) {
  console.log(`Olá, ${nome}!`);
}

mensagem("Julia");

function media(n1, n2, n3) {
  return (n1 + n2 + n3) / 3;
}

console.log(media(12, 22, 24).toFixed(1));

function qualEMaior(n1, n2) {
  return n1 > n2
    ? `${n1} é maior`
    : n2 > n1
    ? `${n2} é maior`
    : `Eles são iguais`;
}

console.log(qualEMaior(3, 3));

function potencia(n1) {
  return n1 * n1;
}

console.log(potencia(9));


/* Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

Crie uma função que mostre na tela a tabuada de um número dado como parâmetro. */

function calcularIMC(altura, peso) {

}