function calcular() {
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value
    let resultado = num1 - num2
    document.getElementById("resultado").innerHTML = 
    `O resultado da subtração dos valores: ${num1} - ${num2} = ${resultado}`
}