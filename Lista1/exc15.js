function calcular() {
    let salario = parseFloat(document.getElementById("salario").value)
    let conta1 = parseFloat(document.getElementById("conta1").value)
    let conta2 = parseFloat(document.getElementById("conta2").value)
    let restante = (salario) - (conta1 * 1.02) - (conta2 * 1.02)
    document.getElementById("restante").innerHTML = 
    `O restante do salario de R$ ${salario} após pagar as contas dos valores
    ${conta1*1.02} e ${conta2*1.02} será de R$ ${restante.toFixed(2)}`
}