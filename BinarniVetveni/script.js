let firstname;                  // deklarace promenne (rezervovani identifikatoru promenne)
firstname = "Karel";            // vytvoreni promenne retezcovou hodnotou string
let vek = "15";                   // deklarace s vytvorenim promenne ciselnou hodnotou

//let plnoletost = false        
let plnoletost = vek>=18;        // deklarace s vytvorenim promenne logickou hodnotou ktera je vysledkem logickeho vyrazu
                             
console.log(plnoletost);

let rokVydaniOP = vek==15;
console.log(rokVydaniOP);

let zakZS = vek + 1 >= 6 && vek + 1 <= 15;
console.log(zakZS);

if (vek<6) {
    console.log(firstname + " je predskolak.")
}
    else {
        if (vek<=15) {
            console.log(firstname + " je zak zs")
        }
        else {
            if (vek<=19) {
                console.log(firstname + " je zak stredni skoly")
            }
            else {
                console.log(firstname + " je v produktivnim veku")
            }
        }
    }