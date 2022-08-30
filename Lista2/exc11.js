function calcular() {
    let salarioAtual = parseFloat(document.getElementById("salarioAtual").value)

    if (salarioAtual <= 300) {
        aumento = salarioAtual * 0.15
        resultado = salarioAtual + aumento
        document.getElementById("resultado").innerHTML = 
        `O valor do aumento do salario foi de R$ ${aumento}. <br>
        O novo salario será R$ ${resultado}`
    }else if (salarioAtual > 300 && salarioAtual <= 600) {
        aumento = salarioAtual * 0.10
        resultado = salarioAtual + aumento
        document.getElementById("resultado").innerHTML = 
        `O valor do aumento do salario foi de R$ ${aumento}. <br>
        O novo salario será R$ ${resultado}`
    }else if (salarioAtual > 600 && salarioAtual <= 900) {
        aumento = salarioAtual * 0.05
        resultado = salarioAtual + aumento
        document.getElementById("resultado").innerHTML = 
        `O valor do aumento do salario foi de R$ ${aumento}. <br>
        O novo salario será R$ ${resultado}`
    }else {
        aumento = salarioAtual * 0
        resultado = salarioAtual + aumento
        document.getElementById("resultado").innerHTML = 
        `O valor do aumento do salario foi de R$ ${aumento}. <br>
        O novo salario será R$ ${resultado}`
    }
}