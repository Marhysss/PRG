function generujSlovo(pocetPismen) {
    const pismena = "abcdefghijklmnopqrstuvwxyz";
    let i=0;    
    let slovo = "";
    while (i<pocetPismen) {
        let indexPismena = Math.floor(Math.random() * pismena.length);
        slovo += pismena[indexPismena];
        i++;
    }
    return slovo;
}

function generujVetu(pocetSlov) {
    let i=0;
    let veta = "";
    while (i<pocetSlov) {
        let pocetPismen = Math.floor(Math.random() * 10) + 1;
        veta += generujSlovo(pocetPismen) + " ";
        i++;
    }
    return veta;
}

let i=0;
while (i<10) {
    console.log(generujVetu(Math.floor(Math.random() * 10) + 1));
    i++;
}
