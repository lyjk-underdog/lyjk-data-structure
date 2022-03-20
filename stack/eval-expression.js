let expression = '5*8/5+1'

function evalExpression(expression) {
    let operateStack = [],
        operatorStack = [],
        operatorPriority = {
            '*': 1,
            '/': 1,
            '+': 0,
            '-': 0
        },
        operatorStrategy = {
            '+'(op1, op2) {
                return op1 + op2;
            },
            '-'(op1, op2) {
                return op1 - op2;
            },
            '*'(op1, op2) {
                return op1 * op2;
            },
            '/'(op1, op2) {
                return Math.floor(op1 / op2);
            }
        }

    let isOperate = target => !Number.isNaN(Number.parseInt(target));
    let peek = stack => stack.length ? stack[stack.length - 1] : null;

    let _evalTheFirstTwoOp = () => {
        let operate2 = operateStack.pop(),
            operate1 = operateStack.pop(),
            operator = operatorStack.pop();

        return operatorStrategy[operator](operate1, operate2);
    }

    for (let token of expression) {
        if (isOperate(token)) {
            let operate = Number.parseInt(token);
            operateStack.push(operate);
        } else {
            let preOperator = peek(operatorStack);

            while (preOperator && operatorPriority[preOperator] >= operatorPriority[token]) {

                operateStack.push(_evalTheFirstTwoOp());
                preOperator = peek(operatorStack);
            }

            operatorStack.push(token);
        }
    }

    return _evalTheFirstTwoOp();

}
