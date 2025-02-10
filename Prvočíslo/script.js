function jePrvocislo(number) {
    if (number % 2 === 0) {
        return number===2; 
    }
    let delitel = 3;
    while (delitel <= Math.sqrt(number)) {
        if (number % delitel === 0) {
            return false;
        }
        delitel += 2;
    }
    return true;
}

console.log(jePrvocislo(1)); // false
console.log(jePrvocislo(2)); // true
console.log(jePrvocislo(3)); // true
console.log(jePrvocislo(4)); // false
console.log(jePrvocislo(51)); // true
console.log(jePrvocislo(17)); // false