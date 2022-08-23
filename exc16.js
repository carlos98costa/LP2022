function calcular() {
    let cateto1 = parseFloat(document.getElementById("cateto1").value)
    let cateto2 = parseFloat(document.getElementById("cateto2").value)
    let hipotenusa = Math.sqrt(cateto1 / 2) + Math.sqrt(cateto2 / 2)
}