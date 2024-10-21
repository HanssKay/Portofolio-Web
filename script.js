let display = document.getElementById('display');
let currentInput = '';

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function appendOperator(operator) {
    if (currentInput !== '') {
        currentInput += ' ' + operator + ' ';
        display.value = currentInput;
    }
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}

function deleteLast() {
    currentInput = currentInput.trim().slice(0, -1);
    display.value = currentInput;
}

function calculate() {
    try {
        currentInput = eval(currentInput.replace(/x/g, '*'));
        display.value = currentInput;
    } catch {
        display.value = 'Error';
    }
}

// Event listener untuk mendeteksi input keyboard
document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (!isNaN(key)) {
        // Jika yang ditekan adalah angka
        appendNumber(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        // Jika yang ditekan adalah operator
        appendOperator(key);
    } else if (key === 'Enter') {
        // Jika yang ditekan adalah Enter (untuk hasil)
        calculate();
    } else if (key === 'Backspace') {
        // Jika yang ditekan adalah Backspace (untuk hapus karakter)
        deleteLast();
    } else if (key === 'Escape') {
        // Jika yang ditekan adalah Escape (untuk reset)
        clearDisplay();
    } else if (key === '.') {
        // Jika yang ditekan adalah titik desimal
        appendNumber('.');
    }
});