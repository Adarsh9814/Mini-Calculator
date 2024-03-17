function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    switch (operation) {
        case 'add':
            result = num1 + num2;
            alert("Result: " + result);
            break;
        case 'subtract':
            result = num1 - num2;
            alert("Result: " + result);
            break;
        case 'divide':
            if (num2 === 0) {
                alert("Error: Division by zero");
            } else {
                result = num1 / num2;
                alert("Result: " + result);
            }
            break;
        case 'multiply':
            result = num1 * num2;
            alert("Result: " + result);
            break;
        default:
            alert("Invalid operation");
    }
}