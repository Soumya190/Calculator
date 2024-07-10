document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById('input');
    const result = document.getElementById('result');
    const buttons = document.querySelectorAll('button');
    let currentInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.innerText;

            if (value === 'Clear') {
                currentInput = '';
                result.textContent = '';
            } else if (value === 'C') {
                currentInput = currentInput.slice(0, -1);
            } else if (value === '=') {
                try {
                    // Replace the symbols with the standard operators
                    let evaluatedInput = currentInput.replace(/×/g, '*').replace(/÷/g, '/');
                    currentInput = eval(evaluatedInput).toString();
                    result.textContent = currentInput;
                } catch {
                    result.textContent = 'Error';
                }
            } else {
                currentInput += value;
            }
            input.value = currentInput;
        });
    });
});
