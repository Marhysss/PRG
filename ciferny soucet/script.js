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

console.log(digitSum(123)); // 6
console.log(digitSum(1234)); // 10
console.log(digitSum(12345)); // 15
