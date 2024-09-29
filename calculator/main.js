let buttons = document.querySelectorAll('#calculator button');
let display = document.getElementById('box');

let currentValue = '0';
let operator = null;
let previousValue = null;
let memoryValue = 0;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        handleButtonClick(button.id);
    });
});

function handleButtonClick(buttonId) {
    switch (buttonId) {
        case 'mc':
            memoryValue = 0;
            break;
        case 'm+':
            memoryValue += parseFloat(currentValue);
            break;
        case 'm-':
            memoryValue -= parseFloat(currentValue);
            break;
        case 'mr':
            currentValue = memoryValue.toString();
            break;
        case '%':
            currentValue = (parseFloat(currentValue) / 100).toString();
            break;
        case 'ce':
            clearDisplay();
            break;
        case 'ca':
            clearDisplay();
            break;
        case 'remove':
            if (currentValue.length > 1) {
                currentValue = currentValue.slice(0, -1);
            } else {
                currentValue = '0';
            }
            break;
        case '1divx':
            currentValue = (1 / parseFloat(currentValue)).toString();
            break;
        case 'pow':
            currentValue = Math.pow(currentValue, 2).toString();
            break;
        case 'sqrt':
            currentValue = Math.sqrt(parseFloat(currentValue)).toString();
            break;
        case '+':
            calculate();
            operator = '+';
            break;
        case '-':
            calculate();
            operator = '-';
            break;
        case '*':
            calculate();
            operator = '*';
            break;
        case '/':
            calculate();
            operator = '/';
            break;
        case 'changeSign':
            currentValue = (parseFloat(currentValue) * -1).toString();
            break;
        case '=':
            calculate();
            operator = null;
            break;
        default:
            handleNumber(buttonId);
            break;
    }
    updateDisplay();
}

function handleNumber(number) {
    if (currentValue === '0') {
        currentValue = number;
    } else {
        currentValue += number;
    }
}

function calculate() {
    if (previousValue !== null && operator !== null) {
        const prev = parseFloat(previousValue);
        const curr = parseFloat(currentValue);
        switch (operator) {
            case '+':
                currentValue = (prev + curr).toString();
                break;
            case '-':
                currentValue = (prev - curr).toString();
                break;
            case '*':
                currentValue = (prev * curr).toString();
                break;
            case '/':
                if (curr === 0) {
                    currentValue = 'Error';
                } else {
                    currentValue = (prev / curr).toString();
                }
                break;
            default:
                break;
        }
        previousValue = null;
    }
    else {
        previousValue = currentValue;
        currentValue = '0';
    }
}

function clearDisplay() {
    currentValue = '0';
    previousValue = null;
    operator = null;
}

function updateDisplay() {
    display.textContent = currentValue;
}