function calcular() {
    let salario = document.getElementById("salario").value
    let vendas = document.getElementById("vendas").value
    let novoSalario = parseFloat(salario + (vendas*0.04))
    document.getElementById("novoSalario").innerHTML = 
    `O novo salario com bonus será R$ ${novoSalario.toFixed(2)}`
}