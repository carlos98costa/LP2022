function calcular() {
    let diagMaior = parseFloat(document.getElementById("diagMaior").value)
    let diagMenor = parseFloat(document.getElementById("diagMenor").value)
    let area = (diagMaior * diagMenor) / 2
    
    document.getElementById("area").innerHTML = 
    `A area do losango será ${area}`
}