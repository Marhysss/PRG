function checkPoint() {
    const x = parseFloat(document.getElementById("xCoord").value);
    const y = parseFloat(document.getElementById("yCoord").value);


        if (isNaN(x) || isNaN(y)) {
            document.getElementById("result").textContent = "Zadejte platné číselné hodnoty!";
            document.getElementById("result").style.color = "black";
            return;
        }


const halfSide = 25;

    if (x >= -halfSide && x <= halfSide && y >= -halfSide && y <= halfSide) {
        document.getElementById("result").textContent = "Bod leží uvnitř čtverce nebo na jeho hranici.";
        document.getElementById("result").style.color = "green";
    } else {
        document.getElementById("result").textContent = "Bod leží mimo čtverec.";
        document.getElementById("result").style.color = "red";
    }
}