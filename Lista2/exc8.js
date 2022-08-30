function calcular() {
    let salarioAtual = parseFloat(document.getElementById("salarioAtual").value)
    if (salarioAtual <= 300) {
        resultado = salarioAtual * 1.35
        document.getElementById("resultado").innerHTML = 
        `O novo salario do funcionario com o reajuste é R$ ${resultado.toFixed(2)}`
    }else {
        resultado = salarioAtual * 1.15
        document.getElementById("resultado").innerHTML = 
        `O novo salario do funcionario com o reajuste é R$ ${resultado.toFixed(2)}`
    }
}