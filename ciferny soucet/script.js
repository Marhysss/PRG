function digitSum(cislo) {
    let soucet = 0;
    let numString = String(cislo);
    let znakCislice;
    for(let i=0; i<numString.length; i++) {
        znakCislice = numString[i];
        soucet += parseInt(znakCislice);
    }
    return soucet;
}

function isPalindrom(cislo) {
    let numString = String(cislo);
    for (let i = 0; i < Math.floor(numString.length / 2); i++) {
        if (numString[i] !== numString[numString.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrom(12321)); // true
console.log(isPalindrom(12345)); // false
console.log(isPalindrom(123321)); // true
