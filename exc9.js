function calcular() {
    let bMaior = parseFloat(document.getElementById("bMaior").value)
    let bMenor = parseFloat(document.getElementById("bMenor").value)
    let altura = parseFloat(document.getElementById("altura").value)
    let areaTrapezio = ((bMaior+bMenor)*altura)/2
    document.getElementById("areaTrapezio").innerHTML = 
    `A área do Trapezio é ${areaTrapezio}`
}