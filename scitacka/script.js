const tbxCislo1 = document.getElementById("cislo1")
const tbxCislo2 = document.getElementById("cislo2")
const btnPlus = document.getElementById("tlacitko")
const divVystup = document.getElementById("vystup")



function kliknuti(){
    let x = tbxCislo1.value;
    let y = tbxCislo2.value;
    divVystup.innerText = x + y;

}

btnPlus.onclick = kliknuti; 

/*
btnPlus.onclick = function(){
    let x = tbxCislo1.value;
    let y = tbxCislo2.value;
    divVystup.innerText = Number (x) + Number (y);
    
} */