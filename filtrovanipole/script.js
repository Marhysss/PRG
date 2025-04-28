function filtrace(pole) {
    let prvek;
    let delkaPole = pole.length;
    for (let i = 0; i < delkaPole; i++) {
        prvek = pole.shift();
        if (prvek >= 0) {
            pole.push(prvek);
        }
    }
}

const h = [-1, 2, 0, 3, -5, 10, 7];
// const h = [2, 0, 3, 10];
console.log(h);
filtrace(h);
console.log(h);