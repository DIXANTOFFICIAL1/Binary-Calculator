let result = "";
let currentOperation = "";
let previousResults = [];
let currentStep = -1;

function appendDigit(digit) {
result += digit;
document.getElementById('result').value = result;
}

function calculate() {
if (currentOperation && result) {
let operands = result.split(' ');
let operand1 = parseInt(operands[0], 2);
let operand2 = parseInt(operands[2], 2);
let operationResult = "";

switch (currentOperation) {   
case 'logicalAnd':
operationResult = (operand1 && operand2).toString(2);
break;
case 'logicalOr':
operationResult = (operand1 || operand2).toString(2);
break;
case 'logicalNot':
operationResult = (~operand1).toString(2);
break;
case 'bitwiseAnd':
operationResult = (operand1 & operand2).toString(2);
break;
case 'bitwiseOr':
operationResult = (operand1 | operand2).toString(2);
break;
case 'bitwiseXor':
operationResult = (operand1 ^ operand2).toString(2);
break;
case 'bitwiseNot':
operationResult = (~operand1).toString(2);
break;
case 'rightShift':
operationResult = (operand1 >> operand2).toString(2);
break;
case 'leftShift':
operationResult = (operand1 << operand2).toString(2);
break;
case 'unsignedRightShift':
operationResult = (operand1 >>> operand2).toString(2);
break;
default:
operationResult = "Error";
}

previousResults.push(result + " = " + operationResult);
currentStep = previousResults.length - 1;

result = operationResult;
document.getElementById('result').value = result;
}
}

function reset() {
result = "";
currentOperation = "";
document.getElementById('result').value = "";
}

function performOperation(operation) {
currentOperation = operation;
result += " ";
document.getElementById('result').value = result;
}

function prevOperation() {
if (currentStep > 0) {
currentStep--;
document.getElementById('result').value = previousResults[currentStep];
}
}

function nextOperation() {
if (currentStep < previousResults.length - 1) {
currentStep++;
document.getElementById('result').value = previousResults[currentStep];
}
}









