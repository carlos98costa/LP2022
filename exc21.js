function calcular() {
    let horasTrabalhadas = parseFloat(document.getElementById("horasTrabalhadas").value)
    let salarioMin = parseFloat(document.getElementById("salarioMin").value)
    let horasExtras = parseFloat(document.getElementById("horasExtras").value)
    let valorHoraTrab = salarioMin * (1/8)
    let valorHoraExt =  salarioMin * (1/4)
    let salarioBruto = valorHoraTrab * horasTrabalhadas
    let qtdRecHorasExt = valorHoraExt * horasExtras
    let salarioFinal = salarioBruto + qtdRecHorasExt
    document.getElementById("salarioFinal").innerHTML = 
    `O salario a receber é R$ ${salarioFinal.toFixed(2)}`
}