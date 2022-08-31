function calcular() {
    let anguloA = parseFloat(document.getElementById("anguloA").value)
    let anguloB = parseFloat(document.getElementById("anguloB").value)
    resultado = 180 - (anguloA + anguloB)

    document.getElementById("resultado").innerHTML = 
    `O valor do terceiro angulo do triangulo é ${resultado}`
}