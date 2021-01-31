// pin generate function
function generatePin() {
    const random = Math.random() * 10000;
    const pin = (random + '').split('.')[0];
    if (pin.length == 4) {
        document.getElementById('generated-pin-display').value = pin;
    }
    else {
        generatePin();
    }
}

// getting number input function
function getNumber(value) {
    let currentInput = document.getElementById('input-display');
    currentInput.value = currentInput.value + value;
}
// delete function
function deleteOneDigit() {
    let currentInput = document.getElementById('input-display');
    const currentInputNumber = currentInput.value;
    const indexOfLastDigitOfInput = (currentInput.value).length;
    currentInput.value = '';

}

// clear input function
function clearInput() {
    document.getElementById('input-display').value = '';
}

// varify pin function
function varifyPin() {
    if (document.getElementById('generated-pin-display').value == document.getElementById('input-display').value) {
        document.getElementById('matched').style.display = 'block';
    }
    else {
        document.getElementById('not-matched').style.display = 'block';
    }
}