function calcular() {
    let salario = parseFloat(document.getElementById("salario").value)
    if (salario <= 300) {
        resultado = salario * 1.5
    }else if (salario > 300 && salario <= 500) {
        resultado = salario * 1.4
    }else if (salario > 500 && salario <= 700) {
        resultado = salario * 1.3
    }else if (salario > 700 && salario <= 800) {
        resultado = salario * 1.2
    }else if (salario > 800 && salario <= 1000) {
        resultado = salario * 1.1
    }else {
        resultado = salario * 1.05
    }

    document.getElementById("resultado").innerHTML = 
    `O novo salario do funcionario será de R$ ${resultado.toFixed(2)}`
}