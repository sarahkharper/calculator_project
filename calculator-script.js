//JAVASCRIPT FOR CALCULATOR PROJECT

const btns = document.querySelectorAll('button');
const currentDisplay = document.querySelector('#display');

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
    if(num2 === 0){
        return 'Nice Try';
    } else {
        return num1/num2;
    };
};

//SET UP CALCULATOR FUNCTIONALITY
//define variable for 1st number in calculator operation
let num1 = null;
//define variable for operator in calculator operation
let op = null;
//define variable for 2nd number in calculator operation
let num2 = null;

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

//add event listener to change button color when clicked
btns.forEach((btn) => {
    ['mousedown', 'mouseup'].forEach((mouseEv) => {
        btn.addEventListener(mouseEv, ()=>{
            btn.classList.toggle('clickColor');
        });
    });
});


//POPULATE THE DISPLAY WHEN YOU CLICK THE NUMBER BUTTONS
//create empty array to 'store' numbers as they're added
let displayValue = [];

//add event listener to number buttons to display value of clicked button on screen
const numberBtns = document.querySelectorAll('.number'); //get all number buttons
numberBtns.forEach((numberBtn) => {
    numberBtn.addEventListener('click', () =>{
        displayValue.push(numberBtn.textContent);
        if(displayValue.length > 10){ //make sure numbers fit within display
            displayValue.splice(-1,1);
            currentDisplay.textContent = displayValue.join('');
        } else {
            currentDisplay.textContent = displayValue.join('');
        }
    });
});

//add event listener to operator buttons to store numbers and operators, and do calculations if chaining
//operators
const opBtns = document.querySelectorAll('.operator');
opBtns.forEach((opBtn) => {
    opBtn.addEventListener('click', () =>{
        if(num1 === null){
            op = opBtn.textContent;
            num1 = displayValue.join('')*1;
            displayValue = [];
        } else {
            num2 = displayValue.join('')*1;
            num1 = calcOperate(op, num1, num2);
            op = opBtn.textContent;
            currentDisplay.textContent = num1;
            displayValue = [];
            num2 = null;
        }
    });
});

//add event listener to equals button to evaluate and print
const equalsBtn = document.querySelector('.equals');
equalsBtn.addEventListener('click', () => {
    num2 = displayValue.join('')*1;
    num1 = calcOperate(op, num1, num2);
    currentDisplay.textContent = num1;
    displayValue = [];
})

//add event listeners for "all clear" and "delete" buttons
const acBtn = document.querySelector('#clearAll'); //delete all cached data 
acBtn.addEventListener('click', () => {
    displayValue = [];
    num1 = null;
    op = null;
    num2 = null;
    currentDisplay.textContent = '0';
});

const delBtn = document.querySelector('#clearOne');
delBtn.addEventListener('click', () => {
    displayValue.splice(-1,1);
    currentDisplay.textContent = displayValue.join('');
});

//CHANGE BUTTON COLORS WHEN CLICKED