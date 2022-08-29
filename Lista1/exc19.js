function calcular() {
    let medida1 = parseFloat(document.getElementById("medida1").value)
    let medida2 = parseFloat(document.getElementById("medida2").value)
    let metrosQuad = medida1 * medida2
    let potTotal = metrosQuad * 18
    document.getElementById("potTotal").innerHTML = 
    `Para iluminar um como de ${metrosQuad} m², serão necessarios ${potTotal}W de potencia`

}