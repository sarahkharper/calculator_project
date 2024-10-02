//JAVASCRIPT FOR CALCULATOR PROJECT

//BASIC MATH FUNCTIONS

//addition function
function calcAdd(num1, num2){
    return num1 + num2;
}

//subtraction function
function calcSubtract(num1, num2){
    return num1 - num2;
}

//multiplication function
function calcMultiply(num1, num2){
    return num1 * num2;
}

//division function
function calcDivide(num1, num2){
    return num1/num2;
}

//SET UP CALCULATOR FUNCTIONALITY
//define variable for 1st number in calculator operation
let num1;
//define variable for operator in calculator operation
let op;
//define variable for 2nd number in calculator operation
let num2;

/*Create OPERATE function that takes an operator and 2 numbers
and then calls one of the above functions on the numbers (based on operator)*/
function calcOperate(operator, num1, num2){
    switch(operator) {
        case '+':
            return calcAdd(num1, num2);
            break;
        case '-':
            return calcSubtract(num1, num2);
            break;
        case '*':
            return calcMultiply(num1, num2);
            break;
        case '/':
            return calcDivide(num1, num2);
            break;
        default:
            return 'ERROR';
    }
}
