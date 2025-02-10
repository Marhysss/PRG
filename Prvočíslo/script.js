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

const tlacitko = document.querySelector('button');
const vstup = document.querySelector('#cislo');
const vysledek = document.querySelector('#vysledek');

tlacitko.onclick = function() {
    const cislo = Number(vstup.value);
    if (isNaN(cislo)) {
        vysledek.textContent = 'Zadejte číslo!';
    } else {
        if (jePrvocislo(cislo)) {
            vysledek.textContent = `Číslo ${cislo} je prvočíslo.`;
    } else {
        vysledek.textContent = `Číslo ${cislo} není prvočíslo.`;
    }

    }
}