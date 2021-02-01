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
    const updatedInput = (currentInput.value).slice(0, -1);
    currentInput.value = updatedInput;
}

// clear input function
function clearInput() {
    document.getElementById('input-display').value = '';
}

function changeDisplayProperty(id, property) {
    document.getElementById(id).style.display = property;
}

let numberOfAttempt = 0;

// varify pin function
function varifyPin() {
    numberOfAttempt++;
    if (document.getElementById('generated-pin-display').value == document.getElementById('input-display').value && numberOfAttempt <= 3) {
        changeDisplayProperty('matched', 'block');
        changeDisplayProperty('not-matched', 'none');
        changeDisplayProperty('left-console', 'none');
        changeDisplayProperty('right-console', 'none');
    }
    else if(numberOfAttempt == 3){
        changeDisplayProperty('not-matched', 'block');
        changeDisplayProperty('left-console', 'none');
        changeDisplayProperty('right-console', 'none');
    }
    else {
        changeDisplayProperty('not-matched', 'block');;
        changeDisplayProperty('matched', 'none');
        document.getElementById('attempt-left').innerText = (3 - numberOfAttempt) + ' try left';
    }
}