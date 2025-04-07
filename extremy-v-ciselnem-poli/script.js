const pole = [-5, 10, 15, 8, -7, 2, 4, 0, 5, -3, -20,];

function nejmensi(x){
    let min = Infinity;
    for (let i = 0; i < x.length; i++){
        if (x[i] < min) min = x[i];
    }
    return min;
}

console.log(nejmensi(pole));

function prepisPosledni(a) {
    a[a.length-1] = 999;
}
console.log(pole);



function druhaNejmensi(x) {
    let min = Infinity;
    let secondMin = Infinity;

    for (let i = 0; i < x.length; i++) {
        if (x[i] < min) {
            secondMin = min;
            min = x[i];
        } else if (x[i] < secondMin && x[i] !== min) {
            secondMin = x[i];
        }
    }
    return secondMin;
}

console.log(druhaNejmensi(pole));

function nejvetsi(x){
    let max = -Infinity;
    for (let i = 0; i < x.length; i++){
        if (x[i] > max) max = x[i];
    }
    return max;
}
console.log(nejvetsi(pole));

function prumer(x){
    let soucet = 0;
    for (let i = 0; i < x.length; i++){
        soucet += x[i];
    }
    return soucet/x.length;
}
console.log(prumer(pole));

function nejblizeprumeru(x){
    let prum = prumer(x);
    let nejblizsi = Infinity;
    for (let i = 0; i < x.length; i++){
        if (Math.abs(x[i]-prum) < Math.abs(nejblizsi-prum)) nejblizsi = x[i];
    }
    return nejblizsi;
}
console.log(nejblizeprumeru(pole));
