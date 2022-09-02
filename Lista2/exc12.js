function calcular() {
    let salarioBruto = parseFloat(document.getElementById("salarioBruto").value)
    if (salarioBruto <= 350) {
        resultado = (salarioBruto + 100) - (salarioBruto * 0.07)
        document.getElementById("resultado").innerHTML = 
        `O novo salario a receber será R$ ${resultado.toFixed(2)}`
    }else if (salarioBruto > 350 && salarioBruto <= 600) {
        resultado = (salarioBruto + 75) - (salarioBruto * 0.07)
        document.getElementById("resultado").innerHTML = 
        `O novo salario a receber será R$ ${resultado.toFixed(2)}`
    }else if (salarioBruto > 600 && salarioBruto <= 900) {
        resultado = (salarioBruto + 50) - (salarioBruto * 0.07)
        document.getElementById("resultado").innerHTML = 
        `O novo salario a receber será R$ ${resultado.toFixed(2)}`
    }else {
        resultado = (salarioBruto + 35) - (salarioBruto * 0.07)
        document.getElementById("resultado").innerHTML = 
        `O novo salario a receber será R$ ${resultado.toFixed(2)}`
    }
}