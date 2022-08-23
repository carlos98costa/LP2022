function calcular() {
    let cateto1 = parseFloat(document.getElementById("cateto1").value)
    let cateto2 = parseFloat(document.getElementById("cateto2").value)
    let hipotenusa = Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2))
    document.getElementById("hipotenusa").innerHTML = 
    `A Hipotenusa será ${hipotenusa.toFixed(2)}`
}