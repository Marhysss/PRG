function sortNumbers() {

    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let num3 = parseFloat(document.getElementById('num3').value);



    let order = document.querySelector('input[name="order"]:checked').value;

    let numbers = [num1, num2, num3];


    if (order === "ascending") {
        numbers.sort((a, b) => a - b); 
    } else {
        numbers.sort((a, b) => b - a);  
    }

    document.getElementById('result1').textContent = numbers[0];
    document.getElementById('result2').textContent = numbers[1];
    document.getElementById('result3').textContent = numbers[2];
}
