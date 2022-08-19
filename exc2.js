function calcular() {
    let num1 = parseFloat(document.getElementById("num1").value)
    let num2 = parseFloat(document.getElementById("num2").value)
    let num3 = parseFloat(document.getElementById("num3").value)
    resultado = num1 * num2 * num3
    document.getElementById("resultado").innerHTML = 
    `O resultado da multiplicação dos valores ${num1} x ${num2}
    x ${num3} = ${resultado}`
}