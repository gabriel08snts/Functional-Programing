//FUNÇÃO QUE ELEVA O NÚMERO AO QUADRADO;

//IMPERATIVO: FAÇA DA SEGUINTE FORMA;
let number = 2;

function square(number) {
    return number * number;
}

number = square();
console.log(`${number}`);

//DECLARATIVO: O QUE FAZER E O QUE NÃO FAZER;
const square = n => n * n;