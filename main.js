// NOTE: 
// This is the starter file for a blog post "How to build a calculator". You can follow the lesson at https://zellwk.com/blog/calculator-part-1

// # START EDITING YOUR JAVASCRIPT HERE
const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');
const display = document.querySelector('.calculator__display');

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;

        if(!action) {
            if(displayedNum === '0') {
                display.textContent = keyContent;
            }
            else {
                display.textContent = displayedNum + keyContent;
            }
            console.log('number key!');
        }
        
        if(action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
            key.classList.add('is-depressed');
            console.log('operator key!');
        }
        
        if(action === 'decimal') {
            display.textContent = displayedNum + '.';
            console.log('decimal key!');
        }
        if(action === 'clear') {
            console.log('clear key!');
        }
        if(action === 'calculate') {
            console.log('equal key!');
        }
        Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'));
    }
})