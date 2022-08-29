function calcular() {
    let num1 = parseFloat(document.getElementById("num1").value)
    let num2 = parseFloat(document.getElementById("num2").value)
    let resultado = (num1 * 0.4) + (num2 * 0.6)
    document.getElementById("resultado").innerHTML = 
    `A media ponderada das notas Nota1: ${num1} e Nota2: ${num2} é
    Média: ${resultado.toFixed(2)}`
}