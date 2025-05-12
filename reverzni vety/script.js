function otocVetu(veta, varianta) { // funkce pro otoceni vety
    const slova = veta.split(" ");   // rozdeli vetu na slova
    console.log(slova);  // vypisuje pole slov

    const otocenaSlova = []; // prázdné pole pro otocená slova

    while (slova.length > 0) { // pokud je pole slova prázdné
        const slovo = slova.shift(); // vezme první slovo 
        let otoceneSlovo = slovo;  // prázdná proměnná pro otocené slovo

        otoceneSlovo = slovo.split("").reverse().join(""); // otočí jednotlivé slovo

        otocenaSlova.push(otoceneSlovo); // přidá otocené slovo do pole otocených slov
    }
        console.log(otocenaSlova); // vypisuje pole otocených slov        
    
    return otocenaSlova.join(" "); // spojí otocená slova do jedné věty


}

let puvodniText = "Ahoj já jsem Tomáš a mám rád fotbal";
let zakodovanyText = otocVetu(puvodniText, false); 
console.log(puvodniText);
console.log(zakodovanyText);

