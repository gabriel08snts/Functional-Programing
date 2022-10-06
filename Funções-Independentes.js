const random = (number, Math) => Math.floor(Math.random() * number);

//RECURSIVIDADE;
//ACHE O FATORIAL DE UM NÚMERO;
const factorial = x => {

    //SE O NÚMERO FOR 0;
    if (x === 0) {
        return 1;
    };

    return x * factorial(x - 1);
}