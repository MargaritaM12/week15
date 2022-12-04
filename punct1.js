const select = document.getElementById('select');
const num1 = document.getElementById('numFirst');
const num2 = document.getElementById('numSecond');
const btnResult = document.getElementById('send');
const resultValuePage = document.getElementById('result');

function createCalc() {
    switch (select.value) {
        case '+':
            resultValuePage.innerHTML = numFirst.value + numSecond.value;
            break;
        case '-':
            resultValuePage.innerHTML = numFirst.value - numSecond.value;
            break;
        case '*':
            resultValuePage.innerHTML = numFirst.value * numSecond.value;
            break;
        case '/':
            resultValuePage.innerHTML = numFirst.value / numSecond.value;
            break;
    }
}
let case = false
if case(numFirst.value / 0) {
    alert('На ноль делить нельзя!');
}