function calcular() {
    let num1 = parseFloat(document.getElementById("num1").value)
    let num2 = parseFloat(document.getElementById("num2").value)
    if (num1 < num2) {
        document.getElementById("resultado").innerHTML = 
        `O menor numero é ${num1}`
    }else {
        document.getElementById("resultado").innerHTML = 
        `O menor numero é ${num2}`
    }
}