function calcular() {
    let salarioAtual = parseFloat(document.getElementById("salarioAtual").value)
    
    if (salarioAtual < 500) {
        resultado = salarioAtual * 1.3
        document.getElementById("resultado").innerHTML = 
        `O novo salario do funcionario com o reajuste será R$ ${resultado.toFixed(2)}`
    }else {
        document.getElementById("resultado").innerHTML = 
        `O funcionario não tem direito ao reajuste, o salario continua R$ ${salarioAtual.toFixed(2)}`
    }
}
