// globální počítadlo
let counter = 0;

const btnKlikni = document.querySelector('#btnKlikni');
const btnReset = document.querySelector('#btnReset')
const sVystup = document.querySelector('#sVystup')

sVystup.textContent = counter;

btnKlikni.onclick = function() {
    counter++;
    sVystup.textContent = counter;
}

btnReset.onclick = function() {
    counter = 0;
    sVystup.textContent = counter;
}
