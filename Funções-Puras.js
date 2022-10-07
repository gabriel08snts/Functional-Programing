//FUNÇÃO IMPURA;
//EXEMPLO 1:ESTÁ DEPENDENDO DE DADO EXTERNO QUE NÃO FOI PASSADO COMO PARÂMETRO;
function calculateCircumference(radius) {
    return Math.PI * (radius + radius);
};

//EXEMPLO 2:ESTÁ ALTERANDO UM DADO EXTERNO;
let person = {
    name:'Rafael Camarda',
    age:'Jovem'
};

function changeName(name) {
    person.name = name;
};

//FUNÇÃO PURA;
//EXEMPLO 1:
const calculateCircumference = function (pi, radius) {
    return pi * (radius + radius);
};

//COM ARROW FUNCTION:
const calculateCircumference = (pi, radius) => 
pi * (radius + radius);

//EXEMPLO 2:
const changePersonName = (person, name) =>
({...person, name})
