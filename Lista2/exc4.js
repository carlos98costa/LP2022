function calcular() {
    let num1 = parseFloat(document.getElementById("num1").value)
    let num2 = parseFloat(document.getElementById("num2").value)
    let num3 = parseFloat(document.getElementById("num3").value)
    if (num1 > num2 && num1 > num3) {
        document.getElementById("resultado").innerHTML = 
        `O maior numero é ${num1}`
    }else if (num2 > num1 && num1 > num3) {
        document.getElementById("resultado").innerHTML = 
        `O maior numero é ${num2}`
    }else {
        document.getElementById("resultado").innerHTML = 
        `O maior numero é ${num3}`
    }
}