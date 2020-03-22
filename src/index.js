function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    let numbers = [];
    let operators = [];

    expr = expr.split('');
    for (let i = 0; i < expr.length; i++) {
        if (expr[i] === " ") {
            let remove = expr.splice(i, 1);
        }
        if (expr[i] === '0') {
            throw TypeError('TypeError: Division by zero.');
            break;
        }
        if (!isNaN(+expr[i])) {
            numbers.push(+expr[i]);
        }
        else {
            operators.push(expr[i]);
        }
    }

    switch (operators.pop()) {
        case '+':
            numbers[numbers.length - 2] = numbers[numbers.length - 2] + numbers.pop();
            break;
        case '-':
            numbers[numbers.length - 2] = numbers[numbers.length - 2] - numbers.pop();
            break;
        case '*':
            numbers[numbers.length - 2] = numbers[numbers.length - 2] * numbers.pop();
            break;
        case '/':
            numbers[numbers.length - 2] = numbers[numbers.length - 2] / numbers.pop();
            break;
    }


    let result = numbers[0];
    return result;
}

module.exports = {
    expressionCalculator
}