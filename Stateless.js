let number = 2;

//STATEFULL FUNCTION;
function square(number) {
    return number * number;
}

number = square();

//STATELESS FUNCTION;
const square = n => n * n;