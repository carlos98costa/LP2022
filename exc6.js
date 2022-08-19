function calcular() {
    let salario = parseFloat(document.getElementById("salario").value)
    let vendas = parseFloat(document.getElementById("vendas").value)
    let novoSalario = parseFloat(salario) + (vendas*0.04)
    document.getElementById("novoSalario").innerHTML = 
    `O novo salario com bonus será R$ ${novoSalario.toFixed(2)}`
}