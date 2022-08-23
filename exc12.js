function calcular() {
    let salarioMin = parseFloat(document.getElementById("salarioMin").value)
    let salarioFunc = parseFloat(document.getElementById("salarioFunc").value)
    let qtdSalarios = salarioFunc / salarioMin

    document.getElementById("qtdSalarios").innerHTML = 
    `O funcionario recebe o salario equivalente a ${qtdSalarios.toFixed(2)} salarios minimos!`
}