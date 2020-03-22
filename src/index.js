function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    let numbers = [];
    let operators = [];
    let PRIORITY = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2,
    };

    let lastNumber = false;
    let lastPriority = 0;

    expr = expr.split(' ').join('');
    for (let i = 0; i < expr.length; i++) {
        if (isNaN(+expr[i])) {
            let currentPriority = findPriority(expr[i]);
            if (lastPriority >= currentPriority) {
                let updatedNumber = doOperation(numbers.pop(), numbers.pop(), operators.pop());
                numbers.push(updatedNumber);
                if (operators.length > 0) {
                    let previousOperator = operators.pop();
                    let previousOperatorPriority = findPriority(previousOperator);
                    if (previousOperatorPriority >= currentPriority) {
                        let firstNumber = numbers.pop();
                        let secondNumber = numbers.pop();
                        let updatedNumber = doOperation(firstNumber, secondNumber, previousOperator);
                        numbers.push(updatedNumber);
                    }
                    else {
                        operators.push(previousOperator);
                    }
                }
            }

            operators.push(expr[i]);
            lastNumber = false;
            lastPriority = currentPriority;
        }
        else if (lastNumber) {
            let updatedNumber = +(numbers.pop() + expr[i]);
            numbers.push(updatedNumber);
        }
        else {
            numbers.push(+expr[i]);
            lastNumber = true;
        }
    }
    let result = doOperation(numbers.pop(), numbers.pop(), operators.pop());
    numbers.push(result);
    if (numbers.length > 1) {
        result = doOperation(numbers.pop(), numbers.pop(), operators.pop());
    }
    return result;


    function doOperation(firstNumber, secondNumber, operator) {
        let result = 0;
        switch (operator) {
            case '+':
                result = secondNumber + firstNumber;
                break;
            case '-':
                result = secondNumber - firstNumber;
                break;
            case '*':
                result = secondNumber * firstNumber;
                break;
            case '/':
                result = secondNumber / firstNumber;
                break;
        }
        return result;
    }


    function findPriority(symb) {
        let priority = 0;
        for (let key in PRIORITY) {
            if (key === symb) {
                priority = PRIORITY[key];
            }
        }
        return priority;
    }
}

module.exports = {
    expressionCalculator
}