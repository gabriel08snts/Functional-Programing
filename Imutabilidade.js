//EXEMPLO EM JS;
const cart = {
    quantity: 2,
    total: 200
};
//BAD;
cart.quantity = 3

//GOOD;
const newCart = {...cart, quantity: 3};

//EXEMPLO DEM REACT.JS;
const [amount, setAmount] = useState(0);

//BAD;
amount = 2;

//GOOD;
setAmount(2);
