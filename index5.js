function doCalculate(expression) {
    const breakers = /[-\+\*\/]/
    const members = expression.split(breakers);
    
    let operandA = members[0];
    let operandB = members[1];
    const operation = expression.charAt(operandA.length);
    operandA = Number(operandA);
    operandB = Number(operandB);
    
    let result;

    switch (operation) {
        case '+':
            result = add(operandA, operandB);
            break;
        case '-':
            result = subtract(operandA, operandB);
            break;
        case '*':
            result = operandA * operandB;
            break;
        case '/':
            result = operandA / operandB;
            break;
    }

    return result;
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}