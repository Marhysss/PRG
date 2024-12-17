const a = 1;
const b = -3;
const c = 2;

let Dk = b ** 2 - 4 * a * c;

if (a === 0) {
    if (b === 0) {
        if (c === 0) {
            console.log("Je nekonečně mnoho řešení");
        } 
        else {
            console.log("žádné řešení");
        }
    } 
    else  {
        let x = -c / b;
        console.log("Kořen lineární rovnice:");
        console.log("x = " + x);
    }
} 
    else {
        if (Dk < 0) {
            console.log("Není reálné řešení");
    } 
                else {
                     let x1 = (-b + Math.sqrt(Dk)) / (2 * a);
                        if (Dk > 0) {
                         let x2 = (-b - Math.sqrt(Dk)) / (2 * a);
                        console.log("Dva kořeny kvadratické rovnice:");
                        console.log("x1 = " + x1);
                        console.log("x2 = " + x2);
        } 
            else {
            console.log("Jeden kořen kvadratické rovnice:");
            console.log("x = " + x1);
        }
    }
}
