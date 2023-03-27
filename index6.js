import { CalcClass } from './CalcClass.js';

function doCalculate(expression) {
    const breakers = /[-\+\*\/]/
    const members = expression.split(breakers);
    
    let operandA = members[0];
    let operandB = members[1];
    const operation = expression.charAt(operandA.length);
    operandA = Number(operandA);
    operandB = Number(operandB);
    
    let result;
    let calc = new CalcClass();

    switch (operation) {
        case '+':
            result = calc.add(operandA, operandB);
            break;
        case '-':
            result = calc.subtract(operandA, operandB);
            break;
        case '*':
            result = calc.multiply(operandA, operandB);
            break;
        case '/':
            result = calc.divide(operandA, operandB);
            break;
    }

    return result;
}