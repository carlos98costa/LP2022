function calcular() {
    let salarioMin = parseFloat(document.getElementById("salarioMin").value)
    let salarioFunc = parseFloat(document.getElementById("salarioFunc").value)
    let qtdSalarios = salarioFunc / salarioMin

    document.getElementById("qtdSalarios").innerHTML = 
    `A area do losango será ${qtdSalarios}`
}