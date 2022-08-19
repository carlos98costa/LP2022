function calcular() {
    let peso = parseFloat(document.getElementById("peso").value)
    let resultado1 = peso * 1.15
    let resultado2 = peso * 0.8
    document.getElementById("resultado1").innerHTML = 
    `O novo peso da pessoa caso engorde 15% será de  ${resultado1.toFixed(2)} kg`
    document.getElementById("resultado2").innerHTML = 
    `O novo peso da pessoa caso emagreça 20% será de  ${resultado2.toFixed(2)} kg`
}