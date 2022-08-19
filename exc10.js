function calcular() {
    let ladoA = parseFloat(document.getElementById("ladoA").value)
    let ladoB = parseFloat(document.getElementById("ladoB").value)
    let areaQ = ladoA * ladoB

    document.getElementById("areaQ").innerHTML = 
    `A área do Quadrado será ${areaQ}`
}