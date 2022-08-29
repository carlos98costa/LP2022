function calcular() {
    let peso = parseFloat(document.getElementById("peso").value)
    let pesoG = peso * 1000

    document.getElementById("pesoG").innerHTML = 
    `O peso ${peso} kg em gramas é ${pesoG} g`

}